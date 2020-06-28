const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

function navLink () {
    navLinks.forEach( link => {
        link.classList.toggle("actdhsj");
        console.log("click");
        link.addEventListener('click', () => {
            link.classList.toggle(".active");
        });
    });
}

navLink();