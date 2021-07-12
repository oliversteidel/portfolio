// show nav by clicking burger-btn on mobile devices
const burger = document.getElementById('burger');
const navList = document.getElementById('nav-list');
let navOpen = false;


const toggleNav = () => {
    navOpen ? closeNav() : openNav()
}

const closeNav = () => {
    burger.classList.remove('btn-active');
    navList.classList.remove('nav-open');
    navOpen = false;
}

const openNav = () => {
    burger.classList.add('btn-active');
    navList.classList.add('nav-open');
    fadeIn();
    navOpen = true;
}
// animates nav__links sliding and fading in
const fadeIn = () => {
    gsap.from(".list-item", { duration: 0.5, x: 50, opacity: 0.1, delay: 0.3, ease: "power3.out", stagger: 0.15 });
}

burger.addEventListener('click', toggleNav);