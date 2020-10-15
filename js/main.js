(function ($) {
  ("use strict");

  // sidebar toggle btn
    $(".sidebar-toggle-btn").on("click", () => {
      $("#sidebar-left-sec").css("left", "0px");
      $(".close-btn").show();
    });

    $(".close-btn").on("click", () => {
      $("#sidebar-left-sec").css("left", "-351px");
      $(".close-btn").hide();
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