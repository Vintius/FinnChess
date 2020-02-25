document.addEventListener("DOMContentLoaded", function() {

    // menu
    let menuLinks = document.body.querySelectorAll('.js-scroll-link'),
        menuLinksLength = menuLinks.length,
        menu = document.body.querySelector(".menu-wrapper");


    function clearClasses(items) {
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove('is-active');
        }
    }

    function addClasses(event) {
        event.preventDefault();

        let href = this.getAttribute("href").slice(1),
            target = document.getElementById(href),
            position = target.getBoundingClientRect(),
            menuHeight = menu.offsetHeight;

        clearClasses(menuLinks);
        this.classList.add('is-active');
        window.scrollTo(0, position.top - menuHeight);
    }

    for (let i = 0; i < menuLinksLength; i++) {
        menuLinks[i].addEventListener('click', addClasses);
    }

    // tooltip
    let tooltips = document.body.querySelectorAll(".js-tooltip-link");

    function toggleTooltip(event) {
        event.preventDefault();

        let content = this.querySelector(".js-tooltip-content");

        if (content.classList.contains("is-active")) {
            content.classList.remove('is-active');
        }
        else {
            content.classList.add('is-active');
        }
    }

    for (let i = 0; i < tooltips.length; i++) {
        tooltips[i].addEventListener('click', toggleTooltip);
    }

    // questions
    let questions = document.body.querySelectorAll(".js-toggle-question");

    function toggleQuestion(event) {
        event.preventDefault();

        let parent = this.closest(".faq-list");

        if (parent.classList.contains("is-active")) {
            parent.classList.remove('is-active');
        }
        else {
            parent.classList.add('is-active');
        }
    }

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', toggleQuestion);
    }

    // tabs
    let tabLinks = document.body.querySelectorAll('.js-tab-link'),
        tabContents = document.body.querySelectorAll('.js-tab-content');

    function updateTabs(event) {
        event.preventDefault();

        let tabTarget = this.dataset.target,
            target = [];

        for (let i = 0; i < tabContents.length; i++) {
            if (tabTarget === tabContents[i].dataset.target) {
                target.push(tabContents[i]);
            }
        }

        clearClasses(tabContents);
        clearClasses(tabLinks);
        this.classList.add('is-active');
        target[0].classList.add('is-active');
    }

    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].addEventListener('click', updateTabs);
    }
});
