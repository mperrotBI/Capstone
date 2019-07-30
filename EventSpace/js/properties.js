//$(document).ready(function(){


  var rootRef1 = firebase.database().ref().child("Listings/0");
  var rootRef2 = firebase.database().ref().child("Listings/1");
  var rootRef3 = firebase.database().ref().child("Listings/2");


  rootRef1.on("child_added", snap => {

    var title = snap.child("Title").val();
    var price = snap.child("Price").val();
    var desc = snap.child("Description").val();
    var loc = snap.child("Location").val();
    var listingKey = snap.key;

    $("#listing").append("<div class='probootstrap-card probootstrap-listing'><div class='probootstrap-card-media'><img src='img/slider_1.jpg' class='img-responsive' alt='Free HTML5 Template by uicookies.com'>" +
    "<a href='#' class='probootstrap-love'><i class='icon-heart'></i></a></div><div class='probootstrap-card-text'>" +
    "<h2 class='probootstrap-card-heading'><a href='detail.html?i=/0/" + listingKey + "'>" +  title + "</a></h2><div class='probootstrap-listing-location'>" +
    "<i class='icon-location2'></i> <span>" + loc + "</span></div><div class='probootstrap-listing-category for-rent'><span>for rent</span></div><div class='probootstrap-listing-price'><strong>$" +
    price + "</strong> / month</div></div><div class='probootstrap-card-extra'><ul>" +
    "<li>Area<span>2400 m2</span></li><li>Beds<span>3</span></li><li>Baths<span>2</span></li><li>Garages<span>1</span></li></ul></div></div></div>");
  });

  rootRef2.on("child_added", snap => {

    var title = snap.child("Title").val();
    var price = snap.child("Price").val();
    var desc = snap.child("Description").val();
    var loc = snap.child("Location").val();
    var listingKey = snap.key;

    $("#listing2").append("<div class='probootstrap-card probootstrap-listing'><div class='probootstrap-card-media'><img src='img/slider_1.jpg' class='img-responsive' alt='Free HTML5 Template by uicookies.com'>" +
    "<a href='#' class='probootstrap-love'><i class='icon-heart'></i></a></div><div class='probootstrap-card-text'>" +
    "<h2 class='probootstrap-card-heading'><a href='detail.html?i=1/" + listingKey + "'>" +  title + "</a></h2><div class='probootstrap-listing-location'>" +
    "<i class='icon-location2'></i> <span>" + loc + "</span></div><div class='probootstrap-listing-category for-rent'><span>for rent</span></div><div class='probootstrap-listing-price'><strong>$" +
    price + "</strong> / month</div></div><div class='probootstrap-card-extra'><ul>" +
    "<li>Area<span>2400 m2</span></li><li>Beds<span>3</span></li><li>Baths<span>2</span></li><li>Garages<span>1</span></li></ul></div></div></div>");

  });

  rootRef3.on("child_added", snap => {

    var title = snap.child("Title").val();
    var price = snap.child("Price").val();
    var desc = snap.child("Description").val();
    var loc = snap.child("Location").val();
    var listingKey = snap.key;

    $("#listing3").append("<div class='probootstrap-card probootstrap-listing'><div class='probootstrap-card-media'><img src='img/slider_1.jpg' class='img-responsive' alt='Free HTML5 Template by uicookies.com'>" +
    "<a href='#' class='probootstrap-love'><i class='icon-heart'></i></a></div><div class='probootstrap-card-text'>" +
    "<h2 class='probootstrap-card-heading'><a href='detail.html?i=/2/" + listingKey + "'>" +  title + "</a></h2><div class='probootstrap-listing-location'>" +
    "<i class='icon-location2'></i> <span>" + loc + "</span></div><div class='probootstrap-listing-category for-rent'><span>for rent</span></div><div class='probootstrap-listing-price'><strong>$" +
    price + "</strong> / month</div></div><div class='probootstrap-card-extra'><ul>" +
    "<li>Area<span>2400 m2</span></li><li>Beds<span>3</span></li><li>Baths<span>2</span></li><li>Garages<span>1</span></li></ul></div></div></div>");
  });
//});
var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');
