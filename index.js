const menuBurger = document.querySelector(".menuBurger");
const menuContainer = document.querySelector(".menuContainer");
const menuRowSpan = document.querySelectorAll(".menuRowSpan");
const sousMenuCFA = document.getElementById("sousMenuCFA");
const sousMenuEcole = document.getElementById("sousMenuEcole");
const sousMenuEsthetique = document.getElementById("sousMenuEsthetique");
const sousMenuCoiffure = document.getElementById("sousMenuCoiffure");
const sousMenuFormationsPro = document.getElementById("sousMenuFormationsPro");
const sousMenuMedias = document.getElementById("sousMenuMedias");
const sousMenuContainer = document.querySelectorAll(".sousMenuContainer");

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

function menuResponsive() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    console.log("max-width: 768px");
    /* sous menu mobile hidden*/
    menuRowSpan.forEach((rowSpan) => {
      rowSpan.addEventListener("click", (e) => {
        switch (e.target.id) {
          case "CFA":
            console.log("la cfa");

            sousMenuCFA.classList.toggle("sousMenuHidden");
            sousMenuEcole.classList.add("sousMenuHidden");
            sousMenuEsthetique.classList.add("sousMenuHidden");
            sousMenuCoiffure.classList.add("sousMenuHidden");
            sousMenuFormationsPro.classList.add("sousMenuHidden");
            sousMenuMedias.classList.add("sousMenuHidden");

            break;
          case "ecole":
            sousMenuCFA.classList.add("sousMenuHidden");
            sousMenuEcole.classList.toggle("sousMenuHidden");
            sousMenuEsthetique.classList.add("sousMenuHidden");
            sousMenuCoiffure.classList.add("sousMenuHidden");
            sousMenuFormationsPro.classList.add("sousMenuHidden");
            sousMenuMedias.classList.add("sousMenuHidden");
            break;
          case "esthetique":
            sousMenuCFA.classList.add("sousMenuHidden");
            sousMenuEcole.classList.add("sousMenuHidden");
            sousMenuEsthetique.classList.toggle("sousMenuHidden");
            sousMenuCoiffure.classList.add("sousMenuHidden");
            sousMenuFormationsPro.classList.add("sousMenuHidden");
            sousMenuMedias.classList.add("sousMenuHidden");

            break;
          case "coiffure":
            sousMenuCFA.classList.add("sousMenuHidden");
            sousMenuEcole.classList.add("sousMenuHidden");
            sousMenuEsthetique.classList.add("sousMenuHidden");
            sousMenuCoiffure.classList.toggle("sousMenuHidden");
            sousMenuFormationsPro.classList.add("sousMenuHidden");
            sousMenuMedias.classList.add("sousMenuHidden");

            break;
          case "formationsPro":
            sousMenuCFA.classList.add("sousMenuHidden");
            sousMenuEcole.classList.add("sousMenuHidden");
            sousMenuEsthetique.classList.add("sousMenuHidden");
            sousMenuCoiffure.classList.add("sousMenuHidden");
            sousMenuFormationsPro.classList.toggle("sousMenuHidden");
            sousMenuMedias.classList.add("sousMenuHidden");

            break;
          case "medias":
            sousMenuCFA.classList.add("sousMenuHidden");
            sousMenuEcole.classList.add("sousMenuHidden");
            sousMenuEsthetique.classList.add("sousMenuHidden");
            sousMenuCoiffure.classList.add("sousMenuHidden");
            sousMenuFormationsPro.classList.add("sousMenuHidden");
            sousMenuMedias.classList.toggle("sousMenuHidden");

            break;
          default:
        }
      });
    });
  }

  if (!window.matchMedia("(max-width: 768px)").matches) {
    console.log("min-width: 768px");

    // window.addEventListener("mouseover", (e) => {
    //   sousMenuCFA.classList.add("sousMenuHidden");
    //   sousMenuEcole.classList.add("sousMenuHidden");
    //   sousMenuEsthetique.classList.add("sousMenuHidden");
    //   sousMenuCoiffure.classList.add("sousMenuHidden");
    //   sousMenuFormationsPro.classList.add("sousMenuHidden");
    //   sousMenuMedias.classList.add("sousMenuHidden");
    // });

    /* sous menu mobile hidden*/
    menuRowSpan.forEach((rowSpan) => {
      rowSpan.addEventListener("mouseover", (e) => {
        switch (e.target.id) {
          case "CFA":
            sousMenuCFA.classList.remove("sousMenuHidden");
            sousMenuEcole.classList.add("sousMenuHidden");
            sousMenuEsthetique.classList.add("sousMenuHidden");
            sousMenuCoiffure.classList.add("sousMenuHidden");
            sousMenuFormationsPro.classList.add("sousMenuHidden");
            sousMenuMedias.classList.add("sousMenuHidden");

            break;
          case "ecole":
            sousMenuCFA.classList.add("sousMenuHidden");
            sousMenuEcole.classList.remove("sousMenuHidden");
            sousMenuEsthetique.classList.add("sousMenuHidden");
            sousMenuCoiffure.classList.add("sousMenuHidden");
            sousMenuFormationsPro.classList.add("sousMenuHidden");
            sousMenuMedias.classList.add("sousMenuHidden");
            break;
          case "esthetique":
            sousMenuCFA.classList.add("sousMenuHidden");
            sousMenuEcole.classList.add("sousMenuHidden");
            sousMenuEsthetique.classList.remove("sousMenuHidden");
            sousMenuCoiffure.classList.add("sousMenuHidden");
            sousMenuFormationsPro.classList.add("sousMenuHidden");
            sousMenuMedias.classList.add("sousMenuHidden");

            break;
          case "coiffure":
            sousMenuCFA.classList.add("sousMenuHidden");
            sousMenuEcole.classList.add("sousMenuHidden");
            sousMenuEsthetique.classList.add("sousMenuHidden");
            sousMenuCoiffure.classList.remove("sousMenuHidden");
            sousMenuFormationsPro.classList.add("sousMenuHidden");
            sousMenuMedias.classList.add("sousMenuHidden");

            break;
          case "formationsPro":
            sousMenuCFA.classList.add("sousMenuHidden");
            sousMenuEcole.classList.add("sousMenuHidden");
            sousMenuEsthetique.classList.add("sousMenuHidden");
            sousMenuCoiffure.classList.add("sousMenuHidden");
            sousMenuFormationsPro.classList.remove("sousMenuHidden");
            sousMenuMedias.classList.add("sousMenuHidden");

            break;
          case "medias":
            sousMenuCFA.classList.add("sousMenuHidden");
            sousMenuEcole.classList.add("sousMenuHidden");
            sousMenuEsthetique.classList.add("sousMenuHidden");
            sousMenuCoiffure.classList.add("sousMenuHidden");
            sousMenuFormationsPro.classList.add("sousMenuHidden");
            sousMenuMedias.classList.remove("sousMenuHidden");

            break;
          default:
            sousMenuCFA.classList.add("sousMenuHidden");
            sousMenuEcole.classList.add("sousMenuHidden");
            sousMenuEsthetique.classList.add("sousMenuHidden");
            sousMenuCoiffure.classList.add("sousMenuHidden");
            sousMenuFormationsPro.classList.add("sousMenuHidden");
            sousMenuMedias.classList.add("sousMenuHidden");
        }
      });
    });
  }
}

menuResponsive();

window.onchange(() => {
  console.log("load");
  menuResponsive();
});
// window.addEventListener("resize", () => {
//   console.log("resize");
//   menuResponsive();
// });
window.addEventListener("maximize", () => {
  console.log("maximise");
  menuResponsive();
});
