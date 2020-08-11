/*let width = window.innerWidth;

window.addEventListener('resize', function () {
  if (window.innerWidth !== width) {
      
  }
});*/


function openLocation ( evt , place) {

    let i;
    const tabcontent = document.getElementsByClassName("tabcontent");
    const tablinks = document.getElementsByClassName("tablinks");
    const jobEduContainer = document.getElementsByClassName("job-edu-container");
    const jobEduTitle = document.getElementsByClassName("job-edu-title");
    const offSet = jobEduTitle[0].offsetHeight + tablinks[0].offsetHeight + 100;
    const descriptions = document.getElementsByClassName("description");
    const navTabContainer = document.getElementsByClassName("navtab-container");

    jobEduContainer[0].style.minHeight = offSet;
    jobEduContainer[0].style.maxHeight = 1200;

    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
      tabcontent[i].style.opacity = "0";
      descriptions[i].style.maxHeight = "400px";
      navTabContainer[0].style.maxHeight = "400px";
    }
    
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
      //tablinks[i].style.height = "140px";
    }

    document.getElementById(place).style.maxHeight = jobEduContainer[0].style.maxHeight;
    document.getElementById(place).style.display = "block";
    document.getElementById(place).style.opacity = "1";
    const minMax = document.getElementById(place).offsetHeight;
    jobEduContainer[0].style.maxHeight = (offSet + minMax) + 'px';
    document.getElementById(place).style.maxHeight = jobEduContainer[0].style.maxHeight;

    
    for (i = 0; i < tabcontent.length; i++) {
      descriptions[i].style.maxHeight = document.getElementById(place).style.maxHeight;
      navTabContainer[0].style.maxHeight = document.getElementById(place).style.maxHeight;
    }

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
    

    evt.currentTarget.className += " active";
}

/* 
"use strict";

const tabctt = document.getElementsByClassName("tabcontent");
const tabLinks = document.querySelectorAll('.tablinks');


function tabLinksClickListener(){
  tabLinks.forEach( link => {
    link.addEventlistener('click', (event) => {
      openLocation ( event , event.target.value);
      console.log('click sa race');
      console.log(event.target.value);
    });
  });
  
}

tabLinksClickListener();



function openLocation ( evt , place) {

   // console.log( evt );
    console.log("click on ", place);
    console.log("tabcontent lenght: ", tabctt.length);
    let i;

    for (i = 0; i < tabctt.length; i++) {
      tabctt[i].style.display = "none";
    }
    
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    document.getElementById(place).style.display = "block";
    evt.currentTarget.className += " active";
}

*/