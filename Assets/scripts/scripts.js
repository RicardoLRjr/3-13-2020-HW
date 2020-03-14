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
//   var blockInput = $(
  headerDate();
  write();
  function write(){
    document.getElementById("9AM").value = localStorage.getItem("9")
    document.getElementById("10AM").value = localStorage.getItem("10")
    document.getElementById("11AM").value = localStorage.getItem("11")
    document.getElementById("12PM").value = localStorage.getItem("12")
    document.getElementById("1PM").value = localStorage.getItem("13")
    document.getElementById("2PM").value = localStorage.getItem("14")
    document.getElementById("3PM").value = localStorage.getItem("15")
    document.getElementById("4PM").value = localStorage.getItem("16")
    document.getElementById("5PM").value = localStorage.getItem("17")
  }
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

$(".saveBtn").on("click", function(){
var nineValue = document.getElementById("9AM").value
localStorage.setItem("9", nineValue)
var tenValue = document.getElementById("10AM").value
localStorage.setItem("10", tenValue)
var eleValue = document.getElementById("11AM").value
localStorage.setItem("11", eleValue)
var noonValue = document.getElementById("1PM").value
localStorage.setItem("12", noonValue)
var oneValue = document.getElementById("1PM").value
localStorage.setItem("13", oneValue)
var twoValue = document.getElementById("2PM").value
localStorage.setItem("14", twoValue)
var thrValue = document.getElementById("3PM").value
localStorage.setItem("15", thrValue)
var fourValue = document.getElementById("4PM").value
localStorage.setItem("16", fourValue)
var fiveValue = document.getElementById("5PM").value
localStorage.setItem("17", fiveValue)
}
)
  console.log(moment().hour());
  function nineCheck() {
    var nowHour = moment().hour();
    if (nowHour < 9) {
      $(nine).addClass("future");
    } else if (nowHour === 9) {
      $(nine).addClass("present");
    } else nowHour > 9;
    {
      nine.addClass("past");
    }
  }

  function tenCheck() {
    var nowHour = moment().hour();
    if (nowHour < 10) {
      $(ten).addClass("future");
    } else if (nowHour === 10) {
      $(ten).addClass("present");
    } else nowHour > 10;
    {
      ten.addClass("past");
    }
  }
  function elevenCheck() {
    var nowHour = moment().hour();
    if (nowHour < 11) {
      $(eleven).addClass("future");
    } else if (nowHour === 11) {
      $(eleven).addClass("present");
    } else nowHour > 11;
    {
      eleven.addClass("past");
    }
  }
  function noonCheck() {
    var nowHour = moment().hour();
    if (nowHour < 12) {
      $(noon).addClass("future");
    } else if (nowHour === 12) {
      $(noon).addClass("present");
    } else nowHour > 12;
    {
      noon.addClass("past");
    }
  }
  function oneCheck() {
    var nowHour = moment().hour();
    if (nowHour < 13) {
      $(one).addClass("future");
    }
    if (nowHour === 13) {
      $(one).addClass("present");
    } else nowHour > 13;
    {
      one.addClass("past");
    }
  }
  function twoCheck() {
    var nowHour = moment().hour();
    if (nowHour < 14) {
      $(two).addClass("future");
    } else if (nowHour === 14) {
      $(two).addClass("present");
    } else nowHour > 14;
    {
      two.addClass("past");
    }
  }
  function threeCheck() {
    var nowHour = moment().hour();
    if (nowHour < 15) {
      $(three).addClass("future");
    } else if (nowHour === 15) {
      $(three).addClass("present");
    } else nowHour > 15;
    {
      three.addClass("past");
    }
  }
  function fourCheck() {
    var nowHour = moment().hour();
    if (nowHour < 16) {
      $(four).addClass("future");
    } else if (nowHour === 16) {
      $(four).addClass("present");
    } else nowHour > 16;
    {
      four.addClass("past");
    }
  }
  function fiveCheck() {
    var nowHour = moment().hour();
    if (nowHour < 17) {
      $(five).addClass("future");
    } else if (nowHour === 17) {
      $(five).addClass("present");
    } else nowHour > 17;
    {
      five.addClass("past");
    }
  }
});
