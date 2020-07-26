export function jobEduTab () {
  
  const tab = document.getElementsByClassName('tab');

  tab[0].addEventListener( 'click', (event) => {

    let place = event.target.value;

  /*  console.log( event );
    console.log("click on ", place);*/

    let i;
    const tabcontent = document.getElementsByClassName("tabcontent");
    const tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(place).style.display = "block";
    event.currentTarget.className += " active";

  });
}



/*
function openLocation ( evt , place) {

    console.log( evt );
    console.log("click on ", place);
    let i;
    const tabcontent = document.getElementsByClassName("tabcontent");
    const tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(place).style.display = "block";
    evt.currentTarget.className += " active";
}
*/
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