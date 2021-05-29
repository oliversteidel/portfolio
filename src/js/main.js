//first-name & last-name slide-in animation
//subtitle fade-in animation
gsap.from(".first-name", { duration: 1, x: 200, opacity: 0, ease: "power3.out", delay: 0.75 });
gsap.from(".last-name", { duration: 1, x: -100, opacity: 0, ease: "power3.out", delay: 0.5 });
gsap.to(".overlay", { duration: 1, scaleX: 0, delay: 2 });


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



const moveTechItems = () => {
    let move = gsap.timeline({repeat: 5, delay: 0.5 });
    let move1 = gsap.timeline({repeat: 5, delay: 1 });
    let move2= gsap.timeline({repeat: 5, delay: 1.5 });
    let move3 = gsap.timeline({repeat: 5, delay: 2 });
    let move4 = gsap.timeline({repeat: 5, delay: 2.5 });
    let move5 = gsap.timeline({repeat: 5, delay: 3 });
    
    moveItem(move, ".tech1");
    moveItem(move1, ".tech2");
    moveItem(move2, ".tech3");
    moveItem(move3, ".tech4");
    moveItem(move4, ".tech5");
    moveItem(move5, ".tech6");
}

const moveItem = (timeline, element) => {
    timeline.to(element, {duration: 2, opacity: 1});
    let [posX, posY] = setRandomCoordinates(0, 500);    
    timeline.to(element, {duration: 10, x: posX, y: posY});
    [posX, posY] = setRandomCoordinates(-300, 0);
    timeline.to(element, {duration: 10, x: posX, y: posY});
    timeline.to(element, {duration: 10, x: 0, y: 0});
    timeline.to(element, {duration: 1, opacity: 0});
}

// returns a random number between min & max
const setRandomCoordinates = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    let posX = Math.floor(Math.random() * (max - min)) + min;
    let posY = Math.floor(Math.random() * (max - min)) + min;
    console.log(`x:${posX}, y:${posY}`);
    return [posX, posY];

}

moveTechItems();
