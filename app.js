const hamburger = document.querySelector('.hamburger')
const hamburgerBar = document.querySelectorAll('.hamburger__bar')
const nav = document.querySelector('.nav')
const list = document.querySelector('.list')
const expendIcon = document.querySelector('.square__icon')

const squareDescription = document.querySelector('.square__description')

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('hamburger--open')
    nav.classList.toggle('nav--open')
    list.classList.toggle('list--open')
})

expendIcon.addEventListener('click', ()=>{
    squareDescription.classList.toggle('square__description--open')
})