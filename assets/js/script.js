let header = document.querySelector(".header");
let navbar = document.querySelector(".navbar");
let showMenu = document.querySelector(".menu");
window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

showMenu.addEventListener("click", () => {
  navbar.classList.toggle("active");
  let icon = showMenu.firstElementChild;
  icon.classList.toggle("fa-bars-staggered");
});
