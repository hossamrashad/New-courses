/* jslint plusplus: true, evil:true */
/* global $, jQuery, console, document, window, alert, prompt, confirm */

/* Window Height */
$(function () {
  "use strict";
  var windowH = $(window).height(),
    upperbar = $(".upper-bar").innerHeight(),
    navbar = $(".navbar").innerHeight();
  $(".windowHeight, .carousel-item").height(windowH - (upperbar + navbar));
  $(window).resize(function () {
    $(".windowHeight, .carousel-item").height(windowH - (upperbar + navbar));
  });
});
$(function () {
  "use strict";
  // windowHeight-middle
  var windowH = $(window).height();
  $(".windowHeight-middle").height(windowH / 2);
  $(window).resize(function () {
    $(".windowHeight-middle").height(windowH / 2);
  });
});
/* form-sine-in */
$(function () {
  "use strict";
  $(".navbar .sign").click(function (e) {
    e.preventDefault();
    $(".form-sine-in").slideToggle();
  });
});

// popup
$(document).ready(function () {
  "use strict";
  $(".show-popup").click(function () {
    $(".popup").fadeIn();
  });
  $(".popup").click(function () {
    $(this).fadeOut();
  });
  $(".popup .inner").click(function (e) {
    e.stopPropagation();
  });
  $(".popup .inner .close-popup").click(function (e) {
    e.preventDefault();
    $(".popup").fadeOut();
  });
});
