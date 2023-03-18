let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let fullDate = day + "/" + month + "/" + year;
document.getElementById("date").innerHTML = fullDate;

const themeToggle = document.querySelector('#theme-toggle');

themeToggle.addEventListener('click', () => {
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = 'Modo claro';
    } else {
        themeToggle.textContent = 'Modo escuro';
    }
});