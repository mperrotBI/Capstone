var title = document.getElementById("title");
var desc = document.getElementById("desc");
var price = document.getElementById("price");
var lo = document.getElementById("location");
var fire = document.getElementById("fire");

function GetRandomInt(max){
  return Math.floor(Math.random() * Math.floor(max));
}

var submitBtn = document.getElementById("submitBtn");
var fireHeading = document.getElementById("fireHeading");

var firebaseHeadingRef = firebase.database().ref().child("Heading");

var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

function submitClick() {
   var i = GetRandomInt(3);
   var firebaseRef = firebase.database().ref('Listings/' + i);

   firebaseRef.push().set({
   Title: title.value,
   Description: desc.value,
   Price: price.value,
   Location: lo.value,
   FireCode: fire.value
    });
}
