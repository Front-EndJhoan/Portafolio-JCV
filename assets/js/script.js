//ANIMATION ON SCROLL//
function animateOnScroll() {
    const sections = document.querySelectorAll('.hero, .about, .skills, .experience, .contact');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight * 0.8) {
            section.classList.add('animate');
        } else {
            section.classList.remove('animate');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

//NAVIGATION BAR SCROLL EFFECT//
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
});

//BURGER MENU TOGGLE//
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

//CHANGE THEME TO LIGHT MODE//

const THEMES = {
  dark: {
    '--bg-color': `
      radial-gradient(circle at 20% 20%,
        rgba(255,255,255,0.06), transparent 40%),
      radial-gradient(circle at 80% 30%,
        rgba(59,130,246,0.25), transparent 45%),
      linear-gradient(180deg, #020617 0%, #000000 100%)`,
    '--text-color':       'hsl(193, 20%, 86%)',
    '--bg-color-light':   'hsl(193, 20%, 86%)',
    '--main-components':  'rgba(0, 16, 138, 1)',
    '--cards-bg':         'hsl(230, 67%, 11%)',
    '--nav-bg':           'rgba(2, 6, 23, 0.85)',
    '--nav-text':         'hsl(193, 20%, 86%)',
    '--nav-link':         'hsl(193, 15%, 70%)',
    '--nav-link-hover':   'hsl(193, 20%, 92%)',
    '--cta-bg':           'rgba(0, 16, 138, 1)',
    '--cta-text':         'hsl(193, 20%, 90%)',
    '--cta-border':       'rgba(59, 130, 246, 0.5)',
    '--heading-color':    'hsl(193, 25%, 92%)',
    '--muted-text':       'hsl(193, 15%, 65%)',
  },
  light: {
    '--bg-color': `
      radial-gradient(circle at 20% 20%,
        rgba(255,255,255,0.8), transparent 40%),
      radial-gradient(circle at 80% 30%,
        rgba(59,130,246,0.10), transparent 45%),
      linear-gradient(180deg, #f0f7f8 0%, #e2eff1 100%)`,
    '--text-color':       'hsl(193, 40%, 15%)',
    '--bg-color-light':   'hsl(193, 40%, 15%)',
    '--main-components':  '#1a6e7a',
    '--cards-bg':         '#3ad7ef',
    '--nav-bg':           'rgba(204, 213, 214, 0.92)',
    '--nav-text':         'hsl(193, 40%, 15%)',
    '--nav-link':         'hsl(193, 35%, 28%)',
    '--nav-link-hover':   'hsl(193, 40%, 10%)',
    '--cta-bg':           '#1a6e7a',
    '--cta-text':         '#f0f7f8',
    '--cta-border':       '#1a6e7a',
    '--heading-color':    'hsl(193, 45%, 10%)',
    '--muted-text':       'hsl(193, 30%, 35%)',
  }
};

function applyTheme(theme) {
  const root = document.documentElement;
  const vars = THEMES[theme];
  Object.entries(vars).forEach(([k, v]) => {
    root.style.setProperty(k, v);
  });
  root.setAttribute('data-theme', theme);
}

function toggleTheme() {
  const current = document.documentElement
    .getAttribute('data-theme') || 'dark';
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

(function init() {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia(
    '(prefers-color-scheme: dark)').matches;
  applyTheme(('light' ? 'dark' : 'light'));
})();

const texto = "Scroll down";
let indiceLetra = 0;
let escribiendo = true;

const elemento = document.getElementById("text");

function efectoEscritura() {

    if (escribiendo) {
        elemento.textContent = texto.slice(0, indiceLetra++);

        if (indiceLetra > texto.length) {
            escribiendo = false;
            setTimeout(efectoEscritura, 1000);
            return;
        }

    } else {
        elemento.textContent = texto.slice(0, indiceLetra--);

        if (indiceLetra === 0) {
            escribiendo = true;
        }
    }

    setTimeout(efectoEscritura, escribiendo ? 100 : 50);
}

efectoEscritura();

