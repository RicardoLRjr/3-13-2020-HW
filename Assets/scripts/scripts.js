$( document ).ready(function() {
    console.log( "ready!" );
var now = moment()

headerDate();

function headerDate(){
$("#currentDay").text(now);

console.log(moment().creationData());
// function headerDate(){
//     moment().local();
//     moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); // "Sunday, February 14th 2010, 3:25:50 pm"

// }

}


});