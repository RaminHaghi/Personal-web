const navToggleBtn = document.querySelector('.menu-toggle')
const menu = document.querySelector('.menu')
const cover = document.querySelector('.cover')

navToggleBtn.addEventListener('click', function() {
    this.classList.toggle('menu-toggle--open')
    menu.classList.toggle('menu--open')
    cover.classList.toggle('cover--show')
})