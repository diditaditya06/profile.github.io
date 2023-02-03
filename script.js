'use strict';


// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#list-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#list-menu');

document.addEventListener('click', function (e) {
if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
  navbarNav.classList.remove('active');
}
});

const body = document.getElementById("body"); //id pada isi-data
const input = document.getElementById("input");//id pada inputan
const section = document.getElementById("section");
function tekanbtn(){
  body.style.backgroundColor = input.value //merubah warna 
  section.style.backgroundColor = input.value 
};
