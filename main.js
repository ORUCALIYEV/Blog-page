const menu = document.querySelector(".menu");
let menuOpen = false;
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  if (!menuOpen) {
    menu.classList.add("open");
    navbar.classList.add("openednavbar");
    menuOpen = true;
  } else {
    menu.classList.remove("open");
    navbar.classList.remove("openednavbar");
    menuOpen = false;
  }
});
