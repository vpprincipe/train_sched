var config = {
  apiKey: "AIzaSyBM4XMdzf17uvrsCpYC4njJiFHyhvRw1ms",
  authDomain: "test-50da4.firebaseapp.com",
  databaseURL: "https://test-50da4.firebaseio.com",
  projectId: "test-50da4",
  storageBucket: "test-50da4.appspot.com",
  messagingSenderId: "44010979585"
};
firebase.initializeApp(config);

var database = firebase.database();
var name = "";
var destination = "";
var frequency = "";
var arrival = "";
var minAway = "";

$("#submit").on("click", submitHandler);

function submitHandler() {
  getInput();
}

function getInput() {
  var nameInput = $("#name-input").val();
  console.log(nameInput);
  var destInput = $("#dest-input").val();
  console.log(destInput);
  var timeInput = $("#time-input").val();
  console.log(timeInput);
  var freqInput = $("#freq-input").val();
  console.log(freqInput);
  putStuff(nameInput, destInput, timeInput, freqInput);
}

function minAway(trainTime) {
  var currentTime = moment();
  console.log(currentTime);
  var nextTrain = moment(trainTime);
  console.log(nextTrain);
}

function putStuff(name, dest, time, freq) {
  console.log(name, dest, time, freq);
  var tableRow = document.createElement("tr");
  var nameCell = document.createElement("td");
  nameCell.innerText=name;
  var destCell = document.createElement("td");
  destCell.innerText=dest;
  var timeCell = document.createElement("td");
  timeCell.innerText=time;
  var freqCell = document.createElement("td");
  freqCell.innerText=freq;
  minAway(time)
  tableRow.appendChild(nameCell);
  tableRow.appendChild(destCell);
  tableRow.appendChild(freqCell);
  tableRow.appendChild(timeCell);

  $("#train-table tbody").append(tableRow);
}