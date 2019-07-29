var firebaseConfig = {
  apiKey: "AIzaSyBNvUbAV8IlWG75v1rQ9SgtmYlYEHDCe1o",
  authDomain: "eventspace-25703.firebaseapp.com",
  databaseURL: "https://eventspace-25703.firebaseio.com",
  projectId: "eventspace-25703",
  storageBucket: "eventspace-25703.appspot.com",
  messagingSenderId: "981825218107",
  appId: "1:981825218107:web:cd6f16dd55a7a71f"
};
// Initialize Firebase
var searchLoc = document.getElementById("locTag");

function main(){
  var database = firebase.database();
  var listingRef0 = database.ref("Listings/0");
  var listingRef1 = database.ref("Listings/1");
  var listingRef2 = database.ref("Listings/2");
  listingRef0.orderByChild("Location").equalTo(searchLoc.value).on('child_added', function(snapshot) {
    listingRef0.orderByChild("Location").equalTo(searchLoc.value).on("child_added", snap => {
    console.log(snapshot.val());
    var title = snap.child("Title").val();
    var price = snap.child("Price").val();
    var desc = snap.child("Description").val();
    var loc = snap.child("Location").val();
    $("#results").append("<div class='probootstrap-card probootstrap-listing'><div class='probootstrap-card-media'><img src='img/slider_1.jpg' class='img-responsive' alt='Free HTML5 Template by uicookies.com'>" +
    "<a href='#' class='probootstrap-love'><i class='icon-heart'></i></a></div><div class='probootstrap-card-text'>" +
    "<h2 class='probootstrap-card-heading'><a href='#'>" +  title + "</a></h2><div class='probootstrap-listing-location'>" +
    "<i class='icon-location2'></i> <span>" + loc + "</span></div><div class='probootstrap-listing-category for-rent'><span>for rent</span></div><div class='probootstrap-listing-price'><strong>$" +
    price + "</strong> / month</div></div><div class='probootstrap-card-extra'><ul>" +
    "<li>Area<span>2400 m2</span></li><li>Beds<span>3</span></li><li>Baths<span>2</span></li><li>Garages<span>1</span></li></ul></div></div></div>");
  });
  }),
  listingRef1.orderByChild("Location").equalTo(searchLoc.value).on('child_added', function(snapshot) {
    listingRef1.orderByChild("Location").equalTo(searchLoc.value).on("child_added", snap => {
    console.log(snapshot.val());
    var title = snap.child("Title").val();
    var price = snap.child("Price").val();
    var desc = snap.child("Description").val();
    var loc = snap.child("Location").val();
    $("#results2").append("<div class='probootstrap-card probootstrap-listing'><div class='probootstrap-card-media'><img src='img/slider_1.jpg' class='img-responsive' alt='Free HTML5 Template by uicookies.com'>" +
    "<a href='#' class='probootstrap-love'><i class='icon-heart'></i></a></div><div class='probootstrap-card-text'>" +
    "<h2 class='probootstrap-card-heading'><a href='#'>" +  title + "</a></h2><div class='probootstrap-listing-location'>" +
    "<i class='icon-location2'></i> <span>" + loc + "</span></div><div class='probootstrap-listing-category for-rent'><span>for rent</span></div><div class='probootstrap-listing-price'><strong>$" +
    price + "</strong> / month</div></div><div class='probootstrap-card-extra'><ul>" +
    "<li>Area<span>2400 m2</span></li><li>Beds<span>3</span></li><li>Baths<span>2</span></li><li>Garages<span>1</span></li></ul></div></div></div>");
  });
  }),
  listingRef2.orderByChild("Location").equalTo(searchLoc.value).on('child_added', function(snapshot) {
    listingRef2.orderByChild("Location").equalTo(searchLoc.value).on("child_added", snap => {
    console.log(snapshot.key);
    var title = snap.child("Title").val();
    var price = snap.child("Price").val();
    var desc = snap.child("Description").val();
    var loc = snap.child("Location").val();
    $("#results3").append("<div class='probootstrap-card probootstrap-listing'><div class='probootstrap-card-media'><img src='img/slider_1.jpg' class='img-responsive' alt='Free HTML5 Template by uicookies.com'>" +
    "<a href='#' class='probootstrap-love'><i class='icon-heart'></i></a></div><div class='probootstrap-card-text'>" +
    "<h2 class='probootstrap-card-heading'><a href='#'>" +  title + "</a></h2><div class='probootstrap-listing-location'>" +
    "<i class='icon-location2'></i> <span>" + loc + "</span></div><div class='probootstrap-listing-category for-rent'><span>for rent</span></div><div class='probootstrap-listing-price'><strong>$" +
    price + "</strong> / month</div></div><div class='probootstrap-card-extra'><ul>" +
    "<li>Area<span>2400 m2</span></li><li>Beds<span>3</span></li><li>Baths<span>2</span></li><li>Garages<span>1</span></li></ul></div></div></div>");
  });
  },
  function err(){
    console.log(err);
  });


}
