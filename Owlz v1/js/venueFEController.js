/**
 * Created by Dan on 5/11/2017.
 */

function Venue() {
    this.title;
    this.shortDescription;
    this.description;
    this.photo;
}

var genericVenueTitle = "Venue ";
var titleCount = 0;
var genericSD = "Wow our club is so cool! You should totally come here for the following reasons: we are a club. That's convincing right? Yeah I thought so. See you soon.";
var genericDesc = "ABOUT CIELO" + "\<br>" +
                "Cielo is a state-of-the-art space in downtown’s ultra chic Meat Packing District that provides sophisticated" +
                "fans of electronic music with a specialized space, tailored to their tastes. It is a haven for individuals" +
                "seeking culturally rich nightlife with neither the hassles of large clubs nor the elitism of upscale lounges" +
                "with too many VIP rooms. Once you are in Cielo, there will be no more ropes, checkpoints, or rules. For more" +
                "than 12 years, Cielo has stayed true to these initiatives and established itself as a legendary name in New York" + "\<br>" + "\<br>" +
                "City’s dance music underground." +

                "Cielo goes back to basics: the best DJs, a strong door, impeccable service, stunning decor and lighting, skillfully" +
                "designed acoustics and a Funktion One soundsystem that will blow the socks off even the most fastidious audiophile." +
                "The sunken dancefloor is surrounded by banquettes decked out in brown and beige suede with a range of intelligent" +
                "lighting effects to enhance the intimate design; the stylish look is inspired by the timeless 70’s aesthetic." + "\<br>" + "\<br>" +

                "Conceived in 2003, Cielo is the brainchild of co-owner Nicolas Matar. A DJ for the past 20 years, Nicolas was" +
                "most notably known for his residency at the infamous Pacha Nightclub in Ibiza. Nicolas played in the funky room" +
                "or “El Cielo” and credits those years as the inspiration for Cielo and his eventual return to New York. For" +
                "over a decade, Cielo has remained focused on maintaining high quality service and providing an experience unlike" +
                "any other. As demonstrated by the unprecedented number of awards and nominations the club currently boasts, Cielo" +
                "has established itself as an international brand with an edict of cutting-edge electronic music. In addition to" +
                "its accolades, Cielo has featured more top international DJs than any other club in North America since its opening." +
                "DJs such as Luciano, David Guetta and Sven Vath passed through Cielo doors before they were the kingpins they are today." + "\<br>" + "\<br>" +

                "See you on the dancefloor…";

var venues = [];

var venue1 = new Venue();
venue1.title = "Ceilo";
venue1.shortDescription = "Cielo is a state-of-the-art space in downtown’s ultra chic Meat Packing District that provides sophisticated fans of electronic music with a specialized space," +
                            "tailored to their tastes. It is a haven for individuals seeking culturally rich nightlife with neither the hassles of large clubs nor the elitism of upscale" +
                            " lounges with too many VIP rooms.";
venue1.description = genericDesc;
venue1.photo = "http://www.clothingtowear.com/pictures/421/421-nyc-nightclubs-c2a40d1.jpg";

venues.push(venue1);

var venue2 = new Venue();
venue2.title = "Reign";
venue2.shortDescription = genericSD;
venue2.description = genericDesc;
venue2.photo = "https://static1.squarespace.com/static/55b6dd6fe4b06f1beaf4d6be/t/57fed45c725e25e38f444195/1476318303556/";

venues.push(venue2);

var venue3 = new Venue();
venue3.title = "Solution";
venue3.shortDescription = genericSD;
venue3.description = genericDesc;
venue3.photo = "https://i.ytimg.com/vi/JWYhCWF2Anc/maxresdefault.jpg";

venues.push(venue3);

var venue4 = new Venue();
venue4.title = "Story";
venue4.shortDescription = genericSD;
venue4.description = genericDesc;
venue4.photo = "https://s-media-cache-ak0.pinimg.com/736x/af/ac/93/afac93134bf05f1e90f0432d4cd6f446.jpg";

venues.push(venue4);


populateVenues(); //calls event population on add to page

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