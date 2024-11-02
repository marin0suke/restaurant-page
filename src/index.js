import { homepage } from "./homepage.js";
import { menu } from "./menu.js"


const content = document.querySelector(".content");
content.appendChild(homepage());

const menu = document.querySelector(".menu");
content.appendChild(menu());

const about = document.querySelector(".about");
content.appendChild(about());

// best practice here? on button click - need to clear content div, then show?
// default will be home page when page is loaded.
// then when the nav menu is clicked, 

