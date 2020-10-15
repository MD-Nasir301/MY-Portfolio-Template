(function ($) {
  ("use strict");

  // sidebar toggle btn
  $(window).resize(function () {
    if ($(document).width() < 992) {
      $("#sidebar-left-sec").css("left", "-351px");

      $(".sidebar-toggle-btn").on("click", () => {
        $("#sidebar-left-sec").css("left", "0px");
        $(".close-btn").show();
      });
      $(".close-btn").on("click", () => {
        $("#sidebar-left-sec").css("left", "-351px");
        $(".close-btn").hide();
      });
    }

    if ($(document).width() >= 992) {
      $("#sidebar-left-sec").css("left", "0px");
    }

  });


  AOS.init({
    offset: 60,
    delay: 00,
    duration: 1100, 
    easing: 'ease', 
    mirror: false, 
    anchorPlacement: 'top-bottom', 
  
  });


})(jQuery);