let lastScrollTop; // This Varibale will store the top position

navbar = document.querySelector(".header-container"); // Get The NavBar

window.addEventListener('scroll', function () {
  //on every scroll this funtion will be called

  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //This line will get the location on scroll

  if (scrollTop > lastScrollTop) { //if it will be greater than the previous
    navbar.style.top = '-120px';
    //set the value to the negetive of height of navbar
  } else {
    navbar.style.top = '0';
  }

  lastScrollTop = scrollTop; //New Position Stored
});

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("#nav-icon3").addEventListener("click", function () {
    document.querySelector('body').classList.toggle("nav-open");
    document.querySelector('.nav').classList.toggle("d-none");
  });

  let navItems = document.querySelectorAll(".burger-nav")
  navItems.forEach(function (item) {
    item.addEventListener("click", function () {
      document.querySelector('.nav-link').classList.toggle("d-none");
      document.querySelector('body').classList.toggle("nav-open");
    });
  });
});

document.querySelectorAll(".web-nav").forEach(function (item) {
  item.addEventListener("click", function () {
    setTimeout(function(){
      window.scrollBy(0, 1)
    },400)
  });
});