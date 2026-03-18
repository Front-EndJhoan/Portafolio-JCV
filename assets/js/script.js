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

const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
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
  },

  
  light:{
  '--bg-color': `
  radial-gradient(circle at 20% 20%,
   rgba(0,0,0,0.03), transparent 40%),
  radial-gradient(circle at 80% 30%,
  rgba(59,130,246,0.10), transparent 45%),
  linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)`,
  '--text-color': 'hsl(222, 47%, 11%)',
  '--bg-color-light': 'hsl(210, 40%, 98%)',
  '--main-components': 'rgb(164, 165, 169)',
  '--cards-bg': 'hsl(0, 0%, 100%)',
  '--nav-bg': 'rgba(255, 255, 255, 0.85)',
  '--nav-text': 'hsl(222, 47%, 11%)',
  '--nav-link': 'hsl(215, 16%, 40%)',
  '--nav-link-hover': 'hsl(222, 47%, 20%)',
  '--cta-bg': 'rgba(0, 16, 138, 1)',
  '--cta-text': 'hsl(0, 0%, 100%)',
  '--cta-border': 'rgba(59, 130, 246, 0.4)',
  '--heading-color': 'hsl(222, 47%, 11%)',
  '--muted-text': 'hsl(215, 16%, 50%)'
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

  const initialTheme = saved || (prefersDark ? 'dark' : 'light');
  applyTheme(initialTheme);
  localStorage.setItem('theme', initialTheme);
})();

const texto = "Scroll down";
let indiceLetra = 0;
let escribiendo = true;

const elemento = document.getElementById("text");

function efectoEscritura() {
  if (!elemento) return;

  if (escribiendo) {
    elemento.textContent = texto.slice(0, indiceLetra++);

    if (indiceLetra > texto.length) {
      escribiendo = false;
      setTimeout(efectoEscritura, 1000);
      return;
    }
  } else {
    elemento.textContent = texto.slice(0, indiceLetra--);

    if (indiceLetra <= 0) {
      escribiendo = true;
      setTimeout(efectoEscritura, 1000);
      return;
    }
  }

  setTimeout(efectoEscritura, escribiendo ? 100 : 50);
}

efectoEscritura();

