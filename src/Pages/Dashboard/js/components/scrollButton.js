$(document).ready(function () {

  var buttonLeft01 = document.getElementById("button_scroll_left_01");

  buttonLeft01.onclick = function () {
    document.getElementById("row01_tv_popular").scrollLeft-= 300;
  };

  var buttonRight01 = document.getElementById("button_scroll_right_01");

  buttonRight01.onclick = function () {
    document.getElementById("row01_tv_popular").scrollLeft+= 300;
  };


  var buttonLeft02 = document.getElementById("button_scroll_left_02");

  buttonLeft02.onclick = function () {
    document.getElementById("row02_movies_popular").scrollLeft-= 300;
  };

  var buttonRight02 = document.getElementById("button_scroll_right_02");
  
  buttonRight02.onclick = function () {
    document.getElementById("row02_movies_popular").scrollLeft+= 300;
  };



});
