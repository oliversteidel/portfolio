$(document).ready(function () {

    const threshold = 0.4;

    document.querySelectorAll('section').forEach(el => {
        let elHeight = el.getBoundingClientRect().height;
        let th = threshold;

        // if element is too tall to ever hit the threshold - change threshold

        if (elHeight > (window.innerHeight * threshold)) {
            th = ((window.innerHeight * threshold) / elHeight) * threshold;
        }

        new IntersectionObserver(iEls => iEls.forEach(iEl => {
            if (iEl.isIntersecting) {
                $('.nav__link').removeClass('nav__link--active');
                $('.nav__link--' + iEl.target.id).addClass('nav__link--active');
            }
        }), { threshold: th }).observe(el);
    })

});