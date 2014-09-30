$(document).ready(function() {
  // Handles Navbar Links
  $(".navbar a").on("click", function(e) {
    $(this).toggleClass("active");
    $("#donate").removeClass("active");
    if ( $(this).prop("class") === "head" ) {
      $(".navbar a").not(".head").removeClass("active");
    }
    if ( $(this).prop("id") === "menu" ) {
      $("#share, #connect").removeClass("active");
      $(".menu").css({
        "left": $(this).offset().left
      }).slideToggle(150);
      
      if ( $(this).hasClass("active") ) {
        if ( $(".share").is(":visible") ) {
          $(".share").slideUp(150);
        } else if ( $(".connect").is(":visible") ) {
          $(".connect").slideUp(150);
        }
      }
    }
    if ( $(this).prop("id") === "share" ) {
      $("#menu, #connect").removeClass("active");
      $(".share").css({
        "left": $(this).offset().left
      }).slideToggle(150);
      
      if ( $(this).hasClass("active") ) {
        if ( $(".menu").is(":visible") ) {
          $(".menu").slideUp(150);
        } else if ( $(".connect").is(":visible") ) {
          $(".connect").slideUp(150);
        }
      }
    }
    if ( $(this).prop("id") === "connect" ) {
      $("#menu, #share").removeClass("active");
      $(".connect").css({
        "left": $(this).offset().left
      }).slideToggle(150);
      
      if ( $(this).hasClass("active") ) {
        if ( $(".share").is(":visible") ) {
          $(".share").slideUp(150);
        } else if ( $(".menu").is(":visible") ) {
          $(".menu").slideUp(150);
        }
      }
    }
  });
  
  // Typewriter effect for intro
  var win = $(window),
        foo = $(".typer");

  foo.typer(["<h1>Greetings</h1>", "My name is...", "<h2>Michael Schwartz</h2>", "<img class='me' src='img/avatar.png'><ol><li>Web UI/UX Designer</li><li>Web Developer</li></ol>"], {
      endless: false
  });

  // Adjust font-size when browser resizes for responsive typography
  win.on('load resize', function() {
    var fontSize = Math.max(Math.min(win.width() / (1 * 10), parseFloat(Number.POSITIVE_INFINITY)), parseFloat(Number.NEGATIVE_INFINITY));

    $("body").css({
      fontSize: fontSize * .5 + "px"
    });
    $(".collaboration").css({
      fontSize: fontSize * .2 + "px"
    });
    $(".services").css({
      fontSize: fontSize * .3 + "px"
    });
    $(".livechat").css({
      fontSize: fontSize * .3 + "px"
    });
    $(".collaboration h1, .services h1, .gallery h1").css({
      fontSize: fontSize * .7 + "px"
    });
    
    $("#collabdraw").css({
      'width': $(".resetsvg").width(),
      'height': $(".resetsvg").height()
    });
    

    if ( win.width() < 800 ) {
        $(".livechat iframe").attr("width", $(".resetframe").width())
                                        .attr("height", $(".resetframe").height());
    }
    else {
        $(".livechat iframe").attr("width", $(".resetgridframe").width())
                                        .attr("height", $(".resetgridframe").height());
    }
    
  }).resize();
  
  $(".fades article:gt(0)").hide();
  setInterval(function(){
    $(".fades :first").hide()
    .next("article").fadeIn("slow").end()
    .appendTo(".fades");
  }, 5000);
});
