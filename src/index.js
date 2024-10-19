import { pageload } from "./pageLoad.js";
import { menuload } from "./menu.js";
import { aboutload } from "./about.js";

import "./styles.css";

document.addEventListener('DOMContentLoaded' , () =>{
    const homeButton = document.querySelector('.home');
const menuButton = document.querySelector('.menu');
const aboutButton = document.querySelector('.about');

function clearContent() {
    const contentDiv = document.querySelector('#content'); 
    contentDiv.innerHTML = '';
}

pageload();

homeButton.addEventListener('click', () => {
    clearContent(); 
    pageload();     
});

menuButton.addEventListener('click', () => {
    clearContent(); 
    menuload();     

});

aboutButton.addEventListener('click', () => {
    clearContent(); 
    aboutload();    
});
})