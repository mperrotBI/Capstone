var title = document.getElementById("title");
//var desc = document.getElementById("desc");
var submitBtn = document.getElementById("submitBtn");

var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

function submitClick() {
   var firebaseRef = firebase.database().ref();

   var messageText = title.value;

   firebaseRef.push().set(messageText);
}
