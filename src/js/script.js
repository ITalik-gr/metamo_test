
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