//first-name & last-name slide-in animation
//subtitle fade-in animation
gsap.from(".first-name", {duration: 1, x: 200, opacity: 0, ease: "power3.out", delay: 0.75});
gsap.from(".last-name", {duration: 1, x: -100, opacity: 0, ease: "power3.out", delay: 0.5});
gsap.to(".overlay", {duration: 1, scaleX: 0, delay: 2 });


// ##################################

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


// ##################################

// highlighting nav__links animation on desktop by click
const links = [...document.getElementsByClassName('nav__link')];

links.forEach(link => {
    link.addEventListener('click', function (evt) {
        removeActiveClass();
        const border = evt.target.nextSibling;
        gsap.to(border, { opacity: 1 });
        gsap.to(border, { y: -35, duration: 0.3 });
        gsap.to(border, { opacity: 0, y: 0, delay: 0.5 });
        evt.target.classList.add('nav__link--active');
        closeNav();
    })
});

const removeActiveClass = () => {
    links.forEach(link => {
        link.classList.remove('nav__link--active');
    })
}


// ###################################


