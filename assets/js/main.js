/* Fix header to top */
$(document).ready(function () {
  const header = $("header");
  const headerHeight = header.outerHeight();

  $(window).scroll(function () {
    if ($(window).scrollTop() > headerHeight) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  });
});

//Search Functionality
document.getElementById("search-icon").addEventListener("click", function (e) {
  e.preventDefault(); // Prevent default anchor behavior

  Fancybox.show([
    {
      src: "#search-popup",
      type: "inline",
    },
  ]);
});

//Home banner Slider
$(document).ready(function () {
  const swiper = new Swiper(".banner-swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

$(document).ready(function () {
  const swiper = new Swiper(".cs-swiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      480: {
        slidesPerView: 1,
      },
    },
  });
});

$(document).ready(function () {
  const swiper = new Swiper(".industry-swiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 5,
    spaceBetween: 20,
    breakpoints: {
      768: {
        slidesPerView: 5,
      },
      480: {
        slidesPerView: 1,
      },
    },
  });
});

$(document).ready(function () {
  const swiper = new Swiper(".country-swiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 6,
    spaceBetween: 20,
    breakpoints: {
      768: {
        slidesPerView: 6,
      },
      480: {
        slidesPerView: 1,
      },
    },
  });
});

/* CX SOLUTIONS TAB - DESIGN EXPERIENCE */
$(document).ready(function () {
  $(".design-experience .tab").on("click", function () {
    // Remove active class from all tabs and contents
    $(".design-experience .tab").removeClass("active");
    $(".design-experience .content").removeClass("active");

    // Add active class to the clicked tab
    $(this).addClass("active");

    // Show the corresponding content
    const targetContent = $(this).data("content");
    $("#" + targetContent).addClass("active");
  });
});

/* CX SOLUTIONS TAB - VALUE DELIVERY */
$(document).ready(function () {
  $(".value-delivery .tab").on("click", function () {
    // Remove active class from all tabs and contents
    $(".value-delivery .tab").removeClass("active");
    $(".value-delivery .content").removeClass("active");

    // Add active class to the clicked tab
    $(this).addClass("active");

    // Show the corresponding content
    const targetContent = $(this).data("content");
    $("#" + targetContent).addClass("active");
  });
});

/* BACK 0 TAB  */
$(document).ready(function () {
  $(".back-tabs .tab-link").on("click", function () {
    // Remove active class from all tabs and contents
    $(".back-tabs .tab-link").removeClass("active");
    $(".back-tabs .content").removeClass("active");

    // Add active class to the clicked tab
    $(this).addClass("active");

    // Show the corresponding content
    const targetContent = $(this).data("content");
    $("#" + targetContent).addClass("active");
  });
});

/* BACK 0 TAB  */
$(document).ready(function () {
  $(".intel-tabs .tab-link").on("click", function () {
    // Remove active class from all tabs and contents
    $(".intel-tabs .tab-link").removeClass("active");
    $(".intel-tabs .content").removeClass("active");

    // Add active class to the clicked tab
    $(this).addClass("active");

    // Show the corresponding content
    const targetContent = $(this).data("content");
    $("#" + targetContent).addClass("active");
  });
});
