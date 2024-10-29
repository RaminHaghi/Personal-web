const navToggleBtn = document.querySelector('.menu-toggle')
const menu = document.querySelector('.menu')
const cover = document.querySelector('.cover')
const resumeListItems = document.querySelectorAll('.resume-list__item')
const portfolioListItems = document.querySelectorAll('.portfolio-list__item')
navToggleBtn.addEventListener('click', function () {
    this.classList.toggle('menu-toggle--open')
    menu.classList.toggle('menu--open')
    cover.classList.toggle('cover--show')
})

function navigationTabasInit(listItems, listItemActiveClass, listItemShowClass) {
    listItems.forEach(listItem => {
        listItem.addEventListener('click', function () {
            document.querySelector(`.${listItemActiveClass}`).classList.remove(listItemActiveClass)
            document.querySelector(`.${listItemShowClass}`).classList.remove(listItemShowClass)
            this.classList.add(listItemActiveClass)
            let contentId = this.getAttribute('data-content-id')
            document.querySelector(contentId).classList.add(listItemShowClass)
        })
    })
}

navigationTabasInit(resumeListItems, 'resume-list__item--active', 'resume-contents--show')
navigationTabasInit(portfolioListItems, 'portfolio-list__item--active', 'portfolio-content--show')