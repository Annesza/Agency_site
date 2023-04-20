const hamburger = document.querySelector('.hamburger')
const hamburgerBar = document.querySelectorAll('.hamburger__bar')
const nav = document.querySelector('.nav')
const list = document.querySelector('.list')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger--open')
    nav.classList.toggle('nav--open')
    list.classList.toggle('list--open')
})

const square = document.querySelector('.square__description')
const icon = document.querySelector('.square__icon')
const info = document.querySelector('.square__info')
const wrapper = document.querySelector('.square__wrapper')


icon.addEventListener('click', () => {
    icon.classList.toggle('square__icon--open')
    square.classList.toggle('square__description--open')
    wrapper.classList.toggle('square__wrapper--open')
    info.classList.toggle('square__info--open')
})