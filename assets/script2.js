$(document).ready(function () {
  //Global Variables
  const container = $(".container");
  let currentTime = moment().format("h:mma");
  const workingHours = [
    "8am",
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
  ];

  // These functions are called in this order to build out the day planner app
  displayToday();
  buildScheduler();
  //addHourId();
  //addActivityId();
  //addSaveClickEvent();
  //compareTime();

  function buildScheduler() {
    $.each(workingHours, function () {
      container.append($('<div class="row time-block">'));
    });
    $(".time-block").append($('<div class="col-md-1 col-sm-2 hour">'));
    $(".time-block").append(
      $('<textarea class="description col-md-10 col-sm-8">')
    );
    $(".time-block").append($('<button class="saveBtn col-md-1 col-sm-2">'));
    $(".saveBtn").append($('<i class="far fa-save">'));
  }
});

//Functions

// Show the current day, date, and time in the app header
function displayToday() {
  let Today = moment().format("LLLL");
  $("#currentDay").text(Today);
}
