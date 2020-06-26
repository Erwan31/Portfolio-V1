const nav = document.querySelector(".nav-links");
const navLinks = document.querySelector(".nav-links li");

navLinks.classList.toggle = 
navLinks.forEach( link => {
    link.classList.toggle("actdhsj");
    console.log("click");
    link.addEventListener('click', () => {
        link.classList.toggle(".active");
    });
})