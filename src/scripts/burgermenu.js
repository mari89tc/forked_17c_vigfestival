document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector("#burger_menu");
  const menu = document.querySelector("#menu");

  burgerMenu.addEventListener("mouseover", function () {
    burgerMenu.classList.add("hover");
  });

  burgerMenu.addEventListener("mouseout", function () {
    burgerMenu.classList.remove("hover");
  });

  burgerMenu.addEventListener("click", function () {
    burgerMenu.classList.toggle("close");
    menu.classList.toggle("overlay");
  });
});
