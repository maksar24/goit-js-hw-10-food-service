import info from '../menu.json';
import templatesMenu from '../templates/list_menu.hbs';

const menu = document.querySelector(".js-menu");
menu.insertAdjacentHTML('afterbegin', templatesMenu(info));