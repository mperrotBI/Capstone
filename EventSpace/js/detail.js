
function(snapshot) {
  var key = snapshot.key;
  
}

var rootRef = firebase.database().ref().child("Listings/0/" + key);

rootRef.on("child_added", snap => {

  var title = snap.child("Title").val();
  var loc = snap.child("Location").val();
  var price = snap.child("Price").val();
  var desc = snap.child("Description").val();
  //var name = snap.key;

  $("#details").append("<h2 class='mt0 mb50 text-center'>" + title + "</h2><h3 class='mt0 mb50 text-center'>" + price + "</h3><h3 class='mt0 mb50 text-center'>" + loc + "</h3><section class='jumbotron'><div class='image-wrap'>" +
  "<div class='image' style='background-image: url(img/slider_5.jpg);'></div></div><div class='text'><h3 class='mt0 mb40'>Description</h3><p>" + desc + "</p></div>");
});
var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');
