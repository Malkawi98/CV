let lastScrollTop;

navbar = document.querySelector(".header-container"); // Get The NavBar

window.addEventListener('scroll', function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = '-120px';
  } else {
    navbar.style.top = '0';
  }

  lastScrollTop = scrollTop;
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

document.addEventListener("DOMContentLoaded", function () {
  let link = document.createElement('link');
  link.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css';
  link.rel = 'stylesheet';
  document.head.appendChild(link);

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
    },900)
  });
});

document.querySelectorAll(".nav-link").forEach(function (item) {
  item.addEventListener("click", function () {
    document.querySelector('.nav-mobile').classList.toggle("d-none");
    document.querySelector('body').classList.toggle("nav-open");
    setTimeout(function(){
      window.scrollBy(0, 1)
    },900)
  });
});


