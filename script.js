const navbar = document.querySelector("header.navbar-container"),
navOpenBtn = document.querySelector(".navOpenBtn"),
navCloseBtn = document.querySelector(".navCloseBtn");

navOpenBtn.addEventListener("click", () => {
navbar.classList.add("openNav");
});

navCloseBtn.addEventListener("click", () => {
navbar.classList.remove("openNav");
});

document.querySelectorAll('.card-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
    });
  });
  

new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
    // Pagitation Bullets
    pagination: {
      el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
//Responsive breakpoints
    breakpoints: {
        0:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        }
    }
  });

  new Swiper('.certificate-wrapper', {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      }
    }
  });
  