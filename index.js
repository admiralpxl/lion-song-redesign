const open = document.getElementById('open');
const menu = document.getElementById('menu');
const button = document.getElementById('button');
const c = document.getElementById('c');
const nav = document.getElementById('nav');



const cerrar = () => {
    //open.classList.remove('show');
   // open.classList.add('unshow');
   // c.classList.remove('button-div-open');
}

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



