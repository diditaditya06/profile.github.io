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


function nama() {
  var x = document.getElementById("hasil-nama");
  var y = document.getElementById("bungkus-nama");
  var z = document.getElementById("icon-nama");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.height ="85px";
    z.src = "./asset/k.png";
  } else {
    x.style.display = "none";
    y.style.height ="50px";
    z.src = "./asset/v.png";
  }
}

function education() {
  var x = document.getElementById("hasil-education");
  var y = document.getElementById("bungkus-education");
  var z = document.getElementById("icon-education");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.height ="250px";
    y.style.backgroundColor= "#989978";
    z.src = "./asset/k.png";
    
  } else {
    x.style.display = "none";
    y.style.height ="50px";
    y.style.backgroundColor= "#ecf00e";
    z.src = "./asset/v.png";
    
  }
}

const count = document.getElementById("count");
totalupdate();
function totalupdate(){
  fetch("https://api.countapi.xyz/hit/beli/?amount=0")
  .then((res)=>res.json())
  .then((res)=>{count.innerHTML=res.value;
  val(count,0,res.value,1000);
  });
} 

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



