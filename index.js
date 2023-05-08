const menuBurger = document.querySelector(".menuBurger");
const menuContainer = document.querySelector(".menuContainer");
const menuRowSpan = document.querySelectorAll(".menuRowSpan");
const sousMenuCFA = document.getElementById("sousMenuCFA");
//console.log(menuRow);

/* Menu Buger */

menuBurger.addEventListener("click", () => {
  menuBurger.classList.toggle("aciveMenuBurger");
  menuBurger.classList.toggle("disableMenuBurger");

  if (menuBurger.classList.contains("aciveMenuBurger")) {
    menuContainer.classList.remove("menuContainerMobileHidden");
  } else if (menuBurger.classList.contains("disableMenuBurger")) {
    menuContainer.classList.add("menuContainerMobileHidden");
  }
});

/* Menu Mobile */

menuRowSpan.forEach((rowSpan) => {
  rowSpan.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "cfa":
        sousMenuCFA.classList.toggle("sousMenuVisible");
        break;
      default:
        console.log("rien trouvé");
    }
  });
});
