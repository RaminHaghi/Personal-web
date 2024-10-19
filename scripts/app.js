const navToggleBtn = document.querySelector('.menu-toggle')
const menu = document.querySelector('.menu')

navToggleBtn.addEventListener('click', function() {
    this.classList.toggle('menu-toggle--open')
    menu.classList.toggle('menu--open')
})