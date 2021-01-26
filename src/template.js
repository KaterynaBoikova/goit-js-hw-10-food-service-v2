import menuItemTemplate from './menu-item-template.hbs';
import menu from './menu.json';
const markup = menuItemTemplate(menu);
const menuListRef = document.querySelector('.js-menu');
menuListRef.insertAdjacentHTML("beforeend", markup);
