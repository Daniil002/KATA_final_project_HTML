export function buttons() {
  const button = document.querySelector(".button-768");

  let hiddenEls768px = document.querySelectorAll(".hidden-768px");
  let hiddenEls1120px = document.querySelectorAll(".hidden-1120px");

  // Функция для установки начальной видимости элементов
  function setInitialVisibility() {
    const currentViewportWidth = window.visualViewport.width;

    if (currentViewportWidth >= 1388) {
      hiddenEls768px.forEach((el) => el.classList.remove("hidden-768px"));
    } else {
      hiddenEls768px.forEach((el) => el.classList.add("hidden-768px"));
    }
  }

  // Устанавливаем начальную видимость при загрузке страницы
  setInitialVisibility();

  // Обновляем видимость при изменении размера окна
  window.addEventListener("resize", setInitialVisibility);

  // Функция для переключения классов и изменения текста кнопки
  function toggleElements() {
    const currentViewportWidth = window.visualViewport.width;

    button.classList.toggle("button--rotated");

    hiddenEls1120px.forEach((el) => el.classList.toggle("hidden-1120px"));

    if (currentViewportWidth < 1120) {
      hiddenEls768px.forEach((el) => el.classList.toggle("hidden-768px"));
    }

    isToggled = !isToggled;
    button.textContent = isToggled ? "Скрыть" : "Показать все";
  }

  let isToggled = false;

  // Назначаем обработчик события на кнопку
  button.addEventListener("click", toggleElements);
}



export function buttonContenCard() {
  const button = document.querySelector('.content-cards__button');
  const hiddenAll = document.querySelectorAll('.hidden-all');
  const hiddenFourth = document.querySelector('.content-cards__item:nth-child(4)'); // Исправлено имя переменной


  let isToggled = false;

  function setInitialVisibility() {
    const currentViewportWidth = window.visualViewport.width;

    if (currentViewportWidth >= 1388) {
      hiddenFourth.classList.remove('hidden-all'); // Удаление класса при ширине >= 1388px
    } else {
      hiddenFourth.classList.add('hidden-all'); // Добавление класса при ширине < 1388px
    }
  }

  setInitialVisibility(); // Установка начальной видимости
  window.addEventListener('resize', setInitialVisibility); // Обновление при изменении размера окна

  button.addEventListener('click', () => {
    hiddenAll.forEach(el => el.classList.toggle('hidden-all')); // Переключение видимости элементов

    isToggled = !isToggled; // Переключение состояния

    button.textContent = isToggled ? 'Скрыть' : 'Показать все'; // Изменение текста кнопки
    button.classList.toggle('button--rotated'); // Переключение класса для кнопки
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

export function buttonArticleText() {
  const button = document.querySelector('.main-article__button');
  let isToggled = false;

  button.addEventListener("click", () => {
    isToggled = !isToggled; // Переключение состояния

    button.textContent = isToggled ? 'Скрыть' : 'Читать далее'; // Изменение текста кнопки
    button.classList.toggle('button--rotated');
  })
}