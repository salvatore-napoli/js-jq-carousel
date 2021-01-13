// Passare alla slide precedente
function prevSlide() {
  if (!$('img.active').hasClass('first')) {
    $('.active').removeClass('active')
    .prev().addClass('active');
  }
}

// Passare alla slide successiva
function nextSlide() {
  if (!$('img.active').hasClass('last')) {
    $('.active').removeClass('active')
    .next().addClass('active');
  }
}

// Cambiare slide via click
$('.prev').click(prevSlide);
$('.next').click(nextSlide);

// Cambiare slide via tastiera
$(document).keydown(function (key) {
  switch (key.keyCode) {
    case 37:
      prevSlide();
    break;
    case 39:
      nextSlide();
    break;
  }
});


/* BONUS */
// Pallini generati in js
for (var i = 0; i < $('.images img').length; i++) {
  $('.nav').append('<i class="fas fa-circle"></i>');
}
$('.fas.fa-circle').first().addClass('active first');
$('.fas.fa-circle').last().addClass('last');

// Cambiare slide via pallini
$('.fas.fa-circle').click(function () {
    $('.active').removeClass('active');
    $('.images img').eq($(this).index()).addClass('active');
    $('.fas.fa-circle').eq($(this).index()).addClass('active');
});
/* end BONUS */
