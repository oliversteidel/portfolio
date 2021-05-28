const burger = document.getElementById('burger');
const navList = document.getElementById('nav-list');

let navOpen = false;


const toggleNav = () => {
    if(navOpen) {
        burger.classList.remove('btn-active');
        navList.classList.remove('nav-open');
        navOpen = false;
    }else{
        burger.classList.add('btn-active');
        navList.classList.add('nav-open');
        navOpen = true;
    }
}

burger.addEventListener('click', toggleNav);