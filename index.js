const open = document.getElementById('open');
const menu = document.getElementById('menu');
const button = document.getElementById('button');
const c = document.getElementById('c');
const nav = document.getElementById('nav');
const navDesktop = document.querySelector('nav.header-nav-desktop');
const menuItems = [...document.querySelectorAll('.link')];
const mediaQuery = window.matchMedia('(min-width: 1040px)');

window.addEventListener('load', () => mediaQuery.matches ? navDesktop.style.display = 'grid' : navDesktop.style.display = 'none');


menuItems.forEach((el) => {
    el.addEventListener("click", function () {
        nav.classList.remove('unshow');
        nav.classList.add('show');
        c.classList.remove('button-div-open');
    })
});

/*
function closeMenu() {
    nav.classList.remove('show');
    nav.classList.add('unshow');
    c.classList.remove('button-div-open');
}*/



function menuOpenButton() {
    if(c.classList.contains('button-div-open')) {
        c.classList.remove('button-div-open');
        nav.classList.add('show');
        nav.classList.remove('unshow');
    } else {
        c.classList.add('button-div-open');
        nav.classList.add('unshow');
        nav.classList.remove('show');
    }
}


//Animation on Scroll - code below.
let itemAppear = [...document.querySelectorAll('.animation')];
let options = {
    rootMargin: '-10%',
    threshold: 0.0
};
let observer = new IntersectionObserver(showItem, options);

function showItem (entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active');
        }
    })
}

itemAppear.forEach(item => {
    observer.observe(item);
});



