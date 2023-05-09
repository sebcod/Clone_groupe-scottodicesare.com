const menuBurger = document.querySelector(".menuBurger");
const menuContainer = document.querySelector(".menuContainer");
const menuRowSpan = document.querySelectorAll(".menuRowSpan");
const sousMenuCFA = document.getElementById("sousMenuCFA");
const sousMenuEcole = document.getElementById("sousMenuEcole");

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
    console.log(e.target.id);

    switch (e.target.id) {
      case "CFA":
        sousMenuCFA.classList.toggle("sousMenuHidden");
        console.log("trouvé");
        break;
      case "ecole":
        sousMenuEcole.classList.toggle("sousMenuHidden");
        console.log("ecole");
        break;
      default:
        console.log("rien trouvé");
    }
  });
});
