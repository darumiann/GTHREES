const block8 = document.querySelector(".block8");

const faq1 = block8.querySelector(".block8__faq1");
const faq2 = block8.querySelector(".block8__faq2");
const faq3 = block8.querySelector(".block8__faq3");
const faq4 = block8.querySelector(".block8__faq4");

const faq1Arrow = faq1.querySelector(".block8__faq-arrow");
const faq2Arrow = faq2.querySelector(".block8__faq-arrow");
const faq3Arrow = faq3.querySelector(".block8__faq-arrow");
const faq4Arrow = faq4.querySelector(".block8__faq-arrow");

const faq1ArrowActive = faq1.querySelector(".block8__faq-arrow_active");
const faq2ArrowActive = faq2.querySelector(".block8__faq-arrow_active");
const faq3ArrowActive = faq3.querySelector(".block8__faq-arrow_active");
const faq4ArrowActive = faq4.querySelector(".block8__faq-arrow_active");

const otvet1 = block8.querySelector(".block8__faq-otvet1");
const otvet2 = block8.querySelector(".block8__faq-otvet2");
const otvet3 = block8.querySelector(".block8__faq-otvet3");
const otvet4 = block8.querySelector(".block8__faq-otvet4");

document.addEventListener('DOMContentLoaded', function() {
  otvet1.classList.remove("block8__display-none");
  otvet2.classList.add("block8__display-none");
  otvet3.classList.add("block8__display-none");
  otvet4.classList.add("block8__display-none");
  
  faq1Arrow.classList.add("block8__display-none");
  faq2Arrow.classList.remove("block8__display-none");    
  faq3Arrow.classList.remove("block8__display-none");    
  faq4Arrow.classList.remove("block8__display-none");    

  faq1ArrowActive.classList.remove("block8__display-none");
  faq2ArrowActive.classList.add("block8__display-none");
  faq3ArrowActive.classList.add("block8__display-none");
  faq4ArrowActive.classList.add("block8__display-none");
});

faq1.addEventListener("click", function() {
  otvet1.classList.remove("block8__display-none");
  otvet2.classList.add("block8__display-none");
  otvet3.classList.add("block8__display-none");
  otvet4.classList.add("block8__display-none");
  
  faq1Arrow.classList.add("block8__display-none");
  faq2Arrow.classList.remove("block8__display-none");    
  faq3Arrow.classList.remove("block8__display-none");    
  faq4Arrow.classList.remove("block8__display-none");    

  faq1ArrowActive.classList.remove("block8__display-none");
  faq2ArrowActive.classList.add("block8__display-none");
  faq3ArrowActive.classList.add("block8__display-none");
  faq4ArrowActive.classList.add("block8__display-none");
});

faq2.addEventListener("click", function() {
  otvet1.classList.add("block8__display-none");
  otvet2.classList.remove("block8__display-none");
  otvet3.classList.add("block8__display-none");
  otvet4.classList.add("block8__display-none");
  
  faq1Arrow.classList.remove("block8__display-none");
  faq2Arrow.classList.add("block8__display-none");    
  faq3Arrow.classList.remove("block8__display-none");    
  faq4Arrow.classList.remove("block8__display-none");    

  faq1ArrowActive.classList.add("block8__display-none");
  faq2ArrowActive.classList.remove("block8__display-none");
  faq3ArrowActive.classList.add("block8__display-none");
  faq4ArrowActive.classList.add("block8__display-none");
});

faq3.addEventListener("click", function() {
  otvet1.classList.add("block8__display-none");
  otvet2.classList.add("block8__display-none");
  otvet3.classList.remove("block8__display-none");
  otvet4.classList.add("block8__display-none");
  
  faq1Arrow.classList.remove("block8__display-none");
  faq2Arrow.classList.remove("block8__display-none");    
  faq3Arrow.classList.add("block8__display-none");    
  faq4Arrow.classList.remove("block8__display-none");    

  faq1ArrowActive.classList.add("block8__display-none");
  faq2ArrowActive.classList.add("block8__display-none");
  faq3ArrowActive.classList.remove("block8__display-none");
  faq4ArrowActive.classList.add("block8__display-none");
});

faq4.addEventListener("click", function() {
  otvet1.classList.add("block8__display-none");
  otvet2.classList.add("block8__display-none");
  otvet3.classList.add("block8__display-none");
  otvet4.classList.remove("block8__display-none");
    
  faq1Arrow.classList.remove("block8__display-none");
  faq2Arrow.classList.remove("block8__display-none");    
  faq3Arrow.classList.remove("block8__display-none");    
  faq4Arrow.classList.add("block8__display-none");    
  
  faq1ArrowActive.classList.add("block8__display-none");
  faq2ArrowActive.classList.add("block8__display-none");
  faq3ArrowActive.classList.add("block8__display-none");
  faq4ArrowActive.classList.remove("block8__display-none");
});