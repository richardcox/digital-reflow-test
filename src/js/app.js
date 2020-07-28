$(document).ready(function () {
  var slickOpts = {
    slidesToShow: 5,
    slidesToScroll: 1,
    easing: "swing", // see http://api.jquery.com/animate/
    speed: 700,
    dots: false,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
  };
  // Init slick carousel
  $("#carousel").slick(slickOpts);
});
