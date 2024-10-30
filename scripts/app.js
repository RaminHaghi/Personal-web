const navToggleBtn = document.querySelector('.menu-toggle')
const menu = document.querySelector('.menu')
const cover = document.querySelector('.cover')
const resumeListItems = document.querySelectorAll('.resume-list__item')
const portfolioListItems = document.querySelectorAll('.portfolio-list__item')
const menuItems = document.querySelectorAll('.menu__item')
const sections = document.querySelectorAll('main > section')

navToggleBtn.addEventListener('click', function () {
    this.classList.toggle('menu-toggle--open')
    menu.classList.toggle('menu--open')
    cover.classList.toggle('cover--show')
})

function navigationTabasInit(listItems, listItemActiveClass, listItemShowClass) {
    listItems.forEach(listItem => {
        listItem.addEventListener('click', function () {
            removeActiveClass(listItemActiveClass)
            removeActiveClass(listItemShowClass)
            this.classList.add(listItemActiveClass)
            let contentId = this.getAttribute('data-content-id')
            document.querySelector(contentId).classList.add(listItemShowClass)
        })
    })
}
function removeActiveClass(className) {
    document.querySelector(`.${className}`).classList.remove(className)
}
navigationTabasInit(resumeListItems, 'resume-list__item--active', 'resume-contents--show')
navigationTabasInit(portfolioListItems, 'portfolio-list__item--active', 'portfolio-content--show')


const observer = new IntersectionObserver(observerHandler, {
    threshold: 0.5
});

function observerHandler(allSections) {
    allSections.map(section => {
        let sectionClassName = section.target.className
        let sectionMenuItem = document.querySelector(`.menu__item[data-section=${sectionClassName}]`)
        if (section.isIntersecting) {
            sectionMenuItem.classList.add("menu__item--active")
        } else {
            sectionMenuItem.classList.remove("menu__item--active")
        }
    })
}

sections.forEach(section => {
    observer.observe(section)
})


menuItems.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault()
        removeActiveClass('menu__item--active')
        item.classList.add("menu__item--active")

        let sectionClass = item.getAttribute("data-section")
        let sectionOffsetTop = document.querySelector(`.${sectionClass}`).offsetTop

        window.scrollTo({
            top: sectionOffsetTop - 20,
            behavior: "smooth"
        })
    })
})