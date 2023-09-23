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