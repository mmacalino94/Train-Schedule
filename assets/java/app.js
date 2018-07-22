var config = {
    apiKey: "AIzaSyAUbXMi7bpacfbIgYBAdoZ-Voc3TElHUps",
    authDomain: "mam-train-scheduler.firebaseapp.com",
    databaseURL: "https://mam-train-scheduler.firebaseio.com",
    projectId: "mam-train-scheduler",
    storageBucket: "mam-train-scheduler.appspot.com",
    messagingSenderId: "297586197214"
  };
  firebase.initializeApp(config);

var database = firebase.database();
var currentTime = moment();

database.ref().on("child_added", function(childSnap) {

    var name = childSnap.val().name;
    var destination = childSnap.val().destination;
    var firstTrain = childSnap.val().firstTrain;
    var frequency = childSnap.val().frequency;
    var min = childSnap.val().min;
    var next = childSnap.val().next;

    $("#trainTable > tbody").append("<tr><td>" + name + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + next + "</td><td>" + min + "</td></tr>");
});

database.ref().on("value", function(snapshot) {
   

});