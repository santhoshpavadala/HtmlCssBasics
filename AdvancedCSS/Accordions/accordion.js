// EX-1
const accordion = document.getElementsByClassName('contentBx');
        for ( i = 0; i<accordion.length; i++ ){
            accordion[i].addEventListener('click', function() {
            this.classList.toggle('active')
            })
        }


// EX-2
var acc = document.getElementsByClassName("accordionw3");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// EX-3
var accord = document.getElementsByClassName("accordionBtn");
var i;

for(i=0; i<accord.length; i++) {
  accord[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var accordionBody = this.nextElementSibling;
    if (accordionBody.style.display === "block") {
      accordionBody.style.display = "none";
    }
    else {
      accordionBody.style.display = "block";
    }
  });
}

// EX-4 AccordionIcon
var iconArr = document.getElementsByClassName("accordionIconBtn");
var i;
for(i=0; i<iconArr.length; i++) {
  iconArr[i].addEventListener("click", function(){
    this.classList.toggle("active");

    var accordionIconBody = this.nextElementSibling;
    if(accordionIconBody.style.maxHeight) {
      accordionIconBody.style.maxHeight = null;
    }
    else {
      accordionIconBody.style.maxHeight = accordionIconBody.scrollHeight + "px";
    }
  });
}