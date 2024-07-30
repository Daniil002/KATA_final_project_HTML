
export function modalContact() {

    const button = document.querySelector("div.modal-contact > ul > li:nth-child(2) > button");
    const callForm = document.querySelector(".call-form");
    const overlay = document.querySelector(".overlay-call");
    const buttonClose = document.querySelector(".call-form__burger > button");




    function toggleModal() {
        callForm.classList.toggle("hidden-form");
        overlay.classList.toggle("overlay--hidden");
        
    }

    


    button.addEventListener("click", toggleModal);

    overlay.addEventListener("click", toggleModal);


    buttonClose.addEventListener("click", toggleModal);
}


export function modalFeetBack() {
    const button = document.querySelector(".modal-contact__list > li:nth-child(1) > button");
    const feetbackForm = document.querySelector(".feedback-form");
    const overlay = document.querySelector(".overlay-feedback");
    const buttonClose = document.querySelector(".feedback-form__burger > button");


    function toggleModal() {
        feetbackForm.classList.toggle("hidden-form");
        overlay.classList.toggle("overlay--hidden");

    }

    button.addEventListener("click", toggleModal);

    overlay.addEventListener("click", toggleModal);


    buttonClose.addEventListener("click", toggleModal);
}


export function wrapperModal() {
    const button = document.querySelector('.header__first-item > button');
    const modal = document.querySelector('.modal-window');
    const buttonClose = document.querySelector('.modal-menu__item--burger');
    const overlay = document.querySelector(".overlay-modal");

    function toggleModal() {
        modal.classList.toggle('modal-window-none');
        overlay.classList.toggle("overlay--hidden");
        

    }



    button.addEventListener("click", toggleModal);
    buttonClose.addEventListener("click", toggleModal);
    overlay.addEventListener("click", toggleModal);
}