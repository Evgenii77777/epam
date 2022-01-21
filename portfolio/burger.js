const burgerButton = document.querySelector(".burger");
const burgerNav = document.querySelector(".nav");
const body = document.querySelector("body");

function toggleMenu() {
  burgerButton.classList.toggle("active");
  burgerNav.classList.toggle("active");
  body.classList.toggle("lock");
}
function closeMenu(e) {
  if (e.target.classList.contains("nav__listLink")) {
    burgerButton.classList.remove("active");
    burgerNav.classList.remove("active");
    body.classList.remove("lock");
  }
}

burgerButton.addEventListener("click", toggleMenu);
burgerNav.addEventListener("click", closeMenu);
