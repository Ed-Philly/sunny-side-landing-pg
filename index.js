let menuIcon = document.querySelector("#menu-icon");
let menu = document.querySelector("#menu-all");
menuIcon.addEventListener("click", function (e) {
  menu.classList.toggle("show");
});
