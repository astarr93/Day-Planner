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
  $.each(workingHours, function (index, value) {
    container.append($('<div class="row time-block">'));
    // console.log(index);
  });
  $(".time-block").append($('<div class="col-md-1 col-sm-2 hour">'));
  $(".time-block").append(
    $('<textarea class="description col-md-10 col-sm-8">')
  );
  $(".time-block").append($('<button class="saveBtn col-md-1 col-sm-2">'));
  $(".saveBtn").append($('<i class="far fa-save">'));
  displayDate();
  addHours();
});

function addHours() {
  for (i = 0; i < workingHours.length; i++) {
    $(".hour").text(workingHours[i]);
  }
}

function displayDate() {
  const $currentDay = $("#currentDay");
  const $container = $(".container");
  let nowDay = moment().format("dddd, MMMM Do");
  $currentDay.text(nowDay);
}

//   $(".saveBtn").on("click", function () {
//     var activity = $(this).siblings(".description").val();
//     var hour = $(this).parent().attr("id");
//     localStorage.setItem(hour, activity);
//     console.log(localStorage);
//   });
