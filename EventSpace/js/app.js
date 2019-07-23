var title = document.getElementById("title");
var desc = document.getElementById("desc");
var price = document.getElementById("price");
var lo = document.getElementById("location");
var fire = document.getElementById("fire");

var submitBtn = document.getElementById("submitBtn");
var fireHeading = document.getElementById("fireHeading");

var firebaseHeadingRef = firebase.database().ref().child("Heading");

var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

function submitClick() {
   var firebaseRef = firebase.database().ref('Listings');

   var messageText = title.value;

   firebaseRef.push().set({
   Title: title.value,
   Description: desc.value,
   Price: price.value,
   Location: lo.value,
   FireCode: fire.value
   });
}
