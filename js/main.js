$(document).ready(function () {
  $(".btn-toggle-sidebar").on('click', function () {
    $('.sidebar-block').toggleClass('closed')
    $(".sidebar-block .accordion-menu .btn-toggle-accordion").removeClass('isOpen')
    $(".sidebar-block .accordion-menu .body-accordion").slideUp()
  })

  $("body").click(function (e) {
    if (!$(e.target).is(".language_block *,.language_block")) {
      $(".language_block").removeClass("active");
    }

    if (
      !$(e.target).is(
        ".mobile-menu .mobile-menu-body, .mobile-menu .mobile-menu-body *"
      )
    ) {
      $(".mobile-menu").removeClass("active");
      $("body").removeClass("opened");
    }
  });

  var swiperGeneral = new Swiper(".slider_main", {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
      delay: 180000,
    },
    effect: "fade",
    loop: false,
    on: {
      slideChange: function () {
        document.getElementById("current-slide-general").textContent = this.realIndex + 1;
      },
    },
    navigation: {
      nextEl: ".general_section .slider_btns .next",
      prevEl: ".general_section .slider_btns .prev",
    },
    breakpoints: {
      767: {
        slidesPerView: 1,
      },
      // 991: {
      //   slidesPerView: 2,
      // },
      // 1250: {
      //   slidesPerView: 1,
      // },
    },
  });
  var swiperHistory = new Swiper(".history-slider .swiper-container", {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
      delay: 180000,
    },
    // effect: "fade",
    loop: false,
    on: {
      slideChange: function () {
        document.getElementById("current-slide-history").textContent = this.realIndex + 1;
      },
    },
    navigation: {
      nextEl: ".history_section .slider_btns .next",
      prevEl: ".history_section .slider_btns .prev",
    },
    breakpoints: {
      767: {
        slidesPerView: 1,
      },
      // 991: {
      //   slidesPerView: 2,
      // },
      // 1250: {
      //   slidesPerView: 1,
      // },
    },
  });
  var swiperSklad = new Swiper(".sklad_swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
      delay: 180000,
    },
    // effect: "fade",
    loop: false,
    on: {
      slideChange: function () {
        document.getElementById("current-slide-sklad").textContent = this.realIndex + 1;
      },
    },
    navigation: {
      nextEl: ".warehouses_section .slider_btns .next",
      prevEl: ".warehouses_section .slider_btns .prev",
    },
    breakpoints: {
      767: {
        slidesPerView: 1,
      },
      // 991: {
      //   slidesPerView: 2,
      // },
      // 1250: {
      //   slidesPerView: 1,
      // },
    },
  });

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
        slidesPerView: 3,
      },
      // 991: {
      //   slidesPerView: 2,
      // },
      // 1250: {
      //   slidesPerView: 1,
      // },
    },
  });

  var swiperPartners = new Swiper(".partner_section .swiper-container", {
    slidesPerView: 2.4,
    spaceBetween: 20,
    autoplay: {
      delay: 180000,
    },
    // effect: "fade",
    loop: false,
    on: {
      slideChange: function () {
        document.getElementById("current-slide-partner").textContent = this.realIndex + 1;
      },
    },
    navigation: {
      nextEl: ".partner_section .slider_btns .next",
      prevEl: ".partner_section .slider_btns .prev",
    },
    breakpoints: {
      767: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 4,
      },
      1250: {
        slidesPerView: 6,
      },
    },
  });

  var sertificate = new Swiper(".sertificate_section .swiper-container", {
    slidesPerView: 1, // Faqat bitta slayd to‘liq ko‘rinadi
    spaceBetween: -780, // Yon tomondagi slaydlarni yaqinlashtirish
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
    on: {
      slideChange: function () {
        document.getElementById("current-slide-sertifikacte").textContent = this.realIndex + 1;
      },
    },

    // If we need pagination
    navigation: {
      nextEl: ".sertificate_section .slider_btns .next",
      prevEl: ".sertificate_section .slider_btns .prev",
    },

  });

});

