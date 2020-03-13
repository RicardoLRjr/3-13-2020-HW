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

// Array of time block
// iterate through it and figure out someway to go through and figure out past/present/future
// don't getcarried away.
$(document).ready(function() {
  console.log("ready!");
  var now = moment();
  var nine = $("#9AM");
  var ten = $("#10AM");
  var eleven = $("#11AM");
  var noon = $("#12PM");
  var one = $("#1PM");
  var two = $("#2PM");
  var three = $("#3PM");
  var four = $("#4PM");
  var five = $("#5PM");
  var block = $("#basic-addon1");
  var workHourCheck = "";
  headerDate();
  // hourCheckWork();
  function headerDate() {
    $("#currentDay").text(now);
  }

  fiveCheck();
  fourCheck();
  threeCheck();
  twoCheck();
  oneCheck();
  noonCheck();
  elevenCheck();
  tenCheck();
  nineCheck();

  // // function hourCheckWork(){
  // // if(nowHour > 17 || nowHour < 9){
  // // workHourCheck = false
  // // console.log(workHourCheck)
  // // return
  // // }
  // // else
  // // workHourCheck = true;

  // }
  console.log(moment().hour());
  function nineCheck() {
    var nowHour = moment().hour();
    if (nowHour < 9) {
      $(nine).addClass("future");
    } else if ((nowHour === 9)) {
      $(nine).addClass("present");
    } else (nowHour > 9) 
       { (nine).addClass("past")};
  }

  function tenCheck() {
    var nowHour = moment().hour();
    if (nowHour < 10) {
      $(ten).addClass("future");
    } else if ((nowHour === 10)) {
      $(ten).addClass("present");
    } else (nowHour > 10) 
    {(ten).addClass("past")};
  }
  function elevenCheck() {
    var nowHour = moment().hour();
    if (nowHour < 11) {
      $(eleven).addClass("future");
    } else if ((nowHour === 11)) {
      $(eleven).addClass("present");
    } else (nowHour > 11) 
        {(eleven).addClass("past")};
  }
  function noonCheck() {
    var nowHour = moment().hour();
    if (nowHour < 12) {
      $(noon).addClass("future");
    } else if ((nowHour === 12)) {
      $(noon).addClass("present");
    } else (nowHour > 12)
    {(noon).addClass("past")};
  }
  function oneCheck() {
    var nowHour = moment().hour();
    if (nowHour < 13) {
      $(one).addClass("future");
    }
    if ((nowHour === 13)) {
      $(one).addClass("present");
    } else (nowHour > 13)
    {(one).addClass("past")};
  }
  function twoCheck() {
    var nowHour = moment().hour();
    if (nowHour < 14) {
      $(two).addClass("future");
    } else if ((nowHour === 14)) {
      $(two).addClass("present");
    } else (nowHour > 14)
    {(two).addClass("past")};
  }
  function threeCheck() {
    var nowHour = moment().hour();
    if (nowHour < 15) {
      $(three).addClass("future");
    } else if ((nowHour === 15)) {
      $(three).addClass("present");
    } else (nowHour > 15)
    {(three).addClass("past")};
  }
  function fourCheck() {
    var nowHour = moment().hour();
    if (nowHour < 16) {
      $(four).addClass("future");
    } else if ((nowHour === 16)) {
      $(four).addClass("present");
    } else (nowHour > 16)
    {(four).addClass("past")};
  }
  function fiveCheck() {
    var nowHour = moment().hour();
    if (nowHour < 17) {
      $(five).addClass("future");
    } else if ((nowHour === 17)) {
      $(five).addClass("present");
    } else (nowHour > 17)
    {(five).addClass("past")};
  }
});
