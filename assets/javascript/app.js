$(document).ready(function () {

  M.AutoInit();
  //parallax scrolling from materialize       
  $('.sidenav').sidenav();

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  $("#home-link").on("click", function (t) {
    t.preventDefault();
    $("#home-page").show();
    $('html, body').animate({
      scrollTop: $("#home-page").offset().top
    }, 1000);
  });

  $("#about").on("click", function (t) {
    t.preventDefault();
    $("#about-me").show();
    $('html, body').animate({
      scrollTop: $("#about-me").offset().top
    }, 1000);
  });
  $("#experience").on("click", function (t) {
    t.preventDefault();
    $("#work-experience").show();
    $('html, body').animate({
      scrollTop: $("#work-experience").offset().top
    }, 1000);
  });
  $("#portfolio").on("click", function (t) {
    t.preventDefault();
    $("#portfolio-section").show();
    $('html, body').animate({
      scrollTop: $("#portfolio-section").offset().top
    }, 1000);
  });
});