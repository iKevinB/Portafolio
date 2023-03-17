let nav = document.querySelector('.navigation');
let navItem = document.querySelector('.list-item');

function Menu() {
    nav.classList.toggle('is-open');
}

function Close() {
    nav.classList.remove('is-open');
}

document.addEventListener("click", e =>{
    if (e.target.matches('.list-item')) {
        nav.classList.remove('is-open');
    }
})

