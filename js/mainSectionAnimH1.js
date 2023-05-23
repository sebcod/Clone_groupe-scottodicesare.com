const mainSectionH1 = document.querySelectorAll(".mainSectionH1");
console.log(mainSectionH1);

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

document.addEventListener("DOMContentLoaded", () => {
  mainSectionH1.forEach((h1) => {
    if (isInViewport(h1)) {
      h1.classList.add("animH1");
    }
  });
});

document.addEventListener("scroll", () => {
  mainSectionH1.forEach((h1) => {
    if (isInViewport(h1)) {
      h1.classList.add("animH1");
    }
  });
});
