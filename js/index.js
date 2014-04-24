document.title = "MICHΔΣL's Delivery";

$(document).ready(function() {
  
  // Handles Illusionary Trapezoid Containers Size
  $(window).on('load resize', function() {
    if ($(window).width() < 725) {
      $('.platform').attr("src", "assets/trapezoid-tablet.svg");
    };
    if ($(window).width() < 649) {
      $('.platform').attr("src", "assets/trapezoid-mobile1.svg");
    };
    if ($(window).width() < 518) {
      $('.platform').attr("src", "assets/trapezoid-mobile2.svg");
    };
    if ($(window).width() < 458) {
      $('.platform').attr("src", "assets/trapezoid-mobile3.svg");
    };
  });
  
});
