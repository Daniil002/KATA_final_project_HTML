export function buttons() {
  const button = document.querySelector(".button-768");

  let hiddenEls768px = document.querySelectorAll(".hidden-768px");
  let hiddenEls1120px = document.querySelectorAll(".hidden-1120px");

  button.addEventListener("click", () => {
    const currentViewportWidth = window.visualViewport.width;

    button.classList.toggle("button--rotated");

    hiddenEls1120px.forEach((el) => el.classList.toggle("hidden-1120px"));

    if (currentViewportWidth < 1120) {
      hiddenEls768px.forEach((el) => el.classList.toggle("hidden-768px"));
    }
  });




  let isToggled = false;

  button.addEventListener("click", () => {
    isToggled = !isToggled;

    if (isToggled) {
      button.textContent = "Скрыть";
    } else {
      button.textContent = "Показать все";
    }
  });
}


export function buttonContenCard() {
  const button = document.querySelector('.content-cards__button');
  const hiddenAll = document.querySelectorAll(".hidden-all");

  let isToggled = false;

  button.addEventListener("click", () => {
    const currentViewportWidth = window.visualViewport.width;

    hiddenAll.forEach((el) => el.classList.toggle("hidden-all"));
    
    isToggled = !isToggled;

    if (isToggled) {
      button.textContent = "Скрыть";
    } else {
      button.textContent = "Показать все";
    }
  });
}



export function buttonMain() {
  document.querySelector(".main-article__button").addEventListener("click", function () {
      const hiddenText = document.querySelector(".main-article__second--text");
      if (hiddenText.classList.contains("hidden")) {
        hiddenText.classList.remove("hidden");
      } else {
        hiddenText.classList.add("hidden");
      }
    });
}
