/**
 * Created by Dan on 5/12/2017.
 */

var xmlHttp = new XMLHttpRequest();
xmlHttp.responseType = 'json';

function Event () {
    this.title;
    this.shortDescription;
    this.description;
    this.photo;
    this.eventIndex;
}

var events = [];

function search(){
    if(xmlHttp.readyState == 0 || xmlHttp.readyState == 4){
        var searchText = encodeURIComponent(document.getElementsByTagName("input")[0].value);
        xmlHttp.open("GET", ("http://localhost:8080/funOwlEvents.html/search/"+searchText), true);
        xmlHttp.onreadystatechange = handleServerResponse;
        xmlHttp.send(null);

    }else{
        setTimeout('search()', 500); //wait 500 ms to retry
    }
}

function handleServerResponse(){
    if(xmlHttp.readyState == 4){ //communication is done
        //alert(xmlHttp.response);
        //alert("status: " + xmlHttp.status);
        if(xmlHttp.status == 200){ //communication is ok (not 0)
            events = xmlHttp.response;
            removeEvents();
            populateEvents();
        }else{
            alert("Couldn't find events!");
        }
    }

}

function populateEvents(){

    var window = document.getElementById('eventWindow');
    
    //alert("Tried population");

    for(let i=0; i<events.length; i++){

        var focusEvent = events[i];
        //alert(focusEvent.title);

        var eventBox = document.createElement('div');
        eventBox.className = "eventBox";
        //alert(focusEvent.eventIndex);


        eventBox.onclick = function(){
            popUpToggle('event-popup');
            this.x = i;
            generatePopUp(this.x);
        };

        var eventPhoto = document.createElement('img');
        eventPhoto.className = "eventPhoto";
        eventPhoto.src = focusEvent.photo;

        var titleBox = document.createElement('div');
        titleBox.className = "eventTitle";

        var title = document.createElement('h3');
        title.innerHTML = focusEvent.title;

        var description = document.createElement('p');
        description.innerHTML = focusEvent.shortDescription;

        titleBox.appendChild(title);
        titleBox.appendChild(description);

        eventBox.appendChild(eventPhoto);
        eventBox.appendChild(titleBox);

        window.appendChild(eventBox);
    }
}

function removeEvents(){
    var popupBody = document.getElementById("eventWindow");
    popupBody.innerHTML = ""; //remove everything!
}

function generatePopUp(index){
    var focusEvent = events[index];

    //alert(index);

    var popupBody = document.getElementsByClassName("popup-full")[0];

    var popupTitle = document.getElementsByClassName("popup-full")[0].getElementsByTagName("h1")[0];
    popupTitle.innerHTML = focusEvent.title;

    var photo = popupBody.getElementsByClassName("popup-photo-column")[0].getElementsByTagName("img")[0];
    photo.src = focusEvent.photo;
    photo.className = "popup-photo";

    var popupDesc = popupBody.getElementsByClassName("popup-body")[0].getElementsByClassName("popup-text-col")[0].getElementsByTagName("p")[0];
    popupDesc.innerHTML = focusEvent.description;

}