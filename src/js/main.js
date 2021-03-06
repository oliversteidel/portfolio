//first-name & last-name slide-in animation
//subtitle fade-in animation
gsap.to(".first-name", { duration: 1, x: 0, opacity: 1, ease: "power3.out", delay: 0.75 });
gsap.to(".last-name", { duration: 1, x: 0, opacity: 1, ease: "power3.out", delay: 0.5 });
gsap.to(".overlay", { duration: 1, scaleX: 0, delay: 2, onComplete: showScrollIcon });

function showScrollIcon() {
    const scollIcon = document.querySelectorAll('.scroll-icon');    
    scollIcon.forEach(el => {
        el.style.opacity = "1";        
    })
}


// ##################################

// highlighting nav__links animation on desktop by click
const links = [...document.getElementsByClassName('nav__link')];

links.forEach(link => {
    link.addEventListener('click', function (evt) {
        removeActiveClass();
        animateNavLinks(evt);        
        closeNav();
    })
});

const removeActiveClass = () => {
    links.forEach(link => {
        link.classList.remove('nav__link--active');
    })
}

const animateNavLinks = (event) => {    
    const border = event.target.nextSibling;
        gsap.to(border, { opacity: 0.75 });
        gsap.to(border, { y: -35, duration: 0.3 });
        gsap.to(border, { opacity: 0, y: 0, delay: 0.5 });
        event.target.classList.add('nav__link--active');
}




// ###################################

// init gsap.timelines for each "tech"-element and run these timelines with moveItem()
const moveTechItems = () => {
    let tech1 = gsap.timeline({ repeat: 5, delay: 2 });
    let tech2 = gsap.timeline({ repeat: 5, delay: 4 });
    let tech3 = gsap.timeline({ repeat: 5, delay: 6 });
    let tech4 = gsap.timeline({ repeat: 5, delay: 8 });
    let tech5 = gsap.timeline({ repeat: 5, delay: 10 });
    let tech6 = gsap.timeline({ repeat: 5, delay: 12 });

    moveItem(tech1, ".tech1");
    moveItem(tech2, ".tech2");
    moveItem(tech3, ".tech3");
    moveItem(tech4, ".tech4");
    moveItem(tech5, ".tech5");
    moveItem(tech6, ".tech6");

    const techItems = [...document.getElementsByClassName('tech')];

    techItems.forEach(item => {
        item.addEventListener('mouseover', function (e) {

            switch (getTimelineFromClassName(e.target.className)) {
                case 'tech1':
                    tech1.pause();
                    break;
                case 'tech2':
                    tech2.pause();
                    break;
                case 'tech3':
                    tech3.pause();
                    break;
                case 'tech4':
                    tech4.pause();
                    break;
                case 'tech5':
                    tech5.pause();
                    break;
                case 'tech6':
                    tech6.pause();
                    break;
            }
        })

        item.addEventListener('mouseout', function (e) {

            switch (getTimelineFromClassName(e.target.className)) {
                case 'tech1':
                    tech1.resume();
                    break;
                case 'tech2':
                    tech2.resume();
                    break;
                case 'tech3':
                    tech3.resume();
                    break;
                case 'tech4':
                    tech4.resume();
                    break;
                case 'tech5':
                    tech5.resume();
                    break;
                case 'tech6':
                    tech6.resume();
                    break;

            }
        })
    })
}

// configs timeline(arg1) animation for element(arg2); creates random coordinates 2 times
const moveItem = (timeline, element) => {
    timeline.to(element, { duration: 2, opacity: 0.2 });
    let [posX, posY] = setRandomCoordinates(-250, 250);
    timeline.to(element, { duration: 10, x: posX, y: posY });
    [posX, posY] = setRandomCoordinates(-300, 0);
    timeline.to(element, { duration: 10, x: posX, y: posY });
    timeline.to(element, { duration: 10, x: 0, y: 0 });
    timeline.to(element, { duration: 1, opacity: 0 });
}

// returns a random number between min & max
const setRandomCoordinates = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    let posX = Math.floor(Math.random() * (max - min)) + min;
    let posY = Math.floor(Math.random() * (max - min)) + min;
    return [posX, posY];
}

const getTimelineFromClassName = (str) => {
    let timeline = str.substring(5, 10);
    return timeline;
}

moveTechItems();



// ###################################

// card link hover animation

const btn = document.querySelectorAll(".card__link");

btn.forEach(btn => {
    let border = btn.previousElementSibling;
    let btnWidth = btn.offsetWidth;
    let btnHeight = btn.offsetHeight;

    let tlExp = gsap.timeline({ paused: true });

    tlExp.to(border, { rotation: 0, duration: 0.1 });
    tlExp.to(border, { height: btnHeight, y: -16, duration: 0.2 }, "+=0.1");
    tlExp.to(border, { width: btnWidth, duration: 0.2 }, "+=0.2");

    btn.addEventListener('mouseenter', () => {
        tlExp.play();
    });

    btn.addEventListener('mouseout', () => {
        tlExp.pause();
        tlExp.reverse();
    });

    btn.addEventListener('focus', () => {
        tlExp.play();
        border.style.borderColor = 'hsl(206, 100%, 26%)';
        border.style.borderRadius = '5px';
    });

    btn.addEventListener('focusout', () => {
        tlExp.pause();
        tlExp.reverse();
        border.style.borderColor = 'hsl(199, 100%, 95%)';
        border.style.borderRadius = '0';
    });
})


// ###################################

// honeycomb hover animation


const polygons = document.querySelectorAll(".tech-wrapper");
const techContainer = document.querySelector(".container--tech");


polygons.forEach(polygon => {
    polygon.addEventListener('mouseover', function () {
        if(document.body.clientWidth > 1000) {
            techContainer.classList.add("fz-large");
        }        
    })

    polygon.addEventListener('mouseleave', function () {
        if(document.body.clientWidth > 1000) {
            techContainer.classList.remove("fz-large");
        }
    })
})









