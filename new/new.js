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
let divbuton = document.querySelector(".div");
const btns = document.querySelectorAll(".Up");
const salom = document.querySelector(".submit");
const qayt = document.querySelector("#qayt");
console.log(qayt);
btns.forEach((btns) => {
  btns.addEventListener("click", () => {
    divbuton.classList.add("active");
  });
});
const erka = document.querySelector(".erka");
const ayol = document.querySelector("#ayol");
const bol = document.querySelector("#bol");
const text1 = document.querySelector("#contact-1");
const text2 = document.querySelector("#contact-2");
const text3 = document.querySelector("#contact-3");
erka.addEventListener("click", () => {
  // box.classList.add("active");
  text1.classList.toggle("active");
});
ayol.addEventListener("click", () => {
  // box.classList.add("active");
  text2.classList.toggle("active");
});
bol.addEventListener("click", () => {
  // box.classList.add("active");
  text3.classList.toggle("active");
});
