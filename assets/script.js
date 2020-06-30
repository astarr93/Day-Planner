//Global Variables
const container = $(".container");
const currentHour = moment().format("HH:mm");
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
  compareHour();
  addSaveClickEvent();
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
  writeTimesIdsPreviousAppointments();
}

// Writes in defined workingHours into Scheduler and adds unique Ids. It also checks if previous appointments have been made and loads them if available
function writeTimesIdsPreviousAppointments() {
  $(".hour").each(function (i) {
    $(this).attr("id", workingHours[i]).html(workingHours[i]);
    $(this).siblings("textarea").attr("id", workingHours[i]);
    if (localStorage[workingHours[i]]) {
      $(this).siblings("textarea").val(localStorage[workingHours[i]]);
    }
  })
};

// Compare the current time against all timeslots and apply/remove specific classes based on past, present, and future
function compareHour() {
  $(".hour").each(function () {
    let scheduleTime = moment(this.id, ["ha"]).format("HH:mm");
    if (moment(currentHour, ["H"]).format("ha") === this.id) {
      $(this).siblings(".description").addClass("present");
    } else if (currentHour < scheduleTime) {
      $(this).siblings(".description").addClass("future");
    } else if (currentHour > scheduleTime) {
      $(this).siblings(".description").addClass("past");
    }
  })
}

// Add click event handler for the hour block's save handler. Save's textarea contents to local storage
function addSaveClickEvent() {
  $(".saveBtn").on("click", function () {
    console.log("Success!")
    let eventTime = $(this).siblings(".hour").html();
    let eventText = $(this).siblings(".description").val();
    localStorage.setItem(eventTime, eventText);
  });
}