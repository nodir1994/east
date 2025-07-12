(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

<<<<<<< HEAD
=======
  var swiperPromotions = new Swiper(".promotions_swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
      delay: 180000,
    },
    // effect: "fade",
    loop: false,
    on: {
      slideChange: function () {
        document.getElementById("current-slide-promotions").textContent = this.realIndex + 1;
      },
    },
    navigation: {
      nextEl: ".promotions_section .slider_btns .next",
      prevEl: ".promotions_section .slider_btns .prev",
    },
    breakpoints: {
      767: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
      // 1250: {
      //   slidesPerView: 3,
      // },
    },
  });
>>>>>>> bebf5846415118b653478343cbe4193dc35fc6ba

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

<<<<<<< HEAD
=======
  var sertificate = new Swiper(".sertificate_section .swiper-container", {
    slidesPerView: 1.7, // Faqat bitta slayd to‘liq ko‘rinadi
    spaceBetween: 0, // Yon tomondagi slaydlarni yaqinlashtirish
    centeredSlides: true, // Markaziy slayd aktiv bo‘ladi
    loop: false, // Doimiy aylanib turish
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0, // Yon tomondagi slaydlar buriladi
      stretch: 0,
      depth: 300, // Orqaga chekinish effekti
      modifier: 2,
      slideShadows: false, // Soyalarni o‘chirish
    },
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: -780,
      },
    },
    on: {
      slideChange: function () {
        document.getElementById("current-slide-sertifikacte").textContent = this.realIndex + 1;
      },
    },
>>>>>>> bebf5846415118b653478343cbe4193dc35fc6ba

    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        animateOut: 'fadeOutLeft',
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    
})(jQuery);

