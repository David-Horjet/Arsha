// Navbar hamburger script

const openNav = document.querySelector('.first');
const closeNav = document.querySelector('.second');
const navbar = document.querySelector('.navres');
const navlink = document.querySelector('.navlink');
const navabo = document.querySelector('.navab');
const navser = document.querySelector('.navser');
const navport = document.querySelector('.navpor');
const navteam = document.querySelector('.navteam');
const navcon = document.querySelector('.navcon');

openNav.addEventListener('click', show);
closeNav.addEventListener('click', comot);
navlink.addEventListener('click', shift);
navabo.addEventListener('click', navab);
navser.addEventListener('click', navserv);
navport.addEventListener('click', navpor);
navteam.addEventListener('click', navteamer);
navcon.addEventListener('click', navcont);

function show() {
     navbar.style.display = 'block';
     openNav.style.display = 'none';
     closeNav.style.display = 'block';
}

function comot() {
     navbar.style.display = 'none';
     openNav.style.display = 'block';
     closeNav.style.display = 'none';
}

function shift() {
     navbar.style.display = 'none';
     openNav.style.display = 'block';
     closeNav.style.display = 'none';
}

function navab() {
     navbar.style.display = 'none';
     openNav.style.display = 'block';
     closeNav.style.display = 'none';
}

function navserv() {
     navbar.style.display = 'none';
     openNav.style.display = 'block';
     closeNav.style.display = 'none';
}

function navpor() {
     navbar.style.display = 'none';
     openNav.style.display = 'block';
     closeNav.style.display = 'none';
}

function navteamer() {
     navbar.style.display = 'none';
     openNav.style.display = 'block';
     closeNav.style.display = 'none';
}

function navcont() {
     navbar.style.display = 'none';
     openNav.style.display = 'block';
     closeNav.style.display = 'none';
}

function sender() {
     senden.style.display = 'block'
}

function senden() {
     sender.style.display = 'block'
}
// Accordion Script

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
     acc[i].addEventListener("click", function () {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
               panel.style.maxHeight = null;
          } else {
               panel.style.maxHeight = panel.scrollHeight + "px";
          }
     });
}


// Preloader Script

const loader = document.getElementById('preloader');

window.addEventListener('load', load);

function load() {
     loader.remove()
}

