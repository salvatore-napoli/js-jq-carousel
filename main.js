$('.next').click(function() {
  if (!$('img.active').hasClass('last')) {
    $('.active').removeClass('active').next().addClass('active');
    }
  }
);

$('.prev').click(function() {
    if (!$('img.active').hasClass('first')) {
      $('.active').removeClass('active').prev().addClass('active');
    }
  }
);
