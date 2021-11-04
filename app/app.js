const upIcon = document.querySelectorAll(".up");
const h2 = document.querySelectorAll("#h2");
const but = document.querySelectorAll("#but");
const buts = document.querySelectorAll("#buts");

but.forEach((but, i) => {
  but.addEventListener("click", function () {
    h2[i].innerText = +h2[i].innerText - 1;
  });
});
buts.forEach((buts, i) => {
  buts.addEventListener("click", function () {
    h2[i].innerText = +h2[i].innerText + 1;
  });
});

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
// btns[0].addEventListener("click", () => {
//   divbuton.classList.add("active");
// });
// btns[1].addEventListener("click", () => {
//   divbuton.classList.add("active");
// });
// btns.forEach(() => {
//   btns[0].addEventListener("click", () => {
//     divbuton.classList.add("active");
//   });
// });
// btns[2].addEventListener("click", () => {
//   divbuton.classList.add("active");
// });
// btns[3].addEventListener("click", () => {
//   divbuton.classList.add("active");
// });

qayt.addEventListener("click", () => {
  divbuton.classList.remove("active");
});
console.log(salom);
const boxes = document.querySelectorAll(".contact-box");
window.addEventListener("scroll", checkBoxes);
checkBoxes();
function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  boxes.forEach((box) => {
    const boxtop = box.getBoundingClientRect().top;
    if (boxtop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

// const boxess = document.querySelectorAll(".woman-box1");
// window.addEventListener("scroll", checkBoxes);
// checkBoxes();
// function checkBoxes() {
//   const triggerBottom = (window.innerHeight / 5) * 4;
//   boxess.forEach((box) => {
//     const boxtop = box.getBoundingClientRect().top;
//     if (boxtop < triggerBottom) {
//       box.classList.add("show");
//     } else {
//       box.classList.remove("show");
//     }
//   });
// }
