let header = document.querySelector(".header");
let navbar = document.querySelector(".navbar");
let showMenu = document.querySelector(".menu");
let backToTop = document.querySelector(".back-to-top");
let navListItem = document.querySelectorAll(".nav-list li");

backToTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.add("active");
    backToTop.style.bottom = "20px";
  } else {
    header.classList.remove("active");
    backToTop.style.bottom = "-100px";
  }
});

showMenu.addEventListener("click", () => {
  navbar.classList.toggle("active");
  //  Change icon style
  let icon = showMenu.firstElementChild;
  icon.classList.toggle("fa-bars-staggered");

  navListItem.forEach((element) => {
    element.addEventListener("click", () => {
      navbar.classList.remove("active");
      icon.classList.remove("fa-bars-staggered");
    });
  });
});
