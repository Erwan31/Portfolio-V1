"use strict";

function openLocation ( evt , place) {
    // This function triggers the description display corresponding to the tablinks button
    // inside the job+edu container as well as the css transition for both the description
    // and the buttons in size/opacity by managing the max-height of the elements

    // Declaration of all variables & DOM variables
    let i;
    const tabcontent = document.getElementsByClassName("tabcontent");
    const tablinks = document.getElementsByClassName("tablinks");
    const jobEduContainer = document.getElementsByClassName("job-edu-container");
    const jobEduTitle = document.getElementsByClassName("job-edu-title");
    // offset is the size of the the header job+edu container plus  the one of the tab links
    // it is use then to define/adapt the size of the main container
    const offSet = jobEduTitle[0].offsetHeight + tablinks[0].offsetHeight + 100;
    const descriptions = document.getElementsByClassName("description");
    const navTabContainer = document.getElementsByClassName("navtab-container");

    // Init minimum size job+edu container
    jobEduContainer[0].style.minHeight = offSet;
    jobEduContainer[0].style.maxHeight = 1200;

    // Deactivate all tab display and set max-height to a small size
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
      tabcontent[i].style.opacity = "0";
      descriptions[i].style.maxHeight = "400px";
      navTabContainer[0].style.maxHeight = "400px";
    }
    
    // Retrieve active class from all tab
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Set new characteristic of the selected tab to display it and adapt container size
    document.getElementById(place).style.maxHeight = jobEduContainer[0].style.maxHeight;
    document.getElementById(place).style.display = "block";
    document.getElementById(place).style.opacity = "1";

    // get the size of the main description container now that it is display
    const minMax = document.getElementById(place).offsetHeight;
    // adapt the size of the main container
    jobEduContainer[0].style.maxHeight = (offSet + minMax) + 'px';
    // set the max-height to trigger the css transition
    document.getElementById(place).style.maxHeight = jobEduContainer[0].style.maxHeight;

    // Set max-height of the elements to trigger the css transitions
    for (i = 0; i < tabcontent.length; i++) {
      descriptions[i].style.maxHeight = document.getElementById(place).style.maxHeight;
      navTabContainer[0].style.maxHeight = document.getElementById(place).style.maxHeight;
    }

    // Consider responsive case and moderate the size of the tablinks in function
    if( window.innerWidth > 650 ){
      for (i = 0; i < tabcontent.length; i++) {
        tablinks[i].style.minHeight = `${jobEduContainer[0].offsetHeight/4.3}px`;
      }
    }
    else{
      for (i = 0; i < tabcontent.length; i++) {
        tablinks[i].style.minHeight = `${jobEduContainer[0].offsetHeight/7}px`;
      }
    }
    
    // Add active to tablink clicked
    evt.currentTarget.className += " active";
}