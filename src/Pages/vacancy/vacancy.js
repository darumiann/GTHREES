const block2 = document.querySelector(".block2");

const vacancy1 = block2.querySelector(".block2__vacancy1");
const vacancy2 = block2.querySelector(".block2__vacancy2");
const vacancy3 = block2.querySelector(".block2__vacancy3");
const vacancy4 = block2.querySelector(".block2__vacancy4");

const vacancy1Arrow = vacancy1.querySelector(".block2__vacancy-arrow");
const vacancy2Arrow = vacancy2.querySelector(".block2__vacancy-arrow");
const vacancy3Arrow = vacancy3.querySelector(".block2__vacancy-arrow");
const vacancy4Arrow = vacancy4.querySelector(".block2__vacancy-arrow");

const vacancy1ArrowActive = vacancy1.querySelector(".block2__vacancy-arrow_active");
const vacancy2ArrowActive = vacancy2.querySelector(".block2__vacancy-arrow_active");
const vacancy3ArrowActive = vacancy3.querySelector(".block2__vacancy-arrow_active");
const vacancy4ArrowActive = vacancy4.querySelector(".block2__vacancy-arrow_active");

const otvet1 = block2.querySelector(".block2__vacancy-otvet1");
const otvet2 = block2.querySelector(".block2__vacancy-otvet2");
const otvet3 = block2.querySelector(".block2__vacancy-otvet3");
const otvet4 = block2.querySelector(".block2__vacancy-otvet4");

document.addEventListener('DOMContentLoaded', function() {
  otvet1.classList.remove("block2__display-none");
  otvet2.classList.add("block2__display-none");
  otvet3.classList.add("block2__display-none");
  otvet4.classList.add("block2__display-none");
  
  vacancy1Arrow.classList.add("block2__display-none");
  vacancy2Arrow.classList.remove("block2__display-none");    
  vacancy3Arrow.classList.remove("block2__display-none");    
  vacancy4Arrow.classList.remove("block2__display-none");    

  vacancy1ArrowActive.classList.remove("block2__display-none");
  vacancy2ArrowActive.classList.add("block2__display-none");
  vacancy3ArrowActive.classList.add("block2__display-none");
  vacancy4ArrowActive.classList.add("block2__display-none");
});

vacancy1.addEventListener("click", function() {
  otvet1.classList.remove("block2__display-none");
  otvet2.classList.add("block2__display-none");
  otvet3.classList.add("block2__display-none");
  otvet4.classList.add("block2__display-none");
  
  vacancy1Arrow.classList.add("block2__display-none");
  vacancy2Arrow.classList.remove("block2__display-none");    
  vacancy3Arrow.classList.remove("block2__display-none");    
  vacancy4Arrow.classList.remove("block2__display-none");    

  vacancy1ArrowActive.classList.remove("block2__display-none");
  vacancy2ArrowActive.classList.add("block2__display-none");
  vacancy3ArrowActive.classList.add("block2__display-none");
  vacancy4ArrowActive.classList.add("block2__display-none");
});

vacancy2.addEventListener("click", function() {
  otvet1.classList.add("block2__display-none");
  otvet2.classList.remove("block2__display-none");
  otvet3.classList.add("block2__display-none");
  otvet4.classList.add("block2__display-none");
  
  vacancy1Arrow.classList.remove("block2__display-none");
  vacancy2Arrow.classList.add("block2__display-none");    
  vacancy3Arrow.classList.remove("block2__display-none");    
  vacancy4Arrow.classList.remove("block2__display-none");    

  vacancy1ArrowActive.classList.add("block2__display-none");
  vacancy2ArrowActive.classList.remove("block2__display-none");
  vacancy3ArrowActive.classList.add("block2__display-none");
  vacancy4ArrowActive.classList.add("block2__display-none");
});

vacancy3.addEventListener("click", function() {
  otvet1.classList.add("block2__display-none");
  otvet2.classList.add("block2__display-none");
  otvet3.classList.remove("block2__display-none");
  otvet4.classList.add("block2__display-none");
  
  vacancy1Arrow.classList.remove("block2__display-none");
  vacancy2Arrow.classList.remove("block2__display-none");    
  vacancy3Arrow.classList.add("block2__display-none");    
  vacancy4Arrow.classList.remove("block2__display-none");    

  vacancy1ArrowActive.classList.add("block2__display-none");
  vacancy2ArrowActive.classList.add("block2__display-none");
  vacancy3ArrowActive.classList.remove("block2__display-none");
  vacancy4ArrowActive.classList.add("block2__display-none");
});

vacancy4.addEventListener("click", function() {
  otvet1.classList.add("block2__display-none");
  otvet2.classList.add("block2__display-none");
  otvet3.classList.add("block2__display-none");
  otvet4.classList.remove("block2__display-none");
    
  vacancy1Arrow.classList.remove("block2__display-none");
  vacancy2Arrow.classList.remove("block2__display-none");    
  vacancy3Arrow.classList.remove("block2__display-none");    
  vacancy4Arrow.classList.add("block2__display-none");    
  
  vacancy1ArrowActive.classList.add("block2__display-none");
  vacancy2ArrowActive.classList.add("block2__display-none");
  vacancy3ArrowActive.classList.add("block2__display-none");
  vacancy4ArrowActive.classList.remove("block2__display-none");
});