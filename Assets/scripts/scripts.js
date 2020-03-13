// Psuedocode: 
// 1. integrate date into header via jQuery
// 2. using jquery/moment.js, create function to check hour
//  if check hour function is earlier, create past block
// Hour blocks contain functionality to enter event 
// + a save button which commits value for each block into localStorage
// if it is current hour, use present
// if it is later, use future
// 3. once hour blocks have been created
// 4. Call back function to grab info from localStorage to place in block until overwritten
// 5. However, on refresh, info stays
$( document ).ready(function() {
    console.log( "ready!" );
var now = moment()
var currentHour = moment().hour()
var hour = ""
console.log(currentHour)
var block = $("#basic-addon1")
var workHourCheck = ""
headerDate();
hourBlock();
hourCheckWork();

function headerDate(){
$("#currentDay").text(now);
}
// Here is the function to build the date in the header
function hourBlock(){
    for (i = 0; i < 8; i++){
       $("#main").append(block) 
       console.log(block)
     }
// intent is to create the 8 required blocks for hours
// however, something here is not picking up desired structure. Maybe need to append individually?
}

function hourCheckWork(){{
if(currentHour > 17 || currentHour < 9){
workHourCheck = false
console.log(workHourCheck)
return 
}
else 
workHourCheck = true};
pastCheck()
console.log(workHourCheck)
}
pastCheck();
function pastCheck(){
for (i = 0; i < (currentHour - 10); i++){
if(i < 0){
    return
}
else 
// build element with .past class
console.log("pastCheck")
return
}
}
futureCheck();
function futureCheck(){
for (i = 0; i < (16 - currentHour); i++){
if(i < 0){
return
}
else 
console.log("futureCheck")
}
}



// test to see if hourCheck function actually works, which it does atm.
// however, when I attempted to expand it's functionality to the past/present/future cases
//  i broke something which crashed my computer somehow, and lost the related syntax. 
});
