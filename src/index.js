import { homepage } from "./homepage.js";
import { menu } from "./menu.js"
import { about } from "./about.js"

const content = document.querySelector(".content");
content.appendChild(homepage());


const homeButton = document.querySelector(".home-content");
homeButton.addEventListener("click", () => {
    content.textContent = ""; // textContent is enough when rendering static and simple content. otherwise can use firstChild conditional to remove.
    content.appendChild(homepage());
});

const menuButton = document.querySelector(".menu-content");
menuButton.addEventListener("click", () => {
    content.textContent = ""; // textContent is enough when rendering static and simple content. otherwise can use firstChild conditional to remove.
    content.appendChild(menu());
});

const aboutButton = document.querySelector(".about-content");
aboutButton.addEventListener("click", () => {
    content.textContent = ""; // textContent is enough when rendering static and simple content. otherwise can use firstChild conditional to remove.
    content.appendChild(about());
});


// best practice here? on button click - need to clear content div, then show?
// default will be home page when page is loaded.
// then when the nav menu is clicked, 

