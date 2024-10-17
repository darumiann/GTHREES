window.addEventListener("scroll", function() {
  const scrolledHeader = document.querySelector(".mobile-scrolled-header");

  // Проверка на существование элемента
  if (!scrolledHeader) {
    console.warn("Element with class 'mobile-scrolled-header' not found.");
    return;
  }

  if (window.scrollY > 100) {
    scrolledHeader.style.zIndex = 9999;
    scrolledHeader.style.opacity = 1;
  } else {
    scrolledHeader.style.zIndex = 1;
    scrolledHeader.style.opacity = 0;
  }
});

const header = document.querySelector(".header");
const scrolledHeader = document.querySelector(".mobile-scrolled-header");

const openedMenu = document.querySelector(".opened-menu");
openedMenu.style.display = "none";

const desctopBurgerBtn = document.querySelector(".header__burger");
const mobileBurgerBtn = document.querySelector(".header__mobile-burger");
const scrolledBurgerBtn = document.querySelector(".mobile-scrolled-header__mobile-burger");

const openedMenuCloseBtn = document.querySelector(".opened-menu__close-button");

desctopBurgerBtn.addEventListener("click", function() {
  openedMenu.style.display = "block";
});

mobileBurgerBtn.addEventListener("click", function() {
  openedMenu.style.display = "block";
});

scrolledBurgerBtn.addEventListener("click", function() {
  openedMenu.style.display = "block";
});

openedMenuCloseBtn.addEventListener("click", function() {
  openedMenu.style.display = "none";
});