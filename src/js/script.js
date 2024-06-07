
// menu

const menu = document.querySelector('.menu'),
      toggle = document.querySelector('.nav-toggle'),
      body = document.querySelector('body');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('nav-toggle--active')
  menu.classList.toggle('menu--active')
  body.classList.toggle('hidden')
})

// popup

const popup = document.querySelector('.popup-wrap'),
      popupClose = document.querySelector('.popup-close'),
      popupToggles = document.querySelectorAll('.team-card__btn');

popupToggles.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault()
    popup.classList.toggle('popup-wrap--active')
  })
})
popupClose.addEventListener('click', () => {
  popup.classList.remove('popup-wrap--active')
})

// slider


  // document.addEventListener('DOMContentLoaded', () => {
  //   // Selecting all elements with the class 'slider'
  // const sliders = document.querySelectorAll(".slider");


  // sliders.forEach((slider) => {
  //   // Getting necessary elements within the slider
  //   const sliderParent = slider?.parentElement;
  //   const sliderItems = slider.querySelectorAll(".slider-item");
  //   const nextArrow = sliderParent?.querySelector(".arrow-next");
  //   const prevArrow = sliderParent?.querySelector(".arrow-prev");
  //   const pagination = sliderParent?.querySelector(".slider-pagination");

  //   // console.log(nextArrow);
  //   // Adding the 'active-slider' class to the slider
  //   slider.classList.add("active-slider");

  //   console.log(sliderParent);

  //   // Width of one slide
  //   let currX = sliderItems[0]?.clientWidth;

  //   window.addEventListener("resize", () => {
  //     currX = sliderItems[0]?.clientWidth;
  //   });

  //   // Current slider position
  //   let currrentSlider = 1;
  //   // Total number of slides
  //   let totalSlides = sliderItems?.length;

  //   setTimeout(() => {
  //     moveNext()
  //   }, 6500)

  //   const updateActiveDot = () => {
  //     // Updating the active dot in the pagination
  //     if (pagination) {
  //       pagination.querySelectorAll(".slider-dot").forEach((dot) => {
  //         if (dot.getAttribute("dot-index") == currrentSlider) {
  //           dot.classList.add("slider-dot-active");
  //         } else {
  //           dot.classList.remove("slider-dot-active");
  //         }
  //       });
  //     }
  //   };

  //   const updateCurrentSlide = (type) => {
  //     // Updating the current slide based on 'next' or 'prev'
  //     if (type == "next") {
  //       currrentSlider += 1;
  //     } else if (type == "prev") {
  //       currrentSlider -= 1;
  //     }

  //     // Ensuring the current slide is within bounds
  //     if (currrentSlider < 1) {
  //       currrentSlider = 1;
  //     } else if (currrentSlider > totalSlides) {
  //       currrentSlider = totalSlides;
  //     }
  //   };

  //   // Creating dots for pagination if it exists
  //   if (pagination) {
  //     sliderItems.forEach((item, i) => {
  //       let dot = document.createElement("div");
  //       dot.classList.add("slider-dot");
  //       dot.setAttribute("dot-index", i + 1);
  //       pagination.appendChild(dot);
  //     });

  //     // Updating the active dot initially
  //     updateActiveDot();
  //   }

  //   // Setting the active slide and dot, if pagination exists
  //   const moveNext = () => {
  //     console.log('MOVE NEXT');
  //     slider.scrollTo({
  //       left: slider.scrollLeft + currX - currX * .08,
  //       behavior: "smooth",
  //     });

  //     // Updating current slide and active dot
  //     updateCurrentSlide("next");
  //     updateActiveDot();
  //   };

  //   const movePrev = () => {
  //     console.log('MOVE PREV');
  //     slider.scrollTo({
  //       left: slider.scrollLeft - currX + currX * .08,
  //       behavior: "smooth",
  //     });

  //     // Updating current slide and active dot
  //     updateCurrentSlide("prev");
  //     updateActiveDot();
  //   };

  //   // Adding click event listeners for arrows
  //   nextArrow?.addEventListener("click", moveNext);
  //   prevArrow?.addEventListener("click", movePrev);

  //   // Adding swipe animation functionality
  //   let isDown = false;
  //   let startY = 0;
  //   let startX = 0;
  //   let dist;
  //   let y = 0;
  //   let x = 0;
  //   let isMove = false;

  //   const start = (e) => {
  //     // e.preventDefault();
  //     isDown = true;
  //     startX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
  //     startY = e.type === "touchstart" ? e.touches[0].clientY : e.clientY;
  //   };

  //   const move = (e) => {
  //     y = e.type === "touchmove" ? e.touches[0].clientY : e.clientY;

  //     // e.preventDefault();
  //     if (!isDown) return;
  //     isMove = true;
  //     // Getting the current position on mousemove or touchmove
  //     x = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
  //     dist = startX - x;
  //   };

  //   const end = (e) => {
  //     e.preventDefault();
  //     isDown = false;

  //     if((startY - y) >= 3) {
  //       return
  //     }

  //     if (isMove) {
  //       if (dist < 0) {
  //         movePrev();
  //       } else {
  //         moveNext();
  //       }
  //     } else {
  //       // Use e.target to get the element on which the event occurred
  //       const clickedElement = e.target;

  //       // Function to get a link from the current element or its parents
  //       const getLinkFromElement = (element) => {
  //         const link = element.getAttribute("href");
  //         if (link) {
  //           return link;
  //         } else if (element.parentElement) {
  //           return getLinkFromElement(element.parentElement);
  //         } else {
  //           return null;
  //         }
  //       };

  //       const link = getLinkFromElement(clickedElement);

  //       // If there is a link, follow it
  //       if (link) {
  //         window.location.href = link;
  //       } else {
  //         console.log("No link found");
  //       }
  //     }

  //     isMove = false;
  //     // Checking the direction of swipe and moving accordingly
  //   };

  //   // Adding event listeners for swipe animation
  //   (() => {
  //     slider.addEventListener("mousedown", start);
  //     slider.addEventListener("touchstart", start);

  //     slider.addEventListener("mousemove", move);
  //     slider.addEventListener("touchmove", move);

  //     slider.addEventListener("mouseup", end);
  //     slider.addEventListener("touchend", end);
  //   })();
  // });
  // })

  // import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
  const swiper = new Swiper('.swiper', {  
    slidesPerView: 2.6,
    spaceBetween: 0,
    navigation: {
      nextEl: '.arrow-next',
      prevEl: '.arrow-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
      dragSize: 140,
    },
    576: {
      // slidesPerView: 1.8,
    },
    768: {
      // slidesPerView: 1.1,
      // spaceBetween: 0,
      scrollbar: {
        el: '.swiper-scrollbar',
        dragSize: 230,
      },
    },

  });

  const prevEl = document.querySelector('.arrow-prev')

  prevEl.addEventListener('click', (e) => {
    swiper.slidePrev(200, true)
  })

// tabs

let currentTab;

const tabs = document.querySelectorAll('.team-tab');

tabs.forEach(item => {
  item.addEventListener('click', () => {
    if(!item.classList.contains('team-tab--active')) {
      tabs.forEach(tab => tab.classList.remove('team-tab--active'))
      item.classList.add('team-tab--active')
    }
  })
})