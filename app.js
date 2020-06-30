const navItem = document.querySelector(".nav-item");
const navLinks = document.querySelectorAll(".nav-link");
let activeLink = undefined;

/* Selection nav link active state */
function navLink () {
    navLinks.forEach( link => {
        link.addEventListener('click', () => {
            link.classList.add("active");
        });
    });
}

//navLink();


/* Scroll detection for sticky navbar */
const windowH = window.innerHeight;

window.onscroll = function (){
    //scrollStickiness();
    scrollStickyOrHidden();
}

const nav = document.querySelector("nav");
const body = document.querySelector("body");
let stickyOffset = nav.offsetTop;
let scrollTop = document.documentElement.scrollTop;
let lastScrollTop = (nav.offsetHeight*2) + 'px';

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
    console.log(scrollH);

    // Origin padding
    if( scrollH < 50){
        nav.style.marginTop = '10px';
        nav.style.boxShadow = "5px 5px 5px #003C34";
    }
    else{
        nav.style.marginTop = '0px';
        nav.style.boxShadow = "0px 0px 0px #003C34";
    }

    // Navbar fixed on top until 100px, then hidden
    if (scrollH > lastScrollTop && scrollH > 150){
       // downscroll code
       nav.classList.remove("navbar-fixed-top");
       nav.style.top = -nav.offsetHeight + 'px';
       nav.style.boxShadow = "0px 0px 0px #003C34";
    } else {
       // upscroll code
       nav.classList.add("navbar-fixed-top");
       nav.style.top = 0 + 'px';
       nav.style.boxShadow = "5px 5px 5px #003C34";
    }
    lastScrollTop = scrollH <= 0 ? 0 : scrollH; // For Mobile or negative scrolling
}