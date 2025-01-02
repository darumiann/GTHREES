const card5 = document.querySelector(".block2__card5");
card5.classList.add("display-none");

const viewMoreBtn = document.querySelector(".block2__view-more-button");

viewMoreBtn.addEventListener("click", function() {
  if (card5.classList.contains("display-none")) {
    card5.classList.remove("display-none");
  } else {
    card5.classList.add("display-none");
  }
})