const navToggleBtn = document.querySelector('.menu-toggle')
const menu = document.querySelector('.menu')
const cover = document.querySelector('.cover')
const resumeListItems = document.querySelectorAll('.resume-list__item')
navToggleBtn.addEventListener('click', function () {
    this.classList.toggle('menu-toggle--open')
    menu.classList.toggle('menu--open')
    cover.classList.toggle('cover--show')
})

resumeListItems.forEach(resumeListItem => {
    resumeListItem.addEventListener('click', function () {
        document.querySelector('.resume-list__item--active').classList.remove('resume-list__item--active')
        document.querySelector('.resume-contents--show').classList.remove('resume-contents--show')
        this.classList.add('resume-list__item--active')
        let contentId = this.getAttribute('data-content-id')
        document.querySelector(contentId).classList.add('resume-contents--show')
    })
})
