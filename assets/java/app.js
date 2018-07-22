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