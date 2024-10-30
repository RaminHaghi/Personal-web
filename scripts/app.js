// - Selecte Elements & Variables -
const navToggleBtn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const cover = document.querySelector('.cover');
const resumeListItems = document.querySelectorAll('.resume-list__item');
const portfolioListItems = document.querySelectorAll('.portfolio-list__item');
const menuItems = document.querySelectorAll('.menu__item');
const sections = document.querySelectorAll('main > section');
const changeThemeBtn = document.querySelector('.change-theme');

// - Even Listener -
navToggleBtn.addEventListener('click', function () {
    this.classList.toggle('menu-toggle--open')
    menu.classList.toggle('menu--open')
    cover.classList.toggle('cover--show')
})
changeThemeBtn.addEventListener('click', function () {
    document.documentElement.classList.toggle('dark-theme')
    if (document.documentElement.classList.contains('dark-theme')) {
        this.innerHTML = `<svg viewBox="0 0 24 24" id="light-mode">
  <path d="M7 12c0 2.8 2.2 5 5 5s5-2.2 5-5-2.2-5-5-5-5 2.2-5 5zm5-3c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm1-4V3c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1zm6.1-.1c-.4-.4-1-.4-1.4 0l-1.4 1.4c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4c.4-.3.4-1 0-1.4zM21 11h-2c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1zm-3.3 5.2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-1.4-1.4zM11 19v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6-.4-1-1-1s-1 .4-1 1zm-6.1.1c.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-1.4 1.4c-.4.3-.4 1 0 1.4zM2 12c0 .6.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1zm4.3-7.1c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4c.2.3.5.4.8.4s.5-.1.7-.3c.4-.4.4-1 0-1.4L6.3 4.9z"></path>
</svg>
`
    } else {
        this.innerHTML = `<svg viewBox="0 0 24 24" id="dark-mode">
  <path d="M12.3 4.9c.4-.2.6-.7.5-1.1s-.6-.8-1.1-.8C6.8 3.1 3 7.1 3 12c0 5 4 9 9 9 3.8 0 7.1-2.4 8.4-5.9.2-.4 0-.9-.4-1.2-.4-.3-.9-.2-1.2.1-1 .9-2.3 1.4-3.7 1.4-3.1 0-5.7-2.5-5.7-5.7 0-1.9 1.1-3.8 2.9-4.8zm2.8 12.5c.5 0 1 0 1.4-.1-1.2 1.1-2.8 1.7-4.5 1.7-3.9 0-7-3.1-7-7 0-2.5 1.4-4.8 3.5-6-.7 1.1-1 2.4-1 3.8-.1 4.2 3.4 7.6 7.6 7.6z"></path>
</svg>
`
    }
})


// - Custom Functons -
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

// - App Navigation tabs setting up -
navigationTabasInit(resumeListItems, 'resume-list__item--active', 'resume-contents--show')
navigationTabasInit(portfolioListItems, 'portfolio-list__item--active', 'portfolio-content--show')

// - Intersection Observer -
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

// - Loops -
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
            top: sectionOffsetTop - 40,
            behavior: "smooth"
        })
    })
})