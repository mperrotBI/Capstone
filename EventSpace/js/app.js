var title = document.getElementById("title");
var desc = document.getElementById("desc");
var price = document.getElementById("price");
var lo = document.getElementById("location");
var bed = document.getElementById("bed");
var bath = document.getElementById("bath");
var area = document.getElementById("area");
var storageRef;
var myUrl;

function GetRandomInt(max){
  return Math.floor(Math.random() * Math.floor(max));
}

var submitBtn = document.getElementById("submitBtn");
var fireHeading = document.getElementById("fireHeading");

var firebaseHeadingRef = firebase.database().ref().child("Heading");

var uploader = document.getElementById("uploader");
var fileButton = document.getElementById("fileButton");


fileButton.addEventListener("change", function(e){
  var file = e.target.files[0];

  storageRef = firebase.storage().ref("photos/" + file.name);

  var task = storageRef.put(file);

  task.on("state_changed", function progress(snapshot) {
      var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      uploader.value = percentage;
    },
    function error(err){

    },
    function complete() {
      //console.log(storageRef.getDownloadURL());
      const downloadUrl = storageRef.getDownloadURL();
      downloadUrl.then(function(url){
        console.log("MY URL " + url);
        myUrl = url;
      });
    }
    );
});

myUrl = myUrl.toString();

function submitClick() {
   var i = GetRandomInt(3);
   var firebaseRef = firebase.database().ref('Listings/' + i);


   firebaseRef.push().set({
   Title: title.value,
   Description: desc.value,
   Price: price.value,
   Location: lo.value,
   Beds: bed.value,
   Bath: bath.value,
   Area: area.value,
   Image: myUrl
    });
}
