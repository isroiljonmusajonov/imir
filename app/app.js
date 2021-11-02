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
upIcon.addEventListener("click", () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
console.log("skal");
