const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav'); // antes era getElementById('navMenu')

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('ativo');
        navMenu.classList.toggle('ativo');
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('ativo');
            navMenu.classList.remove('ativo');
        });
    });
}