
export function modalContact() {

    const button = document.querySelector("div.modal-contact > ul > li:nth-child(2) > button");
    const modal = document.querySelector(".call-form");
    const overlay = document.querySelector(".overlay-call");
    const buttonClose = document.querySelector(".call-form__burger > button");
    const modalWrapper = document.querySelector('.modal-window');

    function zIndexModalMin() {
        modalWrapper.style = "z-index: 9;";
    }


    function toggleModal() {
        modal.classList.toggle("hidden-form");
        overlay.classList.toggle("overlay--hidden");
        document.body.classList.toggle("no-scroll");
        
    }

    
    button.addEventListener("click", zIndexModalMin)

    button.addEventListener("click", toggleModal);

    overlay.addEventListener("click", toggleModal);

    buttonClose.addEventListener("click", toggleModal);
}


export function modalFeetBack() {
    const button = document.querySelector(".modal-contact__list > li:nth-child(1) > button");
    const modal = document.querySelector(".feedback-form");
    const overlay = document.querySelector(".overlay-feedback");
    const buttonClose = document.querySelector(".feedback-form__burger > button");
    const modalWrapper = document.querySelector('.modal-window');

    function zIndexModalMin() {
        modalWrapper.style = "z-index: 9;";
    }

    function toggleModal() {
        modal.classList.toggle("hidden-form");
        overlay.classList.toggle("overlay--hidden");
        document.body.classList.toggle("no-scroll");

    }

    button.addEventListener("click", zIndexModalMin)

    button.addEventListener("click", toggleModal);

    overlay.addEventListener("click", toggleModal);


    buttonClose.addEventListener("click", toggleModal);
}


export function wrapperModal() {
    const button = document.querySelector('.header__first-item > button');
    const modal = document.querySelector('.modal-window');
    const buttonClose = document.querySelector('.modal-menu__item--burger');
    const overlay = document.querySelector(".overlay-modal");
    

    function zIndexModalUp() {
        modal.style = "z-index: 13;";
    }

    function toggleModal() {
        modal.classList.toggle('modal-window-none');
        overlay.classList.toggle("overlay--hidden");
        document.body.classList.toggle("no-scroll");
        

    }


    button.addEventListener("click", zIndexModalUp);
    button.addEventListener("click", toggleModal);
    buttonClose.addEventListener("click", toggleModal);
    overlay.addEventListener("click", toggleModal);
}


