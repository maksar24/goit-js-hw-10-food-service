const checkbox = document.querySelector("#theme-switch-toggle");
const body = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

checkbox.addEventListener('input', toggleSwitch);

function toggleSwitch(e) {

    if (e.target.checked) {
        localStorage.setItem('theme', Theme.DARK);
        body.classList.replace(Theme.LIGHT, Theme.DARK);
    }

    else {
        localStorage.setItem('theme', Theme.LIGHT);
        body.classList.replace(Theme.DARK, Theme.LIGHT);
    }
};

const currentPosition = localStorage.getItem('theme');

if (currentPosition === Theme.DARK) {
    body.classList.add(Theme.DARK);
    checkbox.checked = true;
}
else {
    body.classList.add(Theme.LIGHT);
    checkbox.checked = false;  
};