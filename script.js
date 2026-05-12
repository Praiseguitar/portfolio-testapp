const hamburger = document.getElementById('hamburger');
const darkMode = document.getElementById('darkMode');
const body = document.getElementById('body');
const iconChange = document.getElementById('darkModeSwitch');
const navItems = document.getElementById('nav-items');

// hamburger logic---------------
hamburger.addEventListener('click', () => {

    navItems.classList.toggle("nav-display")
})

// ------------------ dark mode logic--------

darkMode.addEventListener('click', () => {

    iconChange.classList.toggle('fa-sun');
    iconChange.classList.toggle('fa-moon');
    // ChargelightMode();
    document.body.classList.toggle('dark-mode')



});

// --------------- desktop nav icon click effect----

const navIcons = document.querySelectorAll('.nav-icon');

navIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        console.log("icon Clicked")
        navIcons.forEach(ic => ic.classList.remove("clickedIcon"))

        icon.classList.add("clickedIcon");
    });
});




// ----------------------Routing logics---------

const pages = document.querySelectorAll('section');

function router(pathname) {
    pages.forEach((page) => {
        page.classList.remove("active")
    });

    const currentPage = document.getElementById(pathname);

    if (currentPage) {
        currentPage.classList.add("active")
    }
    else {
        document.getElementById('/').classList.add("active");
    }
}


document.addEventListener("click", (e) => {
    const routeElement = e.target.closest("[data-route]");
    if (routeElement) {
        const route = routeElement.dataset.route;
        history.pushState({}, "", route);

        router(route);

        navItems.classList.remove("nav-display")

    }
});

window.addEventListener("popstate", () => {
    router(location.pathname);
})

window.addEventListener("scroll", () => {
    navItems.classList.remove("nav-display")
})

router(location.pathname);

function ChargelightMode() {
    if (iconChange.classList.contains('fa-moon')) {
        body.style.backgroundColor = 'black'
        body.style.color = 'white'
    } else if (iconChange.classList.contains('fa-sun')) {
        body.style.backgroundColor = 'white';
    }
}