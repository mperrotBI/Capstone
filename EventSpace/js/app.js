
var title = document.getElementById("title");
var desc = document.getElementById("desc");
var price = document.getElementById("price");
var location = document.getElementById("location");
var fire = document.getElementById("fire");

var submitBtn = document.getElementById("submitBtn");
var fireHeading = document.getElementById("fireHeading");

var firebaseHeadingRef = firebase.database().ref().child("Heading");

/*firebaseHeadingRef.on('value', function(datasnapshot){
  fireHeading.innerText = datasnapshot.val();
});
*/
var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

function submitClick() {
   var firebaseRef = firebase.database().ref('Listings');

   var messageText = title.value;

   firebaseRef.push().set(messageText);
}

/*
$(document).ready(function(){


  var rootRef = firebase.database().ref().child("Users");

  rootRef.on("child_added", snap => {

    var name = snap.child("Name").val();
    var email = snap.child("Email").val();

    $("#table_body").append("<tr><td>" + name + "</td><td>" +
    email + "</td><td><button>Remove</button></td></tr>");
  });
})
var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');
*/
