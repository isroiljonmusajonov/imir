const progres = document.getElementById("progress");
const prev = document.getElementById("prew");
const next = document.getElementById("next");
const circle = document.querySelectorAll(".circle");
let currentActive = 1;
next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circle.length) {
    currentActive = circle.length;
  }
  update();
  //   console.log(currentActive);
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
  //   console.log(currentActive);
});
function update() {
  circle.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");
  progres.style.width =
    ((actives.length - 1) / (circle.length - 1)) * 100 + "%";
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circle.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
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
