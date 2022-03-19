import * as firstPage from "./firstpage";
import * as secondPage from "./menupage";
const content = document.querySelector('.content')
firstPage.firstPageLoad()

const homeTab = document.querySelector('.home');
homeTab.addEventListener('click',() => firstPage.firstPageLoad());
const menuTab = document.querySelector('.menu');
menuTab.addEventListener('click',() => secondPage.menuPageLoad());
