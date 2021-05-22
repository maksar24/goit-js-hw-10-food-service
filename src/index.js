import './sass/main.scss';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkbox = document.querySelector("#theme-switch-toggle");
const body = document.querySelector('body');

if (localStorage.getItem('theme') === Theme.DARK) {
    body.classList.add(Theme.DARK);
    checkbox.checked = true;
}
else {
    body.classList.add(Theme.LIGHT);
    checkbox.checked = false;  
}

checkbox.addEventListener('input', toggleSwitch);

function toggleSwitch(e) {

    if (e.target.checked) {
        localStorage.setItem('theme', Theme.DARK);
        body.classList.remove(...body.classList);
        body.classList.add(localStorage.getItem('theme'));
    }

    else {
        localStorage.setItem('theme', Theme.LIGHT);
        body.classList.remove(...body.classList);
         body.classList.add(localStorage.getItem('theme'));
    }
};



