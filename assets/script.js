//Global Variables
const container = $(".container");
let currentHour = moment().hour();
let bookedEvents = [];
const workingHours = [  // Add additional hours to dynamically create all time-block components
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

// WHEN DOM IS LOADED, THESE FUNCTIONS ARE CALLED TO BUILD THE DAY SCHEDULER
$(document).ready(function () {
  displayToday();
  buildScheduler();
  loadScheduledEvents();
  addSaveClickEvent();
  // compareHour();
});

// FUNCTIONS:

// Displays current date on index header
function displayToday() {
  let Today = moment().format("LLLL");
  $("#currentDay").text(Today);
}

// Builds a time-slot for each index of workingHours
function buildScheduler() {
  $.each(workingHours, function () {
    container.append($('<div class="row time-block">'));
  });
  // Appends columns, textareas, and save buttons to each row created from workingHours
  $(".time-block").append($('<div class="col-md-1 col-sm-2 hour">'));
  $(".time-block").append($('<textarea class="description col-md-10 col-sm-8">'));
  $(".time-block").append($('<button class="saveBtn col-md-1 col-sm-2">'));
  $(".saveBtn").append($('<i class="far fa-save">'));
  addTimesAndIds();
}

// Writes in defined workingHours into Scheduler and adds unique Ids
function addTimesAndIds() {
  $(".hour").each(function (i) {
    $(this).attr("id", workingHours[i]).html(workingHours[i]);
    $(this).siblings("textarea").attr("id", workingHours[i]);
  });
}

// Load any previously scheduled events
function loadScheduledEvents() {
  let bookedEvents = {}
  keys = Object.keys(localStorage)
  i = keys.length;

}

// Add click event handler for the hour block's save handler. Save's textarea contents to local storage
function addSaveClickEvent() {
  $(".saveBtn").on("click", function () {
    let eventTime = $(this).siblings(".hour").html();
    let eventText = $(this).siblings(".description").val();
    let appointment = [eventTime, eventText];
    bookedEvents += appointment;
  });
}

// Compare the current time against all timeslots and apply/remove specific classes based on past, present, and future
// function compareHour() {
//   let blockHour = parseInt($(this).attr("id").split("-")[1]);
//   console.log(blockHour);
//   console.log(currentHour);
//   if (currentHour > blockHour) {
//     $(this).siblings(".description").addClass("past");
//   } else if (currentHour === blockHour) {
//     $(this).siblings.removeClass("past");
//     $(this).siblings.addClass("present");
//   } else {
//     $(this).siblings.removeClass("past present");
//     $(this).siblings.addClass("future");
//   }
// }