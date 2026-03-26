let slides = document.querySelectorAll(".slide");
let index = 0;

function autoSlide() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

setInterval(autoSlide, 4000);

/* フェード */
const fade = document.querySelectorAll(".fade");

function fadeIn() {
  fade.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (pos < screen - 100) {
      el.classList.add("show");
    }
  });
}

/*window.addEventListener("scroll", fadeIn);
window.addEventListener("load", fadeIn);
window.addEventListener("scroll", function(){
  const header = document.querySelector("header");

  if(window.scrollY > 50){
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  nav.classList.toggle("active");
});:*/
window.addEventListener("load", function () {

  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");

  if (!menuBtn || !nav) return;

  menuBtn.addEventListener("click", function () {
    nav.classList.toggle("active");
  });

});