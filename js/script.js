$(function () {

  //On génére aléatoirement une image
  nbSquare = 462;
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

  // On renvoie un entier aléatoire entre une valeur min (incluse) et une valeur max (incluse).
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

  // On crée le quadrillage
  function createDiv() {
    for (var i = 0; i < nbSquare; i++) {
      var createDiv = $('.container-div').append("<div class='div-mouse-hover" + i + " hover-effect' id='div" + i + "'></div>");
      $('.div-mouse-hover' + i + '').css({
        'display': 'inline-block',
        'width': '20px',
        'height': '20px',
        'margin-left': '2px',
        'margin-top': '-2px',
        'background-color': "#FFFFFF"
      });
    }
  }
  setTimeout(createDiv, 500);

  // On crée l'effet "Suppression"
  $('#delete-div').click(function () {
    $('.div-mouse-hover' + getRandomIntInclusive(0, nbSquare) ).fadeTo('slow', 0);
  });

});
