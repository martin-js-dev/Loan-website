
/*---------------------- TESTIMONIALS--------------------*/

var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var lines = document.getElementsByClassName("line");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < lines.length; i++) {
      lines[i].className = lines[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  lines[slideIndex-1].className += " active";
} 


/*----------------------blog and articles---------------------*/

function mySlides() {
  var SlideOne = document.getElementById("SlideOne"); 
  var SlideTwo = document.getElementById("SlideTwo");

  SlideOne.style.display = (
      SlideOne.style.display == "none" ? "block" : "none"); 
  SlideTwo.style.display = (
      SlideTwo.style.display == "none" ? "block" : "none"); 
}


