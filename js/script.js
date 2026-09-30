const text = "Software Engineer focused on Laravel & Full-Stack Development.";

let index = 0;

function typeText() {
    if (index < text.length) {
        document.getElementById("typing").textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 60);
    }
}

typeText();
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#nav-menu');

function closeMenu() {
    menu.classList.remove('open');
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
}

toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.classList.toggle('active', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
});

// close the menu after tapping a link
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));