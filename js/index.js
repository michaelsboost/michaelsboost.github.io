// Adjust UI for orientation changes
$(window).on("load resize orientationchange", function() {
  if(window.innerHeight > window.innerWidth){
    // portrait
    $(".bl-main > section > .bl-box").css("background-size", "cover");
  } else {
    // landscape
    $(".bl-main > section > .bl-box").css("background-size", "contain");
  }
});

Boxlayout.init();

// Detect if page has hash when loaded
var hash = window.location.hash.substring(1);
if (window.location.hash) {
  $("a[href='#"+hash+"']").trigger("click");
}

function remove_hash_from_url() {
  var uri = window.location.toString();
  if (uri.indexOf("#") > 0) {
      var clean_uri = uri.substring(0, uri.indexOf("#"));
      window.history.replaceState({}, document.title, clean_uri);
  }
}
$("[data-clear=hash]").click(function() {
  remove_hash_from_url();
});