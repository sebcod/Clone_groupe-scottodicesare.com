const imgsBannerCarousel = document.querySelectorAll(".imgBannerCarousel");
const nbrsImgs = imgsBannerCarousel.length;
const btn_BannerCarousel_left = document.querySelector(
  ".btn_BannerCarousel_left"
);
const btn_BannerCarousel_right = document.querySelector(
  ".btn_BannerCarousel_right"
);
const textsImgBanner = document.querySelectorAll(".textImgBanner");
//console.log(textsImgBanner);

let count = 0;
let timerNextImage = setInterval(() => nextImage(), 5000);

const remove_active_textImgBanner = () => {
  textsImgBanner.forEach((textsImgBanner) => {
    textsImgBanner.classList.remove("active_textImgBanner");
  });
};

function nextImage() {
  imgsBannerCarousel[count].classList.remove("active_imgBannerCarousel");
  if (count < nbrsImgs - 1) {
    count++;
  } else {
    count = 0;
  }
  imgsBannerCarousel[count].classList.add("active_imgBannerCarousel");
  remove_active_textImgBanner();
  textsImgBanner[count].classList.add("active_textImgBanner");
}

function previousImage() {
  imgsBannerCarousel[count].classList.remove("active_imgBannerCarousel");
  if (count > 0) {
    count--;
  } else {
    count = nbrsImgs - 1;
  }
  imgsBannerCarousel[count].classList.add("active_imgBannerCarousel");
  remove_active_textImgBanner();
  textsImgBanner[count].classList.add("active_textImgBanner");
}

function autoPLay() {
  timerNextImage;
}

window.addEventListener("load", () => {
  textsImgBanner[count].classList.add("active_textImgBanner");
  setTimeout(autoPLay(), 5000);
});

btn_BannerCarousel_right.addEventListener("click", () => {
  clearTimeout(timerNextImage);
  nextImage();
});

btn_BannerCarousel_left.addEventListener("click", () => {
  clearTimeout(timerNextImage);
  previousImage();
});
