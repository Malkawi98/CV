let lastScrollTop;function reveal(){let e=document.querySelectorAll(".reveal");for(let n=0;n<e.length;n++){let t=window.innerHeight;e[n].getBoundingClientRect().top<t-150?e[n].classList.add("active"):e[n].classList.remove("active")}}navbar=document.querySelector(".header-container"),window.addEventListener("scroll",(function(){let e=window.pageYOffset||document.documentElement.scrollTop;navbar.style.top=e>lastScrollTop?"-120px":"0",lastScrollTop=e})),window.addEventListener("scroll",reveal),document.addEventListener("DOMContentLoaded",(function(){let e=document.createElement("link");e.href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css",e.rel="stylesheet",document.head.appendChild(e),document.querySelector("#nav-icon3").addEventListener("click",(function(){document.querySelector("body").classList.toggle("nav-open"),document.querySelector(".nav").classList.toggle("d-none")})),document.querySelectorAll(".burger-nav").forEach((function(e){e.addEventListener("click",(function(){document.querySelector(".nav-link").classList.toggle("d-none"),document.querySelector("body").classList.toggle("nav-open")}))}))})),document.querySelectorAll(".web-nav").forEach((function(e){e.addEventListener("click",(function(){setTimeout((function(){window.scrollBy(0,1)}),900)}))})),document.querySelectorAll(".nav-link").forEach((function(e){e.addEventListener("click",(function(){document.querySelector(".nav-mobile").classList.toggle("d-none"),document.querySelector("body").classList.toggle("nav-open"),setTimeout((function(){window.scrollBy(0,1)}),900)}))}));
//# sourceMappingURL=index.b759dc8c.js.map
