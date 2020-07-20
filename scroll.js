"use strict";  

let heightAbout = document.getElementById("about").offsetHeight;
let heightExp = document.getElementById("experience").offsetHeight;
let heightProjects = document.getElementById("projects").offsetHeight;
let heightContact = document.getElementById("contact").offsetHeight;

// init controller
let controller = new ScrollMagic.Controller();

//Scenes
let sceneIntro, sceneIntro1, sceneAbout;
let translateSquare, translateCircle, translateTriangle;
let navAbout, navExperience, navProjects, navContact;
  
function setScrollMagicInit(){

    // create a scene
    sceneIntro = new ScrollMagic.Scene({
        duration: 200, // the scene should last for a scroll distance of 100px
    //    offset: 100 // start this scene after scrolling for 50px
    })
        .setPin('#intro-container') // pins the element for the the scene's duration
        .addTo(controller); // assign the scene to the controller

    sceneIntro1 = new ScrollMagic.Scene({
        duration: 200, // the scene should last for a scroll distance of 100px
    })
        .setPin('.demo a') // pins the element for the the scene's duration
        .addTo(controller); // assign the scene to the controller

    sceneAbout = new ScrollMagic.Scene({
                        triggerElement: ".portrait-container",
                        triggerHook: 0.8,
                        offset: 50, // move trigger to center of element
                        /*reverse: false // only do once*/
                    })
                    .setClassToggle("#reveal2", "visible") // add class toggle
                    .addTo(controller);

    translateSquare = new ScrollMagic.Scene({
                        triggerElement: ".portrait-container",
                        triggerHook: 0.8,
                        offset: 50, // move trigger to center of element
                    })
                    .setClassToggle("#mvt0", "visible") // add class toggle
                    .addTo(controller);

    translateTriangle = new ScrollMagic.Scene({
                        triggerElement: ".portrait-container",
                        triggerHook: 0.8,
                        offset: 50, // move trigger to center of element
                    })
                    .setClassToggle("#mvt1", "visible") // add class toggle
                    .addTo(controller);

    translateCircle = new ScrollMagic.Scene({
                        triggerElement: ".portrait-container",
                        triggerHook: 0.8,
                        offset: 50, // move trigger to center of element
                    })
                    .setClassToggle("#mvt2", "visible") // add class toggle
                    .addTo(controller);

    navAbout = new ScrollMagic.Scene({
                    triggerElement: "#about",
                    duration: heightAbout, // hide 10% before exiting view (80% + 10% from bottom)
                    })
                    .setClassToggle("#aboutLink", "activeNavLink") // add class toggle
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controller);

    
    navExperience = new ScrollMagic.Scene({
                    triggerElement: "#experience",
                    duration: heightExp*0.6, // hide 10% before exiting view (80% + 10% from bottom)
                    })
                    .setClassToggle("#experienceLink", "activeNavLink") // add class toggle
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controller);


    navProjects = new ScrollMagic.Scene({
                    triggerElement: "#projects",
                    duration: heightProjects-2*heightContact, // hide 10% before exiting view (80% + 10% from bottom)
                    })
                    .setClassToggle("#projectsLink", "activeNavLink") // add class toggle
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controller);

    
    navContact = new ScrollMagic.Scene({
                    triggerElement: "#contact",
                    /* duration: heightContact,*/
                    triggerHook: 100,
                    })
                    .setClassToggle("#contactLink", "activeNavLink") // add class toggle
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controller);
                    

    // Get the element with id="defaultOpen" and click on it -> to activate default tab
    // Working in coop with experience.js
    document.getElementById("defaultOpen").click();
}

setScrollMagicInit();

/*
function setScrollMagic(){

    navExperience = ScrollMagic.Scene({
                    triggerElement: "#experience",
                    duration: heightExp, // hide 10% before exiting view (80% + 10% from bottom)
                    })
                    .setClassToggle("#experienceLink", "activeNavLink") // add class toggle
                    .addTo(controller);


    navProjects = ScrollMagic.Scene({
                    triggerElement: "#projects",
                    duration: heightProjects, // hide 10% before exiting view (80% + 10% from bottom)
                    })
                    .setClassToggle("#projectsLink", "activeNavLink") // add class toggle
                    .addTo(controller);

    
    navContact = new ScrollMagic.Scene({
                    triggerElement: "#contact",
                    triggerHook: 100,
                    })
                    .setClassToggle("#contactLink", "activeNavLink") // add class toggle
                    .addTo(controller);
}
*/

/*
window.onresize = function () {
    console.log('size document changed');
    heightAbout = document.getElementById("about").offsetHeight;
    heightExp = document.getElementById("experience").offsetHeight;
    heightProjects = document.getElementById("projects").offsetHeight;
    heightContact = document.getElementById("contact").offsetHeight;

    setScrollMagic();
}
*/
 