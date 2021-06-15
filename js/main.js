$('.reviews__list').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$(".review__all").click(function () {
  $(this).siblings('.review__text').toggleClass('review__text--opened');
  $(this).toggleClass('review__all--active');


  if ($(this).hasClass('review__all--active')) {
    $(this).html('Свернуть отзыв');
  }
  else {
    $(this).html('Читать отзыв полностью');
  }
});

$(window).scroll(function(){
  var scroll = $(window).scrollTop();

  if (scroll >= 808) {
    $('.cabinet__reg').addClass('cabinet__reg--visible');
  }
  else $('.cabinet__reg').removeClass('cabinet__reg--visible');
});


$(".packages__more").click(function () {
  $(this).siblings('.packages__content').addClass('packages__content--active')
  $(this).hide();
});

$(".features__more").click(function () {
  $(this).parent().parent().siblings('.features__list').addClass('features__list--active')
  $(this).hide();
});

$('.tabs').on('click', '.tabs__item:not(.tabs__item--active)', function () {
  $(this)
    .addClass('tabs__item--active').siblings().removeClass('tabs__item--active')
    .closest('.packages__list').find('.packages__item').removeClass('packages__item--active').eq($(this).index()).addClass('packages__item--active');
});
