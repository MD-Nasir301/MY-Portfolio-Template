(function ($) {
  ("use strict");

  // sidebar open btn
  $(".sidebar-open-btn").on("click", () => {
    $("#sidebar-left-sec").css("left", "0px");
    $(".close-btn").show();
  });
  // sidebar close btn
  $(".close-btn").on("click", () => {
    $("#sidebar-left-sec").css("left", "-330px");
    $(".close-btn").hide();
  });
  // Sidebar hides by clicking on any sidebar element for less than 992px devices
  if ($(window).width() < 992) {
    $("#sidebar-left-sec").click(function () {
      $("#sidebar-left-sec").css("left", "-341px");
      $(".close-btn").hide();
    });
  }


  // animation aos
  AOS.init({
    offset: 60,
    delay: 00,
    duration: 1100,
    easing: "ease",
    mirror: false,
    anchorPlacement: "top-bottom",
  });
})(jQuery);