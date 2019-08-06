

// Initialize Firebase
var searchLoc = document.getElementById("locTag");
var option;

function showOptions(s){
  option = (s[s.selectedIndex].value);
  //console.log(option);
}

function main(){
  console.log(option);
  if(option=="property"){
    console.log('1');
  var database = firebase.database();
  var listingRef0 = database.ref("Listings/0");
  var listingRef1 = database.ref("Listings/1");
  var listingRef2 = database.ref("Listings/2");
  //listingRef0.orderByChild("Location").equalTo(searchLoc.value).on('child_added', function(snapshot) {
    listingRef0.orderByChild("Location").equalTo(searchLoc.value).on("child_added", snap => {
    //console.log(snapshot.val());
    var title = snap.child("Title").val();
    var price = snap.child("Price").val();
    var desc = snap.child("Description").val();
    var loc = snap.child("Location").val();
    var img = snap.child("Image").val();
    var listingKey = snap.key;
    $("#results").append("<div class='probootstrap-card probootstrap-listing'><div class='probootstrap-card-media'><img src='" + img + "' class='img-responsive' alt='Image Unavailable'>" +
    "<a href='#' class='probootstrap-love'><i class='icon-heart'></i></a></div><div class='probootstrap-card-text'>" +
    "<h2 class='probootstrap-card-heading'><a href='detail.html?i=0/" + listingKey + "'>" +  title + "</a></h2><div class='probootstrap-listing-location'>" +
    "<i class='icon-location2'></i> <span>" + loc + "</span></div><div class='probootstrap-listing-category for-rent'><span>for rent</span></div><div class='probootstrap-listing-price'><strong>$" +
    price + "</strong> / month</div></div><div class='probootstrap-card-extra'><ul>" +
    "<li>Area<span>2400 m2</span></li><li>Beds<span>3</span></li><li>Baths<span>2</span></li><li>Garages<span>1</span></li></ul></div></div></div>");
  //});
  }),
  //listingRef1.orderByChild("Location").equalTo(searchLoc.value).on('child_added', function(snapshot) {
    listingRef1.orderByChild("Location").equalTo(searchLoc.value).on("child_added", snap => {
    //console.log(snapshot.val());
    var title = snap.child("Title").val();
    var price = snap.child("Price").val();
    var desc = snap.child("Description").val();
    var loc = snap.child("Location").val();
    var img = snap.child("Image").val();
    var listingKey = snap.key;
    $("#results2").append("<div class='probootstrap-card probootstrap-listing'><div class='probootstrap-card-media'><<img src='" + img + "' class='img-responsive' alt='Image Unavailable'>" +
    "<a href='#' class='probootstrap-love'><i class='icon-heart'></i></a></div><div class='probootstrap-card-text'>" +
    "<h2 class='probootstrap-card-heading'><a href='detail.html?i=1/" + listingKey + "'>" +  title + "</a></h2><div class='probootstrap-listing-location'>" +
    "<i class='icon-location2'></i> <span>" + loc + "</span></div><div class='probootstrap-listing-category for-rent'><span>for rent</span></div><div class='probootstrap-listing-price'><strong>$" +
    price + "</strong> / month</div></div><div class='probootstrap-card-extra'><ul>" +
    "<li>Area<span>2400 m2</span></li><li>Beds<span>3</span></li><li>Baths<span>2</span></li><li>Garages<span>1</span></li></ul></div></div></div>");
  //});
  }),
  //listingRef2.orderByChild("Location").equalTo(searchLoc.value).on('child_added', function(snapshot) {
    listingRef2.orderByChild("Location").equalTo(searchLoc.value).on("child_added", snap => {
    //console.log(snapshot.key);
    var title = snap.child("Title").val();
    var price = snap.child("Price").val();
    var desc = snap.child("Description").val();
    var loc = snap.child("Location").val();
    var img = snap.child("Image").val();
    var listingKey = snap.key;
    $("#results3").append("<div class='probootstrap-card probootstrap-listing'><div class='probootstrap-card-media'><<img src='" + img + "' class='img-responsive' alt='Image Unavailable'>" +
    "<a href='#' class='probootstrap-love'><i class='icon-heart'></i></a></div><div class='probootstrap-card-text'>" +
    "<h2 class='probootstrap-card-heading'><a href='detail.html?i=2/" + listingKey + "'>" +  title + "</a></h2><div class='probootstrap-listing-location'>" +
    "<i class='icon-location2'></i> <span>" + loc + "</span></div><div class='probootstrap-listing-category for-rent'><span>for rent</span></div><div class='probootstrap-listing-price'><strong>$" +
    price + "</strong> / month</div></div><div class='probootstrap-card-extra'><ul>" +
    "<li>Area<span>2400 m2</span></li><li>Beds<span>3</span></li><li>Baths<span>2</span></li><li>Garages<span>1</span></li></ul></div></div></div>");
  //});
  },
  function err(){
    console.log(err);
  });
  }
  else if(option=="venue"){
    console.log('2');
  var database = firebase.database();
  var venueRef0 = database.ref("Venues/0");
  var venueRef1 = database.ref("Venues/1");
  var venueRef2 = database.ref("Venues/2");
  //listingRef0.orderByChild("Location").equalTo(searchLoc.value).on('child_added', function(snapshot) {
    venueRef0.orderByChild("Location").equalTo(searchLoc.value).on("child_added", snap => {
    //console.log(snapshot.val());
    var venTitle = snap.child("Title").val();
    var venPrice = snap.child("Price").val();
    var venDesc = snap.child("Description").val();
    var venLoc = snap.child("Location").val();
    var venImg = snap.child("Image").val();
    var venKey = snap.key;
    $("#results").append("<div class='probootstrap-card probootstrap-listing'><div class='probootstrap-card-media'><img src='" + venImg + "' class='img-responsive' alt='Image Unavailable'>" +
    "<a href='#' class='probootstrap-love'><i class='icon-heart'></i></a></div><div class='probootstrap-card-text'>" +
    "<h2 class='probootstrap-card-heading'><a href='venueDetail.html?i=0/" + venKey + "'>" +  venTitle + "</a></h2><div class='probootstrap-listing-location'>" +
    "<i class='icon-location2'></i> <span>" + venLoc + "</span></div><div class='probootstrap-listing-category for-rent'><span>for rent</span></div><div class='probootstrap-listing-price'><strong>$" +
    venPrice + "</strong> / month</div></div><div class='probootstrap-card-extra'><ul>" +
    "<li>Area<span>2400 m2</span></li><li>Beds<span>3</span></li><li>Baths<span>2</span></li><li>Garages<span>1</span></li></ul></div></div></div>");
  //});
  }),
  //listingRef1.orderByChild("Location").equalTo(searchLoc.value).on('child_added', function(snapshot) {
    venueRef1.orderByChild("Location").equalTo(searchLoc.value).on("child_added", snap => {
    //console.log(snapshot.val());
    var venTitle = snap.child("Title").val();
    var venPrice = snap.child("Price").val();
    var venDesc = snap.child("Description").val();
    var venLoc = snap.child("Location").val();
    var venImg = snap.child("Image").val();
    var venKey = snap.key;
    $("#results2").append("<div class='probootstrap-card probootstrap-listing'><div class='probootstrap-card-media'><img src='" + venImg + "' class='img-responsive' alt='Image Unavailable'>" +
    "<a href='#' class='probootstrap-love'><i class='icon-heart'></i></a></div><div class='probootstrap-card-text'>" +
    "<h2 class='probootstrap-card-heading'><a href='venueDetail.html?i=1/" + venKey + "'>" +  venTitle + "</a></h2><div class='probootstrap-listing-location'>" +
    "<i class='icon-location2'></i> <span>" + venLoc + "</span></div><div class='probootstrap-listing-category for-rent'><span>for rent</span></div><div class='probootstrap-listing-price'><strong>$" +
    venPrice + "</strong> / month</div></div><div class='probootstrap-card-extra'><ul>" +
    "<li>Area<span>2400 m2</span></li><li>Beds<span>3</span></li><li>Baths<span>2</span></li><li>Garages<span>1</span></li></ul></div></div></div>");
  //});
  }),
  //listingRef2.orderByChild("Location").equalTo(searchLoc.value).on('child_added', function(snapshot) {
    venueRef2.orderByChild("Location").equalTo(searchLoc.value).on("child_added", snap => {
    //console.log(snapshot.key);
    var venTitle = snap.child("Title").val();
    var venPrice = snap.child("Price").val();
    var venDesc = snap.child("Description").val();
    var venLoc = snap.child("Location").val();
    var venImg = snap.child("Image").val();
    var venKey = snap.key;
    $("#results3").append("<div class='probootstrap-card probootstrap-listing'><div class='probootstrap-card-media'><img src='" + venImg + "' class='img-responsive' alt='Image Unavailable'>" +
    "<a href='#' class='probootstrap-love'><i class='icon-heart'></i></a></div><div class='probootstrap-card-text'>" +
    "<h2 class='probootstrap-card-heading'><a href='venueDetail.html?i=2/" + venKey + "'>" +  venTitle + "</a></h2><div class='probootstrap-listing-location'>" +
    "<i class='icon-location2'></i> <span>" + venLoc + "</span></div><div class='probootstrap-listing-category for-rent'><span>for rent</span></div><div class='probootstrap-listing-price'><strong>$" +
    venPrice + "</strong> / month</div></div><div class='probootstrap-card-extra'><ul>" +
    "<li>Area<span>2400 m2</span></li><li>Beds<span>3</span></li><li>Baths<span>2</span></li><li>Garages<span>1</span></li></ul></div></div></div>");
  //});
  },
  function err(){
    console.log(err);
  });
  }

}
