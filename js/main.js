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


})(jQuery);