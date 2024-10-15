import { pageload } from "./pageLoad.js";
import { menuload } from "./menu.js";
import { aboutload } from "./about.js";

import "./styles.css";

// Select the navigation buttons
const homeButton = document.querySelector('.home');
const menuButton = document.querySelector('.menu');
const aboutButton = document.querySelector('.about');

// Function to clear the existing content before loading new content
function clearContent() {
    const contentDiv = document.querySelector('#content'); // Assuming your content area has the id "content"
    contentDiv.innerHTML = '';  // Clear existing content
}

// Load the default page (home page)
pageload();

// Add event listeners to the buttons
homeButton.addEventListener('click', () => {
    clearContent(); // Clear previous content
    pageload();     // Load the home page content
});

menuButton.addEventListener('click', () => {
    clearContent(); // Clear previous content
    menuload();     // Load the menu content
});

aboutButton.addEventListener('click', () => {
    clearContent(); // Clear previous content
    aboutload();    // Load the about page content
});
