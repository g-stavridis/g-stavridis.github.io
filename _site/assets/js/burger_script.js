const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const content = document.querySelector(".main-content");


// hamburger.addEventListener("click", () => {
//   // hamburger.classList.toggle("inactive");
//   menu.classList.toggle("show");
// })

// hamburger.addEventListener("click", function (toggleClass) { });

function toggleClass() {
  hamburger.classList.toggle("inactive");
  menu.classList.toggle("show");
  content.classList.toggle("hidden");
}

// document.querySelectorAll(".menu__list__item__link").forEach(n => n.addEventListener("click", () => {
//   hamburger.classList.toggle("inactive");
//   console.log("los");
// }))

