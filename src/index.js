import "./style.css"
import {homePage} from "./home";
import {menuPage} from "./menu";
import {contactPage} from "./contact";

const content = document.getElementById("content");

const renderPage = (component) => {
	content.textContent = "";
	content.appendChild(component());
}

renderPage(homePage);

document.getElementById("home").addEventListener("click", () => renderPage(homePage));
document.getElementById("menu").addEventListener("click", () => renderPage(menuPage));
document.getElementById("contact").addEventListener("click", () => renderPage(contactPage));

