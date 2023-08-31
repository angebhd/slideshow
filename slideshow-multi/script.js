/// 3 TYPES OF SLIDES : AUTO, BUTTON and DOT
let slideIndex = 1;
showSlides(slideIndex); // call of fonction
autoSlide();
function autoSlide(){ // function for auto slide after 5secondes, its call the function which change the image to see
    slideIndex++;
    showSlides(slideIndex)
    setTimeout(autoSlide, 2000)
}
function plusSlides(n) { //function to slide to the next (previous) image, the value of n is 1 (or -1), I change the slide index, then a call showslides to change image
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("item");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "block";  
  }
  slides[slideIndex-1].style.display = "none";  
  switch (slideIndex-1) { //switch condtion for changing flex order of slides items
    case 0:// if the first element is hiden
      slides[0].className='item el5';
      slides[1].className='item el1';
      slides[2].className='item el2';
      slides[3].className='item el3';
      slides[4].className='item el4';
      break;
    case 1:// if the second element is hiden
      slides[1].className='item el5';
      slides[2].className='item el1';
      slides[3].className='item el2';
      slides[4].className='item el3';
      slides[0].className='item el4';
      break;
    case 2:// if the third element is hiden
      slides[2].className='item el5';
      slides[3].className='item el1';
      slides[4].className='item el2';
      slides[0].className='item el3';
      slides[1].className='item el4';
      break;
    case 3:// if the fourth element is hiden
      slides[3].className='item el5';
      slides[4].className='item el1';
      slides[0].className='item el2';
      slides[1].className='item el3';
      slides[2].className='item el4';
      break;
    case 4:// if the fifth element is hiden
      slides[4].className='item el5';
      slides[0].className='item el1';
      slides[1].className='item el2';
      slides[2].className='item el3';
      slides[3].className='item el4';
      break;  
    default:
      break;
  }
}