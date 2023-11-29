// JavaScript Document

const hamburgerButton = document.getElementById('hamburger')
const hamburgerCloseButton = document.getElementById('hamburger-cancel')
const navList = document.getElementById('nav-list')

function toggleButton()
{
	navList.style.display = "block";
}

function closeHamburgerMenu()
{
	navList.style.display = "none";
}

hamburgerButton.addEventListener('click', toggleButton) 
hamburgerCloseButton.addEventListener('click', closeHamburgerMenu) 

let slideIndex = [1,1];
/* Class the members of each slideshow group with different CSS classes */
let slideId = ["mySlides1", "mySlides2"]
let slideDotsId = ["dots1", "dots2"]
currentSlide(1, 0);
currentSlide(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  var dots = document.getElementById(slideDotsId[no]).children;
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
	
	for(i = 0; i < dots.length; i++) 
	{
    	dots[i] = dots[i].style.backgroundColor = "#999999";
    }

  x[slideIndex[no]-1].style.display = "block";  
  dots[slideIndex[no]-1].style.backgroundColor = "#111111";
}