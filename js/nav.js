const menuBurger = document.querySelector(".menuBurger");
const menuContainer = document.querySelector(".menuContainer");
const menuRow = document.querySelectorAll(".menuRow");
const sousMenuCFA = document.getElementById("sousMenuCFA");
const sousMenuEcole = document.getElementById("sousMenuEcole");
const sousMenuEsthetique = document.getElementById("sousMenuEsthetique");
const sousMenuCoiffure = document.getElementById("sousMenuCoiffure");
const sousMenuFormationsPro = document.getElementById("sousMenuFormationsPro");
const sousMenuMedias = document.getElementById("sousMenuMedias");
const sousMenuContainer = document.querySelectorAll(".sousMenuContainer");
const cfa = document.getElementById("CFA");
const ecole = document.getElementById("ecole");
const esthetique = document.getElementById("esthetique");
const coiffure = document.getElementById("coiffure");
const formationsPro = document.getElementById("formationsPro");
const medias = document.getElementById("medias");
const main = document.querySelector("main");
const logo = document.querySelector(".logo");
const contact = document.querySelector(".contact");

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

/* sous menu mobile hidden */
{
  menuRow.forEach((row) => {
    row.addEventListener("click", (e) => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        switch (e.target.id) {
          case "CFA":
            sousMenuCFA.classList.toggle("activeSousMenuMobile");
            sousMenuEcole.classList.remove("activeSousMenuMobile");
            sousMenuEsthetique.classList.remove("activeSousMenuMobile");
            sousMenuCoiffure.classList.remove("activeSousMenuMobile");
            sousMenuFormationsPro.classList.remove("activeSousMenuMobile");
            sousMenuMedias.classList.remove("activeSousMenuMobile");
            cfa.classList.toggle("arrowDown");
            cfa.classList.toggle("arrowUp");
            break;
          case "ecole":
            sousMenuCFA.classList.remove("activeSousMenuMobile");
            sousMenuEcole.classList.toggle("activeSousMenuMobile");
            sousMenuEsthetique.classList.remove("activeSousMenuMobile");
            sousMenuCoiffure.classList.remove("activeSousMenuMobile");
            sousMenuFormationsPro.classList.remove("activeSousMenuMobile");
            sousMenuMedias.classList.remove("activeSousMenuMobile");
            ecole.classList.toggle("arrowDown");
            ecole.classList.toggle("arrowUp");
            break;
          case "esthetique":
            sousMenuCFA.classList.remove("activeSousMenuMobile");
            sousMenuEcole.classList.remove("activeSousMenuMobile");
            sousMenuEsthetique.classList.toggle("activeSousMenuMobile");
            sousMenuCoiffure.classList.remove("activeSousMenuMobile");
            sousMenuFormationsPro.classList.remove("activeSousMenuMobile");
            sousMenuMedias.classList.remove("activeSousMenuMobile");
            esthetique.classList.toggle("arrowDown");
            esthetique.classList.toggle("arrowUp");
            break;
          case "coiffure":
            sousMenuCFA.classList.remove("activeSousMenuMobile");
            sousMenuEcole.classList.remove("activeSousMenuMobile");
            sousMenuEsthetique.classList.remove("activeSousMenuMobile");
            sousMenuCoiffure.classList.toggle("activeSousMenuMobile");
            sousMenuFormationsPro.classList.remove("activeSousMenuMobile");
            sousMenuMedias.classList.remove("activeSousMenuMobile");
            coiffure.classList.toggle("arrowDown");
            coiffure.classList.toggle("arrowUp");
            break;
          case "formationsPro":
            sousMenuCFA.classList.remove("activeSousMenuMobile");
            sousMenuEcole.classList.remove("activeSousMenuMobile");
            sousMenuEsthetique.classList.remove("activeSousMenuMobile");
            sousMenuCoiffure.classList.remove("activeSousMenuMobile");
            sousMenuFormationsPro.classList.toggle("activeSousMenuMobile");
            sousMenuMedias.classList.remove("activeSousMenuMobile");
            formationsPro.classList.toggle("arrowDown");
            formationsPro.classList.toggle("arrowUp");
            break;
          case "medias":
            sousMenuCFA.classList.remove("activeSousMenuMobile");
            sousMenuEcole.classList.remove("activeSousMenuMobile");
            sousMenuEsthetique.classList.remove("activeSousMenuMobile");
            sousMenuCoiffure.classList.remove("activeSousMenuMobile");
            sousMenuFormationsPro.classList.remove("activeSousMenuMobile");
            sousMenuMedias.classList.toggle("activeSousMenuMobile");
            medias.classList.toggle("arrowDown");
            medias.classList.toggle("arrowUp");
            break;
          default:
        }
      }
    });
  });
  main.addEventListener("click", (e) => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      sousMenuCFA.classList.remove("activeSousMenuMobile");
      sousMenuEcole.classList.remove("activeSousMenuMobile");
      sousMenuEsthetique.classList.remove("activeSousMenuMobile");
      sousMenuCoiffure.classList.remove("activeSousMenuMobile");
      sousMenuFormationsPro.classList.remove("activeSousMenuMobile");
      sousMenuMedias.classList.remove("activeSousMenuMobile");
    }
  });
  logo.addEventListener("click", (e) => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      sousMenuCFA.classList.remove("activeSousMenuMobile");
      sousMenuEcole.classList.remove("activeSousMenuMobile");
      sousMenuEsthetique.classList.remove("activeSousMenuMobile");
      sousMenuCoiffure.classList.remove("activeSousMenuMobile");
      sousMenuFormationsPro.classList.remove("activeSousMenuMobile");
      sousMenuMedias.classList.remove("activeSousMenuMobile");
    }
  });
  contact.addEventListener("click", (e) => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      sousMenuCFA.classList.remove("activeSousMenuMobile");
      sousMenuEcole.classList.remove("activeSousMenuMobile");
      sousMenuEsthetique.classList.remove("activeSousMenuMobile");
      sousMenuCoiffure.classList.remove("activeSousMenuMobile");
      sousMenuFormationsPro.classList.remove("activeSousMenuMobile");
      sousMenuMedias.classList.remove("activeSousMenuMobile");
    }
  });
}
