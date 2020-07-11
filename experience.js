function openLocation ( evt , place) {

    let i;
    const tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(place).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
