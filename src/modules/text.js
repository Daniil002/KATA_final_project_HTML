export function adjustText() {
    const textElInfo = document.querySelector('.main-description-info__text');

    const textElLink = document.querySelector('.main-description-link a')
    const screenWidth = window.innerWidth;

    if (screenWidth > 768) {
        textElInfo.innerHTML = "Все цены указаны с учетом НДС. Стоимость ремонта указана <br> на единичную услугу. Для получения коммерческого <br> предложения на постоянное обслуживание, оставьте заявку."
        
    }else {
        textElInfo.innerHTML = "Все цены указаны с учетом НДС.<br> Стоимость ремонта указана на<br> единичную услугу. Для получения<br> коммерческого предложения на<br> постоянное обслуживание, оставьте заявку."
    }


    window.addEventListener('resize', adjustText);
    window.addEventListener('load', adjustText);
}