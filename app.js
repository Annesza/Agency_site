const hamburger = document.querySelector('.hamburger')
const hamburgerBar = document.querySelectorAll('.hamburger__bar')
const nav = document.querySelector('.nav')
const list = document.querySelector('.list')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger--open')
    nav.classList.toggle('nav--open')
    list.classList.toggle('list--open')
})

const square = document.querySelectorAll('.square__element')
const icon = document.querySelector('.square__icon')

icon.addEventListener('click', () => {
    square.forEach((element) => {
        element.classList.toggle('open')
    })

})