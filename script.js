const btnNavEL = document.querySelector(".btn-add-div");
const headerEL = document.querySelector(".header-section");
const btnNavX = document.querySelector(".icon-outline-div");
const btnNavRS = document.querySelector(".btn-add-div-test");

btnNavEL.addEventListener("click", function () {
  headerEL.classList.add("menu");
});

btnNavRS.addEventListener("click", function () {
  headerEL.classList.add("menu");
});

btnNavX.addEventListener("click", function () {
  headerEL.classList.remove("menu");
});
