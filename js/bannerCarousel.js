const imgsBannerCarousel = document.querySelectorAll(".imgBannerCarousel");
const nbrsImgs = imgsBannerCarousel.length;
const btn_BannerCarousel_left = document.querySelector(
  ".btn_BannerCarousel_left"
);
const btn_BannerCarousel_right = document.querySelector(
  ".btn_BannerCarousel_right"
);
let count = 0;

function nextImage() {
  imgsBannerCarousel[count].classList.remove("active_imgBannerCarousel");
  if (count < nbrsImgs - 1) {
    count++;
  } else {
    count = 0;
  }
  imgsBannerCarousel[count].classList.add("active_imgBannerCarousel");
}

function previousImage() {
  imgsBannerCarousel[count].classList.remove("active_imgBannerCarousel");
  if (count > 0) {
    count--;
  } else {
    count = nbrsImgs - 1;
  }
  imgsBannerCarousel[count].classList.add("active_imgBannerCarousel");
}

btn_BannerCarousel_right.addEventListener("click", () => {
  nextImage();
});

btn_BannerCarousel_left.addEventListener("click", () => {
  previousImage();
});
