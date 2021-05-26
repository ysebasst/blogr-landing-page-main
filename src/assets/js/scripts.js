const navToggle = document.querySelector(".navigation__toggle");
const navMenus = document.querySelector(".navigation__menus");
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("navigation__toggle--active");
  navMenus.classList.toggle("navigation__menus--show");
});

navMenus.addEventListener("click", (e) => {
  if (e.target.classList.contains("navigation__link")) {
    e.target.parentElement.classList.toggle("navigation__item--active");
  }
});
