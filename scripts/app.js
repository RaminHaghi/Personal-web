const navToggleBtn = document.querySelector('.menu-toggle')

navToggleBtn.addEventListener('click', function() {
    this.classList.toggle('menu-toggle--open')
})