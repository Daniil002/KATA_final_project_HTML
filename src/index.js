import "@babel/polyfill";
import "./index.html";
import "./index.scss";


import {mult, sum, swiperFirst, swiperSecond, swiperThird } from "./modules/calc";
import { buttonArticleText, buttonContenCard, buttonMain, buttons} from "./modules/buttons-more";
import { adjustText } from "./modules/text";
import { modalContact, modalFeetBack, wrapperModal } from "./modules/modals";




console.log(mult(5, 5))
console.log(sum(5, 5))
swiperFirst()
swiperSecond()
swiperThird()
buttonMain()
buttons()
buttonContenCard()
adjustText()
modalContact()
modalFeetBack()
wrapperModal()
buttonArticleText()



