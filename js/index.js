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

// Show Lightbox Video Onload
var playkodeWeave = function() {
  $.fancybox.open({
    youtube : {
      controls : 0,
      showinfo : 0
    },
    src  : 'https://www.youtube.com/embed/F2srMbHHnAw', // Source of the content
    type : 'iframe' // Content type: image|inline|ajax|iframe|html (optional)
  });
};
var playWebDGap = function() {
  $.fancybox.open({
    youtube : {
      controls : 0,
      showinfo : 0
    },
    src  : 'https://www.youtube.com/embed/esN93ZnA6RY', // Source of the content
    type : 'iframe' // Content type: image|inline|ajax|iframe|html (optional)
  });
};
var playFiverr = function() {
  $.fancybox.open({
    youtube : {
      controls : 0,
      showinfo : 0
    },
    src  : 'https://www.youtube.com/embed/Oh65SSddz9Y', // Source of the content
    type : 'iframe' // Content type: image|inline|ajax|iframe|html (optional)
  });
};

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