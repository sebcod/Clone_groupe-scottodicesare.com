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
        console.log("max-width: 768px");
        switch (e.target.id) {
          case "CFA":
            sousMenuCFA.classList.toggle("sousMenuHidden");
            sousMenuEcole.classList.add("sousMenuHidden");
            sousMenuEsthetique.classList.add("sousMenuHidden");
            sousMenuCoiffure.classList.add("sousMenuHidden");
            sousMenuFormationsPro.classList.add("sousMenuHidden");
            sousMenuMedias.classList.add("sousMenuHidden");
            cfa.classList.toggle("arrowDown");
            cfa.classList.toggle("arrowUp");

            break;
          case "ecole":
            sousMenuCFA.classList.add("sousMenuHidden");
            sousMenuEcole.classList.toggle("sousMenuHidden");
            sousMenuEsthetique.classList.add("sousMenuHidden");
            sousMenuCoiffure.classList.add("sousMenuHidden");
            sousMenuFormationsPro.classList.add("sousMenuHidden");
            sousMenuMedias.classList.add("sousMenuHidden");
            ecole.classList.toggle("arrowDown");
            ecole.classList.toggle("arrowUp");
            break;
          case "esthetique":
            sousMenuCFA.classList.add("sousMenuHidden");
            sousMenuEcole.classList.add("sousMenuHidden");
            sousMenuEsthetique.classList.toggle("sousMenuHidden");
            sousMenuCoiffure.classList.add("sousMenuHidden");
            sousMenuFormationsPro.classList.add("sousMenuHidden");
            sousMenuMedias.classList.add("sousMenuHidden");
            esthetique.classList.toggle("arrowDown");
            esthetique.classList.toggle("arrowUp");

            break;
          case "coiffure":
            sousMenuCFA.classList.add("sousMenuHidden");
            sousMenuEcole.classList.add("sousMenuHidden");
            sousMenuEsthetique.classList.add("sousMenuHidden");
            sousMenuCoiffure.classList.toggle("sousMenuHidden");
            sousMenuFormationsPro.classList.add("sousMenuHidden");
            sousMenuMedias.classList.add("sousMenuHidden");
            coiffure.classList.toggle("arrowDown");
            coiffure.classList.toggle("arrowUp");

            break;
          case "formationsPro":
            sousMenuCFA.classList.add("sousMenuHidden");
            sousMenuEcole.classList.add("sousMenuHidden");
            sousMenuEsthetique.classList.add("sousMenuHidden");
            sousMenuCoiffure.classList.add("sousMenuHidden");
            sousMenuFormationsPro.classList.toggle("sousMenuHidden");
            sousMenuMedias.classList.add("sousMenuHidden");
            formationsPro.classList.toggle("arrowDown");
            formationsPro.classList.toggle("arrowUp");

            break;
          case "medias":
            sousMenuCFA.classList.add("sousMenuHidden");
            sousMenuEcole.classList.add("sousMenuHidden");
            sousMenuEsthetique.classList.add("sousMenuHidden");
            sousMenuCoiffure.classList.add("sousMenuHidden");
            sousMenuFormationsPro.classList.add("sousMenuHidden");
            sousMenuMedias.classList.toggle("sousMenuHidden");
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
      console.log("main");
      sousMenuCFA.classList.add("sousMenuHidden");
      sousMenuEcole.classList.add("sousMenuHidden");
      sousMenuEsthetique.classList.add("sousMenuHidden");
      sousMenuCoiffure.classList.add("sousMenuHidden");
      sousMenuFormationsPro.classList.add("sousMenuHidden");
      sousMenuMedias.classList.add("sousMenuHidden");
    }
  });

  logo.addEventListener("click", (e) => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      sousMenuCFA.classList.add("sousMenuHidden");
      sousMenuEcole.classList.add("sousMenuHidden");
      sousMenuEsthetique.classList.add("sousMenuHidden");
      sousMenuCoiffure.classList.add("sousMenuHidden");
      sousMenuFormationsPro.classList.add("sousMenuHidden");
      sousMenuMedias.classList.add("sousMenuHidden");
    }
  });

  contact.addEventListener("click", (e) => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      sousMenuCFA.classList.add("sousMenuHidden");
      sousMenuEcole.classList.add("sousMenuHidden");
      sousMenuEsthetique.classList.add("sousMenuHidden");
      sousMenuCoiffure.classList.add("sousMenuHidden");
      sousMenuFormationsPro.classList.add("sousMenuHidden");
      sousMenuMedias.classList.add("sousMenuHidden");
    }
  });
}

/* sous menu >768px hidden */
{
  menuRow.forEach((row) => {
    row.addEventListener("mouseover", (e) => {
      if (!window.matchMedia("(max-width: 768px)").matches) {
        console.log("min-width: 768px");

        switch (e.target.id) {
          case "CFA":
            console.log("cfa");
            sousMenuCFA.classList.remove("sousMenuHidden");
            sousMenuEcole.classList.add("sousMenuHidden");
            sousMenuEsthetique.classList.add("sousMenuHidden");
            sousMenuCoiffure.classList.add("sousMenuHidden");
            sousMenuFormationsPro.classList.add("sousMenuHidden");
            sousMenuMedias.classList.add("sousMenuHidden");

            break;
          case "ecole":
            console.log("ecole");
            sousMenuCFA.classList.add("sousMenuHidden");
            sousMenuEcole.classList.remove("sousMenuHidden");
            sousMenuEsthetique.classList.add("sousMenuHidden");
            sousMenuCoiffure.classList.add("sousMenuHidden");
            sousMenuFormationsPro.classList.add("sousMenuHidden");
            sousMenuMedias.classList.add("sousMenuHidden");
            break;
          case "esthetique":
            console.log("esthetique");
            sousMenuCFA.classList.add("sousMenuHidden");
            sousMenuEcole.classList.add("sousMenuHidden");
            sousMenuEsthetique.classList.remove("sousMenuHidden");
            sousMenuCoiffure.classList.add("sousMenuHidden");
            sousMenuFormationsPro.classList.add("sousMenuHidden");
            sousMenuMedias.classList.add("sousMenuHidden");

            break;
          case "coiffure":
            console.log("coiffure");
            sousMenuCFA.classList.add("sousMenuHidden");
            sousMenuEcole.classList.add("sousMenuHidden");
            sousMenuEsthetique.classList.add("sousMenuHidden");
            sousMenuCoiffure.classList.remove("sousMenuHidden");
            sousMenuFormationsPro.classList.add("sousMenuHidden");
            sousMenuMedias.classList.add("sousMenuHidden");

            break;
          case "formationsPro":
            console.log("formationPro");
            sousMenuCFA.classList.add("sousMenuHidden");
            sousMenuEcole.classList.add("sousMenuHidden");
            sousMenuEsthetique.classList.add("sousMenuHidden");
            sousMenuCoiffure.classList.add("sousMenuHidden");
            sousMenuFormationsPro.classList.remove("sousMenuHidden");
            sousMenuMedias.classList.add("sousMenuHidden");

            break;
          case "medias":
            console.log("medias");
            sousMenuCFA.classList.add("sousMenuHidden");
            sousMenuEcole.classList.add("sousMenuHidden");
            sousMenuEsthetique.classList.add("sousMenuHidden");
            sousMenuCoiffure.classList.add("sousMenuHidden");
            sousMenuFormationsPro.classList.add("sousMenuHidden");
            sousMenuMedias.classList.remove("sousMenuHidden");

            break;
          default:
        }
      }
    });
  });

  main.addEventListener("mouseover", (e) => {
    if (!window.matchMedia("(max-width: 768px)").matches) {
      console.log("main");
      sousMenuCFA.classList.add("sousMenuHidden");
      sousMenuEcole.classList.add("sousMenuHidden");
      sousMenuEsthetique.classList.add("sousMenuHidden");
      sousMenuCoiffure.classList.add("sousMenuHidden");
      sousMenuFormationsPro.classList.add("sousMenuHidden");
      sousMenuMedias.classList.add("sousMenuHidden");
    }
  });

  logo.addEventListener("mouseover", (e) => {
    if (!window.matchMedia("(max-width: 768px)").matches) {
      sousMenuCFA.classList.add("sousMenuHidden");
      sousMenuEcole.classList.add("sousMenuHidden");
      sousMenuEsthetique.classList.add("sousMenuHidden");
      sousMenuCoiffure.classList.add("sousMenuHidden");
      sousMenuFormationsPro.classList.add("sousMenuHidden");
      sousMenuMedias.classList.add("sousMenuHidden");
    }
  });

  contact.addEventListener("mouseover", (e) => {
    if (!window.matchMedia("(max-width: 768px)").matches) {
      sousMenuCFA.classList.add("sousMenuHidden");
      sousMenuEcole.classList.add("sousMenuHidden");
      sousMenuEsthetique.classList.add("sousMenuHidden");
      sousMenuCoiffure.classList.add("sousMenuHidden");
      sousMenuFormationsPro.classList.add("sousMenuHidden");
      sousMenuMedias.classList.add("sousMenuHidden");
    }
  });
}
