$('.next').click(function() {
  // alert('ciao');
  var activeImage = $('.images img.active');

  var activeCirle = $('.nav i.active');

  activeImage.removeClass('active');
  activeCirle.removeClass('active');

  var nextImage = activeImage.next('img');
  var nextCircle = activeCirle.next('i');

  if (nextImage.length != 0)
  {
      nextImage.addClass('active');

  }
  else {
    $('.images img').first().addClass('active');
    $('.nav i').first().addClass('active');

  }


  $('.images img').removeClass('active');

  activeImage.next('img').addClass('active');

});

$('.prev').click(function() {

  var activeImage = $('.images img.active');

  activeImage.removeClass('active');

  var prevImage = activeImage.prev('img');

  if (prevImage.length != 0)
  {
      prevImage.addClass('active');

  }
  else {
    $('.images img').last().addClass('active');

  }

});
