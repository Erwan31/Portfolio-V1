const nav = document.querySelector(".nav-item");
const navLinks = document.querySelectorAll(".nav-link");
let activeLink = undefined;

function navLink () {

    navLinks.forEach( link => {


        link.addEventListener('click', () => {
            link.classList.add("active");
        });

    });
}

navLink();