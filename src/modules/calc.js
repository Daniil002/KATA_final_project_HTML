import Swiper from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

export const sum = (a, b) => a + b;
export const mult = (a, b) => a * b;



export function swiperFirst() {
  window.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".swiper1", {
      slidesPerView: 1.3,
      spaceBetween: 16,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
      },
      breakpoints: {
        767: {
          enabled: false,
          spaceBetween: 0,
        },
      },
    });
  });
}

export function swiperSecond() {
  window.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".swiper2", {
      slidesPerView: 1.5,
      spaceBetween: 16,
    });
  });
}


export function swiperThird() {
  window.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".swiper3", {
      slidesPerView: 1.5,
      spaceBetween: 16,
    });
  })
}
