//Global Variables
const container = $(".container");
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

//When the DOM is ready, JS builds each time-block using the woork
$(document).ready(function () {
  $.each(workingHours, function () {
    container.append($('<div class="row time-block">'));
  });
  $(".time-block").append($('<div class="col-md-1 col-sm-2 hour">'));
  $(".time-block").append(
    $('<textarea class="description col-md-10 col-sm-8">')
  );
  $(".time-block").append($('<button class="saveBtn col-md-1 col-sm-2">'));
  $(".saveBtn").append($('<i class="far fa-save">'));
  displayDate();
  addHours();
  loadActivity();
});

// Displays current date on index header
function displayDate() {
  let Today = moment().format("dddd, MMMM Do");
  $("#currentDay").text(Today);
}

// Add unique class hour-i and write in the hour for each timeblock hour div;
function addHours() {
  $(".hour").each(function (i) {
    $(this).addClass("hour-" + i);
  });
  let a = 0;
  for (i = 0; i < workingHours.length; i++) {
    $(".hour-" + a).text(workingHours[a]);
    a += 1;
  }
}

function loadActivity() {
  let a = 0;
  for (i = 0; i < workingHours.length; i++) {
    $(".hour-" + a)
      .siblings("textarea")
      .text("success");
    a++;
  }
}

// $(".saveBtn").on("click", function () {
//   // let activity = $(this).siblings(".description").val();
//   // let hour = $(this).parent().attr("id");
//   // localStorage.setItem(hour, activity);
//   console.log(1);
// });
