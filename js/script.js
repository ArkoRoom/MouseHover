$(function () {

  // On crée le quadrillage
  var createDiv = new Array();
  for (var i = 0; i <= 824; i++) {
    createDiv[i] = $('.wrap-img').append("<div class='div-mouse-hover" + i + " hover-effect'></div>");
    $('.div-mouse-hover' + i + '').css({
      'display': 'inline-block',
      'width': '10px',
      'height': '10px',
      'margin-left': '5px',
      'background-color': "#FFFFFF"
    });
  }
  // On crée l'effet "mouseHover"
  $('.hover-effect').mouseover(function () {
    $('.hover-effect').css({
      'background-color': 'transparent'
    });
  });
});
