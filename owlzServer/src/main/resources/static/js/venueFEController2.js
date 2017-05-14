/**
 * Created by Dan on 5/13/2017.
 */

let xmlHttp = new XMLHttpRequest(); //the object used to communicate with the server
xmlHttp.responseType = 'json';

function Venue() {
    this.title;
    this.shortDescription;
    this.description;
    this.photo;
}

let venues = [];


pageInitialization(); //calls page initialization to generate page on request


function pageInitialization(){
    let eventWindow = document.getElementById('venueWindow');

    if(eventWindow.innerHTML.length == 0){ //if there is nothing in the window using regular expressions
    	alert("Zipcode: " + getZipCode());
        document.getElementsByTagName("input")[0].value = getZipCode(); //gets zipcode from model and puts that into search bar
        search(); //runs search function for the account zipcode

    }else{
        alert("venues not empty"); //used for testing
    }
}

function search(){
    if(xmlHttp.readyState == 0 || xmlHttp.readyState == 4){
        let searchText = encodeURIComponent(document.getElementsByTagName("input")[0].value);
        xmlHttp.open("GET", ("http://localhost:8080/funOwlVenues/search/"+searchText), true);
        xmlHttp.onreadystatechange = handleServerResponse;
        xmlHttp.send(null);

    }else{
        setTimeout('search()', 500); //wait 500 ms to retry
    }
}

function handleServerResponse(){
    if(xmlHttp.readyState == 4){ //communication is done
        alert(xmlHttp.response);
        alert("status: " + xmlHttp.status);
        if(xmlHttp.status == 200){ //communication is ok (not 0)
            venues = xmlHttp.response;
            removeVenues();
            populateVenues();
        }else{
            alert("Couldn't find events!")
        }
    }

}


function populateVenues(){

    var window = document.getElementById('venueWindow');


    for(let i=0; i<venues.length; i++){

        var focusVenue = venues[i];

        var eventBox = document.createElement('div');
        eventBox.className = "eventBox";
        //alert(i);


        eventBox.onclick = function(){
            popUpToggle('venue-popup');
            this.x = i;
            generatePopUp(this.x);
        };

        var eventPhoto = document.createElement('img');
        eventPhoto.className = "eventPhoto";
        eventPhoto.src = focusVenue.photo;

        var titleBox = document.createElement('div');
        titleBox.className = "eventTitle";

        var title = document.createElement('h3');
        title.innerHTML = focusVenue.title;

        var description = document.createElement('p');
        description.innerHTML = focusVenue.shortDescription;

        titleBox.appendChild(title);
        titleBox.appendChild(description);

        eventBox.appendChild(eventPhoto);
        eventBox.appendChild(titleBox);


        window.appendChild(eventBox);

    }
}

function removeVenues(){
    let venuesBody = document.getElementById("venueWindow");
    venuesBody.innerHTML = ""; //remove everything!
}

function generatePopUp(index){
    var focusVenue = venues[index];

    //alert(index);

    var popupBody = document.getElementsByClassName("popup-full")[0];

    var popupTitle = document.getElementsByClassName("popup-full")[0].getElementsByTagName("h1")[0];
    popupTitle.innerHTML = focusVenue.title;

    var photo = popupBody.getElementsByClassName("popup-photo-column")[0].getElementsByTagName("img")[0];
    photo.src = focusVenue.photo;
    photo.className = "popup-photo";

    var popupDesc = popupBody.getElementsByClassName("popup-body")[0].getElementsByClassName("popup-text-col")[0].getElementsByTagName("p")[0];
    popupDesc.innerHTML = focusVenue.description;

}