"use strict";


// Declaration of the DOM variables 
const navItem = document.querySelector(".nav-item");
const navLinks = document.querySelectorAll(".nav-link");
let activeLink = undefined;
/* Scroll detection for sticky navbar */
const windowH = window.innerHeight;
const windowW = window.innerWidth;

const scrollMarker = document.querySelector(".demo a");

const burger = document.querySelector('.burger');
const navLinksBurger = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const line = document.querySelector('.burger-lines');


////////////////////////////
// Responsive Burger Menu //
////////////////////////////

// Trigger burger opening and fading of the links
burger.addEventListener('click', (e) => {
    navLinksBurger.classList.toggle("open");
    burger.classList.toggle("open");
    fadeLinks();
    line.classList.toggle('active');
});

/* Selection nav link to scroll to and close the burger */
function navLink () {
    links.forEach( link => {
        link.addEventListener('click', () => {
            navLinksBurger.classList.remove("open");
            burger.classList.remove("open");
            line.classList.toggle('active');
            fadeLinks();
        });
    });
}

// Make the links fade in or away
function fadeLinks() {
    links.forEach( link => {
        link.classList.toggle("fadeLink");
    })
}

// Call the function
navLink();


// Listen to scroll for the sticky navbar
window.onscroll = function (){

    window.scrollLeft = 0;

    // See if the navbar should be sticked to top or dissapear
    scrollStickyOrHidden();
    
    // After few pixel scroll, hide scroll markers
    if( window.pageYOffset > 200){
        scrollMarker.style.display = 'none';
    }
    else scrollMarker.style.display = 'inline-block';

    /* Responsive case, make the burger menu dissapear if scrolling */
    if( document.querySelector('.open') !== null ){
        navLinksBurger.classList.remove("open");
        burger.classList.remove("open");
        line.classList.toggle('active');
        fadeLinks();
    }
}

/* Detect click on the main tag for responsive burger menu */
const main = document.querySelector('main');

main.addEventListener('click', () => {
    if( document.querySelector('.open') !== null ){
        navLinksBurger.classList.remove("open");
        burger.classList.remove("open");
        line.classList.toggle('active');
        fadeLinks();
    }
}
);

///////////////////////////
// Non-responsive Navbar //
///////////////////////////

const nav = document.querySelector("nav");
const body = document.querySelector("body");
let stickyOffset = nav.offsetTop;
let scrollTop = document.documentElement.scrollTop;
let lastScrollTop = (nav.offsetHeight*2) + 'px';

// Decide of the stickiness of the navbar based on the last scroll position
// If scroll down, no stickyness, if scroll up stickyes
function scrollStickiness() {
    if(window.pageYOffset >= stickyOffset){
        nav.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
}

// Style of the navbar depending on the scroll direction and position on the page
function scrollStickyOrHidden() {
    let scrollH = window.pageYOffset;

    // Origin padding & shadow display
    if( scrollH < 25){   //take into account responsiveness
        nav.style.marginTop = '10px';
        nav.style.boxShadow = "0px 0px 0px #003C34";
    }
    else{
        nav.style.marginTop = '0px';
        nav.style.boxShadow = "5px 5px 5px #003C34";
    }

    // Navbar fixed on top until 100px, then hidden
    if (scrollH > lastScrollTop && scrollH > 110){
       // downscroll code
       nav.classList.remove("navbar-fixed-top");
       nav.style.top = -nav.offsetHeight + 'px';      
    } else {
       // upscroll code
       nav.classList.add("navbar-fixed-top");
       nav.style.top = 0 + 'px';
    }
    lastScrollTop = scrollH <= 0 ? 0 : scrollH; // For Mobile or negative scrolling
}