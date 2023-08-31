/// 3 TYPES OF SLIDES : AUTO, BUTTON and DOT
let slideIndex = 1;
showSlides(slideIndex); // call of fonction
autoSlide();
function autoSlide(){ // function for auto slide after 5secondes, its call the function which change the image to see
    slideIndex++;
    showSlides(slideIndex)
    setTimeout(autoSlide, 5000)
}
function plusSlides(n) { //function to slide to the next (previous) image, the value of n is 1 (or -1), I change the slide index, then a call showslides to change image
  showSlides(slideIndex += n);
}

function currentSlide(n) { //Dot slide by clicking on button
  showSlides(slideIndex = n); 
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("item");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active"; //for highliting the current dot
}