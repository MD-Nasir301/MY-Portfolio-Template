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

  // Sidebar hides for less than 992px devices and clicking on any sidebar element
  $(window).resize(function () {
    if ($(window).width() > 992) {
      $("#sidebar-left-sec").css("left", "0px");
      $(".close-btn").hide();
    } else {
      $("#sidebar-left-sec").css("left", "-341px");
      $("#sidebar-left-sec").click(function () {
        $("#sidebar-left-sec").css("left", "-341px");
        $(".close-btn").hide();
      });
    }
  });

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
