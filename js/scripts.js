jQuery(document).ready(function ($) {
  $('.counter').counterUp({
    delay: 10,
    time: 800
  });
});
$(document).ready(function () {
  $('header .hamburger img').click(function () {
    let responsiveMenu = $('.responsive-nav');
    responsiveMenu.animate({
      right: 0
    }, 300);
    $('body').append('<div class="back-container"></div>');
    $('.back-container').click(function () {
      responsiveMenu.animate({
        right: '-220px'
      }, 300)
      $(this).remove()
    })
  })
})