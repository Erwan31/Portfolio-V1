"use strict";

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
const line = document.querySelector('.line');
const nav = document.querySelector("nav");
const body = document.querySelector("body");
let stickyOffset = nav.offsetTop;
let scrollTop = document.documentElement.scrollTop;
let lastScrollTop = (nav.offsetHeight*2) + 'px';

/* Detect click on the main tag for responsive burger menu */
const main = document.querySelector('main');

burger.addEventListener('click', (e) => {
    navLinksBurger.classList.toggle("open");
    burger.classList.toggle("open");
    links.forEach( link => {
        if( e.target === link){
            console.log('click on target');
        }
      //  link.classList.add("fade");
    });
    fadeLinks();
    line.classList.toggle('active');

    console.log('click');
});

/* Selection nav link active state */

function navLink () {
    links.forEach( link => {
        link.addEventListener('click', () => {
            /*link.classList.add("active");*/
            console.log('click link');
            navLinksBurger.classList.remove("open");
            burger.classList.remove("open");
            line.classList.toggle('active');
            fadeLinks();
        });
    });
}

function fadeLinks() {
    links.forEach( link => {
        link.classList.toggle("fadeLink");
    })
}

navLink();

window.onscroll = function (){

    window.scrollLeft = 0;

    //scrollStickiness();
    scrollStickyOrHidden();
    
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
        // console.log('click on main');
    }
}



function scrollStickiness() {
    if(window.pageYOffset >= stickyOffset){
        nav.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
}

function scrollStickyOrHidden() {
    /*if( scrollTop) {
        nav.classList.add("fixed-top");
        body.style.paddingTop = nav.offsetHeight + 'px';
        console.log('innerH: ', nav.offsetHeight);
    }
    else{
        nav.classList.remove("fixed-top");
        body.style.paddingTop = 0;
    }*/

    let scrollH = window.pageYOffset;
    //console.log(scrollH);

    // Origin padding
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



main.addEventListener('click', () => {
    if( document.querySelector('.open') !== null ){
        navLinksBurger.classList.remove("open");
        burger.classList.remove("open");
        line.classList.toggle('active');
        fadeLinks();
        // console.log('click on main');
    }
}
);