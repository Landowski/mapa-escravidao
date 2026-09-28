const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const mobileMenu = document.getElementById('mobileMenu');
const header = document.querySelector('.header');
const botao = document.querySelector('.mostrar');
const hidden = document.querySelector('.hidden');

if (botao) {
    botao.addEventListener('click', function (event) {
        event.preventDefault();

        if (hidden.style.display === 'block') {
            hidden.style.display = 'none';
            botao.textContent = 'Mostrar';
        } else {
            hidden.style.display = 'block';
            botao.textContent = 'Ocultar';
        }
    });
}

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});