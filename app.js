const hamburger = document.querySelector('.hamburger')
const hamburgerBarList = document.querySelectorAll('.hamburger__bar')
const list = document.querySelector('.list')
const nav = document.querySelector('.nav')
hamburger.addEventListener('click', () => {
    hamburgerBarList.forEach(bar => {
        bar.classList.toggle('active')
    })
    list.classList.toggle('active')
    nav.classList.toggle('active')

})