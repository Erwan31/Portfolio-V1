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

navLink();


/* Scroll detection for sticky navbar */
window.onscroll = function (){
    scrollStickiness();
}

const nav = document.querySelector("nav");
let stickyOffset = nav.offsetTop;

function scrollStickiness() {
    if(window.pageYOffset >= stickyOffset){
        nav.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
}