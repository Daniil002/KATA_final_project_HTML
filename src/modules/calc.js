import Swiper from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Navigation, Pagination } from 'swiper/modules'





// export function swiperFirst() {
//   window.addEventListener("DOMContentLoaded", () => {
//     const swiper = new Swiper(".swiper1", {
//       slidesPerView: 1.3,
//       spaceBetween: 16,
//       pagination: {
//         el: ".pagination-first",
//         clickable: true,
//         bulletClass: "swiper-pagination-bullet",
//         bulletActiveClass: "swiper-pagination-bullet-active",
//       },
//       breakpoints: {
//         767: {
//           enabled: false,
//           spaceBetween: 0,
//         },
//       },
//     });
//   });
// }


window.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 1.5,
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
    },

  });

});


