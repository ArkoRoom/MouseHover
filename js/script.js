$(function () {

  //On génére aléatoirement une image
  var img = [
    'img1.jpg',
    'img2.png',
    'img3.jpg',
    'img4.jpg',
    'img5.jpeg'
  ];

  $('.wrap-img').css({
    'background-image': 'url(img/' + img[Math.floor(Math.random() * img.length)] + ')'
  });

  // On crée le quadrillage
  var createDiv = new Array();
  for (var i = 0; i <= 461; i++) {
    createDiv[i] = $('.container-div').append("<div class='div-mouse-hover" + i + " hover-effect' id='div" + i + "'></div>");
    $('.div-mouse-hover' + i + '').css({
      'display': 'inline-block',
      'width': '20px',
      'height': '20px',
      'margin-left': '2px',
      'margin-top': '-2px',
      'background-color': "#FFFFFF"
    });
  }
  // On crée l'effet "Suppression"
  $('.delete-div').click(function () {
    $('.div-mouse-hover' + i + '').fadeOut(500);
  });

});
