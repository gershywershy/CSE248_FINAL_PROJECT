/**
 * Created by Dan on 5/11/2017.
 */

function Event () {
    this.title;
    this.shortDescription;
    this.description;
    this.photo;
    this.eventIndex;
}

var genericEventTitle = "Event ";
var titleCount = 0;
var genericSD = "Some really cool event description. We have a lot of cool things planned, for our club event and things.";
var genericDesc = "Generic Description HMMMHSSDDDDSDSDS";

var events = [];

var event1 = new Event();
event1.title = genericEventTitle + (++titleCount);
event1.shortDescription = genericSD;
event1.description = genericDesc;
event1.photo = "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F30626206%2F22430626928%2F1%2Foriginal.jpg?w=800&rect=0%2C483%2C800%2C400&s=aa3a28adef1f530ccf637631dda24416";
event1.eventIndex = 0;

events.push(event1);

var event2 = new Event();
event2.title = genericEventTitle + (++titleCount);
event2.shortDescription = genericSD;
event2.description = genericDesc;
event2.photo = "https://s-media-cache-ak0.pinimg.com/564x/6e/6e/14/6e6e14afdd394df6a56ae5da57845244.jpg";
event2.eventIndex = 1;

events.push(event2);

var event3 = new Event();
event3.title = genericEventTitle + (++titleCount);
event3.shortDescription = genericSD;
event3.description = genericDesc;
event3.photo = "http://www.flashdancersnyc.com/wp-content/uploads/2017/03/Cocktail-Flyer-Template.gif";
event3.eventIndex = 2;

events.push(event3);

populateEvents(); //calls event population on add to page

function populateEvents(){

    var window = document.getElementById('eventWindow');


    for(let i=0; i<events.length; i++){

        var focusEvent = events[i];

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