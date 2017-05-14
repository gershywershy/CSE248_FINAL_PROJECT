/**
 * Created by Dan on 5/12/2017.
 */

let xmlHttp = new XMLHttpRequest();
xmlHttp.responseType = 'json';

let events = [];

setZipcode("11752"); //for testing
pageInitialization(); //runs search on page for the users zip code

function pageInitialization(){
    let eventWindow = document.getElementById('eventWindow');

    if(eventWindow.innerHTML.length == 0){ //if there is nothing in the window using regular expressions
        document.getElementsByTagName("input")[0].value = getZipCode(); //gets zipcode from model and puts that into search bar
        search(); //runs search function for the account zipcode

    }else{
        alert("events not empty"); //used for testing
    }
}

function search(){
    if(xmlHttp.readyState == 0 || xmlHttp.readyState == 4){
        let searchText = encodeURIComponent(document.getElementsByTagName("input")[0].value);
        xmlHttp.open("GET", ("http://localhost:8080/funOwlEvents/search/"+searchText), true);
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
            alert("Couldn't find events!"); //triggered if the server sends back an error msg on search request
        }
    }

}

function populateEvents(){

    let window = document.getElementById('eventWindow');


    for(let i=0; i<events.length; i++){

        let focusEvent = events[i];

        let eventBox = document.createElement('div');
        eventBox.className = "eventBox";
        //alert(focusEvent.eventIndex);


        eventBox.onclick = function(){
            popUpToggle('event-popup');
            this.x = i;
            generatePopUp(this.x);
        };

        let eventPhoto = document.createElement('img');
        eventPhoto.className = "eventPhoto";
        eventPhoto.src = focusEvent.photo;

        let titleBox = document.createElement('div');
        titleBox.className = "eventTitle";

        let title = document.createElement('h3');
        title.innerHTML = focusEvent.title;

        let description = document.createElement('p');
        description.innerHTML = focusEvent.shortDescription;

        titleBox.appendChild(title);
        titleBox.appendChild(description);

        eventBox.appendChild(eventPhoto);
        eventBox.appendChild(titleBox);

        window.appendChild(eventBox);
    }
}

function removeEvents(){
    let eventsBody = document.getElementById("eventWindow");
    eventsBody.innerHTML = ""; //remove everything!
}

function generatePopUp(index){
    let focusEvent = events[index];

    //alert(index);

    let popupBody = document.getElementsByClassName("popup-full")[0];

    let popupTitle = document.getElementsByClassName("popup-full")[0].getElementsByTagName("h1")[0];
    popupTitle.innerHTML = focusEvent.title;

    let photo = popupBody.getElementsByClassName("popup-photo-column")[0].getElementsByTagName("img")[0];
    photo.src = focusEvent.photo;
    photo.className = "popup-photo";

    let popupDesc = popupBody.getElementsByClassName("popup-body")[0].getElementsByClassName("popup-text-col")[0].getElementsByTagName("p")[0];
    popupDesc.innerHTML = focusEvent.description;

}