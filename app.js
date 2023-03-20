const hamburger = document.querySelector('.hamburger')
const hamburgerBar = document.querySelectorAll('.hamburger__bar')

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active')
})
