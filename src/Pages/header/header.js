const main = document.querySelector(".main");

const header = document.querySelector(".header");
const scrolledHeader = document.querySelector(".mobile-scrolled-header");

const openedMenu = document.querySelector(".opened-menu");
openedMenu.classList.add('display-none');

const desctopBurgerBtn = document.querySelector(".header__burger");
const mobileBurgerBtn = document.querySelector(".header__mobile-burger");
const scrolledBurgerBtn = document.querySelector(".mobile-scrolled-header__mobile-burger");
const openedMenuCloseBtn = document.querySelector(".opened-menu__close-button");

const servicesSubmenu = document.querySelector(".header__services-submenu");
const servicesSubmenuBtn = document.querySelector(".nav-item__services");
servicesSubmenu.classList.add('display-none');

const navContactsBtn = document.querySelector(".nav-item__contacts");
const navPhoneBtn = document.querySelector(".nav-item__phone");

window.addEventListener("scroll", function() {
  if (window.scrollY >= 100) {
    scrolledHeader.classList.remove('scrolled-menu');
  } else {
    scrolledHeader.classList.add('scrolled-menu');
  }
}); 

window.addEventListener("scroll", function() {
  if (window.scrollY < 100) {
    scrolledHeader.classList.add('scrolled-menu');
  } else {
    scrolledHeader.classList.remove('scrolled-menu');
  }
}); 

let scrollPosition;

desctopBurgerBtn.addEventListener("click", function() {
  scrollPosition = window.scrollY;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  main.classList.add('blur');
  header.classList.add('blur');
  scrolledHeader.classList.add('blur');
  openedMenu.classList.remove('display-none');
  document.body.classList.add('no-scroll');
});

mobileBurgerBtn.addEventListener("click", function() {
  if (window.scrollY > 100) {
    scrollPosition = window.scrollY;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    main.classList.add('blur');
    header.classList.add('blur');
    scrolledHeader.classList.add('blur');
  } else {
    scrollPosition = window.scrollY;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    main.classList.add('blur');
    header.classList.add('blur');  
    scrolledHeader.classList.add('blur');  
  }
  openedMenu.classList.remove('display-none');
  document.body.classList.add('no-scroll');
});

scrolledBurgerBtn.addEventListener("click", function() {
  if (window.scrollY > 100) {
    scrollPosition = window.scrollY;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    main.classList.add('blur');
    header.classList.add('blur');
    scrolledHeader.classList.add('blur');
  } else {
    scrollPosition = window.scrollY;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    main.classList.add('blur');
    header.classList.add('blur');
    scrolledHeader.classList.add('blur');
  }
  openedMenu.classList.remove('display-none');
  document.body.classList.add('no-scroll');
});

openedMenuCloseBtn.addEventListener("click", function() {
  if (window.scrollY > 100) {
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    main.classList.remove('blur');
    header.classList.add('blur');
    scrolledHeader.classList.add('blur');
  } else {    
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    main.classList.remove('blur');
    header.classList.remove('blur');
    scrolledHeader.classList.remove('blur');
  } 
  openedMenu.classList.add('display-none');
  document.body.classList.remove('no-scroll');
});

servicesSubmenuBtn.addEventListener("click", function() {
  if (servicesSubmenu.classList.contains('display-none')) {
    servicesSubmenu.classList.remove('display-none');
  } else {    
    servicesSubmenu.classList.add('display-none');
  }
});

navContactsBtn.addEventListener("click", function() {
  if (!servicesSubmenu.classList.contains('display-none')) {
    servicesSubmenu.classList.add('display-none');
  }
});

navPhoneBtn.addEventListener("click", function() {
  if (!servicesSubmenu.classList.contains('display-none')) {
    servicesSubmenu.classList.add('display-none');
  }
});

const podpiskaPopup = document.querySelector(".podpiska-popup");
podpiskaPopup.classList.add('display-none');

const desctopPopupOpenVtnContainer = document.querySelector(".footer__contacts");
const mobilePopupOpenVtnContainer = document.querySelector(".footer__mobile-contacts");

const desctopPodpiskaPopupOpenBtn = desctopPopupOpenVtnContainer.querySelector(".footer__podpiska-button");
const mobilePodpiskaPopupOpenBtn = mobilePopupOpenVtnContainer.querySelector(".footer__podpiska-button");

const podpiskaPopupCloseBtn = document.querySelector(".podpiska-popup__close-button");

desctopPodpiskaPopupOpenBtn.addEventListener("click", function() {  
  scrollPosition = window.scrollY;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  main.classList.add('blur');
  header.classList.add('blur');
  scrolledHeader.classList.add('blur');
  
  podpiskaPopup.classList.remove('display-none');
  document.body.classList.add('no-scroll');
});

mobilePodpiskaPopupOpenBtn.addEventListener("click", function() {  
  scrollPosition = window.scrollY;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  main.classList.add('blur');
  header.classList.add('blur');
  scrolledHeader.classList.add('blur');

  podpiskaPopup.classList.remove('display-none');
  document.body.classList.add('no-scroll');
});

podpiskaPopupCloseBtn.addEventListener("click", function() {  
  window.scrollTo({ top: scrollPosition, behavior: 'smooth' });

  main.classList.remove('blur');
  header.classList.remove('blur');
  scrolledHeader.classList.remove('blur');

  podpiskaPopup.classList.add('display-none');
  document.body.classList.remove('no-scroll');
});