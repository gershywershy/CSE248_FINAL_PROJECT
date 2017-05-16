/**
 * Created by Dan on 5/4/2017.
 */

function popUpToggle(id) {
    //alert(id);
    var popup = document.getElementById(id);
    //var body = document.getElementsByTagName("body")[0]; //unused atm, but might be used to restrict scroll
    var scrollBox = document.getElementsByClassName("verticalScrollBox")[0];
    popup.classList.toggle("show");
    scrollBox.classList.toggle("unclickable");
}