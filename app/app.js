const upIcon = document.querySelectorAll(".up");
const h2 = document.getElementById("h2");
const but = document.getElementById("but");
const buts = document.getElementById("buts");

but.addEventListener("click", function () {
  h2.innerText = +h2.innerText - 1;
});
buts.addEventListener("click", function () {
  h2.innerText = +h2.innerText + 1;
});
// upIcon.addEventListener("click", () => {
//   window.scroll({
//     top: 0,
//     left: 0,
//     behavior: "smooth",
//   });
// });
console.log("skal");
const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icons");
const cancelBtn = document.querySelector(".cancel-icons");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
menuBtn.onclick = () => {
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
};
cancelBtn.onclick = () => {
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  cancelBtn.style.color = "#ff3d00";
  form.classList.remove("active");
};
searchBtn.onclick = () => {
  form.classList.add("active");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
};
