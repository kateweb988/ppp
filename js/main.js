
var accordeonButtons = document.getElementsByClassName("accordeon__button");

//пишем событие при клике на кнопки - вызов функции toggle
for(var i = 0; i < accordeonButtons.length; i++) {
    var accordeonButton = accordeonButtons[i];

    accordeonButton.addEventListener("click", toggleItems, false);
}

//пишем функцию
function toggleItems() {

    // переменная кнопки(актульная) с классом
    var itemClass = this.className;

    // добавляем всем кнопкам класс close
    for(var i = 0; i < accordeonButtons.length; i++) {
        accordeonButtons[i].className = "accordeon__button closed";
    }

    // закрываем все открытые панели с текстом
    var pannels = document.getElementsByClassName("accordeon__panel");
    for (var z = 0; z < pannels.length; z++) {
        pannels[z].style.maxHeight = 0;
    }

    // проверка. если кнопка имеет класс close при нажатии
    // к актуальной(нажатой) кнопке добававляем активный класс
    // а панели - которая находится рядом задаем высоту
    if(itemClass == "accordeon__button closed") {
        this.className = "accordeon__button active";
        var panel = this.nextElementSibling;
        panel.style.maxHeight = panel.scrollHeight + "px";
    }

}
var time = 2,
  cc = 1;
$(window).scroll(function() {
  $('#counter').each(function() {
    var
      cPos = $(this).offset().top,
      topWindow = $(window).scrollTop();
    if (cPos < topWindow + 300) {
      if (cc < 2) {
        $(".number").addClass("viz");
        $('div').each(function() {
          var
            i = 1,
            num = $(this).data('num'),
            step = 1000 * time / num,
            that = $(this),
            int = setInterval(function() {
              if (i <= num) {
                that.html(i);
              } else {
                cc = cc + 2;
                clearInterval(int);
              }
              i++;
            }, step);
        });
      }
    }
  });
});

$('input[name=tel]').inputmask('+7 (999) 999-99-99');
// Burger
$('.menu .button').click(function (event) {
   $(this).toggleClass('active');
   $('.burger').toggleClass('active');
   return false;
});
 // Scrollto
 $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
   var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
   if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top -0 }, 800); // анимируем скроолинг к элементу scroll_el
   }
   return false; // выключаем стандартное действие
   });
   $('.burger li a').click(function(event) {
   $('.menu .button').toggleClass('active');
   $('.burger').toggleClass('active');
   return false;
   });
$('.articmodal-close').click(function (e) {
   $.arcticmodal('close');

});
$('.nav__btn').click(function (e) {
   e.preventDefault();
   $('#popup-call').arcticmodal({
   });
});
$('.header__btn').click(function (e) {
   e.preventDefault();
   $('#popup-call2').arcticmodal({
   });
});
$('.area__btn').click(function (e) {
   e.preventDefault();
   $('#popup-call3').arcticmodal({
   });
});
$('.ser__btn').click(function (e) {
   e.preventDefault();
   $('#popup-call4').arcticmodal({
   });
});
$('a.cate__item').click(function (e) {
   e.preventDefault();
   $('#popup-call5').arcticmodal({
   });
});

$('.popup__add1').click(function (e) {
   e.preventDefault();
   $('#popup-call6').arcticmodal({
   });
});
$('.popup__add2').click(function (e) {
   e.preventDefault();
   $('#popup-call7').arcticmodal({
   });
});
$('.popup__add3').click(function (e) {
   e.preventDefault();
   $('#popup-call8').arcticmodal({
   });
});
$('.popup__add4').click(function (e) {
   e.preventDefault();
   $('#popup-call9').arcticmodal({
   });
});
$('.popup__add5').click(function (e) {
   e.preventDefault();
   $('#popup-call10').arcticmodal({
   });
});



$('.items__block1').click(function (e) {
   e.preventDefault();
   $('#item1').arcticmodal({
   });
});
$('.items__block2').click(function (e) {
   e.preventDefault();
   $('#item2').arcticmodal({
   });
});
$('.items__block3').click(function (e) {
   e.preventDefault();
   $('#item3').arcticmodal({
   });
});
$('.items__block4').click(function (e) {
   e.preventDefault();
   $('#item4').arcticmodal({
   });
});
$('.items__block5').click(function (e) {
   e.preventDefault();
   $('#item5').arcticmodal({
   });
});

$('.area__slider').slick({
   dots: false,
   infinite: true,
   arrows: true,
   slidesToShow: 3,
   slidesToScroll: 1,
   prevArrow: '<button type="button" class="slick-prev"><img src="img/left.svg" class="svg"></button>',
   nextArrow: '<button type="button" class="slick-next"><img src="img/right.svg" class="svg"></button>',
   responsive: [
      {
         breakpoint: 1199,
         settings: {
            slidesToShow: 2,
         }
      },
      {
         breakpoint: 991,
         settings: {
            slidesToShow: 2,
         }
      },
      {
         breakpoint: 768,
         settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true,
         }
      },
      {
         breakpoint: 576,
         settings: {
            slidesToShow: 1,
            slidesToShow: 1,
            arrows: false,
            dots: true,
         }
      }
   ]
});
$('.rev__slider').slick({
   dots: false,
   infinite: true,
   arrows: true,
   slidesToShow: 2,
   slidesToScroll: 1,
   prevArrow: '<button type="button" class="slick-prev"><img src="img/red-left.svg" alt="" class="red1"><img src="img/left.svg" alt="" class="red2"></button>',
   nextArrow: '<button type="button" class="slick-next"><img src="img/red-right.svg" alt="" class="red1"><img src="img/right.svg" alt="" class="red2"></button>',
   responsive: [
      {
         breakpoint: 1199,
         settings: {
            slidesToShow: 2,
         }
      },
      {
         breakpoint: 991,
         settings: {
            slidesToShow: 2,
         }
      },
      {
         breakpoint: 768,
         settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true,
         }
      },
      {
         breakpoint: 576,
         settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true,
         }
      }
   ]
});
$('.items__slider').slick({
   swipe: true,
   swipeToSlide: true,
   dots: false,
   infinite: false,
   arrows: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   prevArrow: '<button type="button" class="slick-prev"><img src="img/red-left.svg" alt="" class="red1"><img src="img/left.svg" alt="" class="red2"></button>',
   nextArrow: '<button type="button" class="slick-next"><img src="img/red-right.svg" alt="" class="red1"><img src="img/right.svg" alt="" class="red2"></button>',
   responsive: [
      {
         breakpoint: 1199,
         settings: {
            slidesToShow: 2,
            infinite: true,
            arrows: false,
            dots: true,
         }
      },
      {
         breakpoint: 991,
         settings: {
            slidesToShow: 2,
            infinite: true,
            arrows: false,
            dots: true,
         }
      },
      {
         breakpoint: 768,
         settings: {
            slidesToShow: 1,
            infinite: true,
            arrows: false,
            dots: true,
         }
      },
      {
         breakpoint: 576,
         settings: {
            slidesToShow: 1,
            infinite: true,
            arrows: false,
            dots: true,
         }
      }
   ]
});
$('.header__slider').slick({
   swipe: true,
   swipeToSlide: true,
   dots: true,
   infinite: true,
   arrows: false,
   autoplay: true,
   autoplaySpeed: 5000,
   slidesToShow: 1,
   slidesToScroll: 1,
   prevArrow: '<button type="button" class="slick-prev"><img src="img/left.svg" class="svg"></button>',
   nextArrow: '<button type="button" class="slick-next"><img src="img/right.svg" class="svg"></button>',
   responsive: [
      {
         breakpoint: 576,
         settings: {
            slidesToShow: 1,
            infinite: true,
            arrows: false,
            dots: true,
         }
      }
   ]
});
// svg
$(function(){
   jQuery('img.svg').each(function(){
       var $img = jQuery(this);
       var imgID = $img.attr('id');
       var imgClass = $img.attr('class');
       var imgURL = $img.attr('src');
   
       jQuery.get(imgURL, function(data) {
           // Get the SVG tag, ignore the rest
           var $svg = jQuery(data).find('svg');
   
           // Add replaced image's ID to the new SVG
           if(typeof imgID !== 'undefined') {
               $svg = $svg.attr('id', imgID);
           }
           // Add replaced image's classes to the new SVG
           if(typeof imgClass !== 'undefined') {
               $svg = $svg.attr('class', imgClass+' replaced-svg');
           }
   
           // Remove any invalid XML tags as per http://validator.w3.org
           $svg = $svg.removeAttr('xmlns:a');
           
           // Check if the viewport is set, else we gonna set it if we can.
           if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
               $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
           }
   
           // Replace image with new SVG
           $img.replaceWith($svg);
   
       }, 'xml');
   
   });
 });
 var basicScrollTop = function () {
   var btnTop = document.querySelector('.text__up');
   var btnReveal = function () {
      if (window.scrollY >= 300) {
         btnTop.classList.add('is-visible');
      } else {
         btnTop.classList.remove('is-visible');
      }
   };
   window.addEventListener('scroll', btnReveal);
};
basicScrollTop();
