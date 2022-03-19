import * as firstPage from "./firstpage";
import * as secondPage from "./menupage";
import * as contactPage from "./contactpage.js"

firstPage.firstPageLoad()

const homeTab = document.querySelector('.home');
homeTab.addEventListener('click',() => firstPage.homePageLoad());

const menuTab = document.querySelector('.menu');
menuTab.addEventListener('click',() => secondPage.menuPageLoad())

const contactTab = document.querySelector('.contact');
contactTab.addEventListener('click', () => contactPage.loadContactPage())