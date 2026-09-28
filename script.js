const root = document.documentElement;
const toggle = document.querySelector('.theme-toggle');

function setTheme(theme) {
  if (theme === 'light') {
    root.classList.add('light');
    toggle.textContent = '☀️';
    localStorage.setItem('theme', 'light');
  } else {
    root.classList.remove('light');
    toggle.textContent = '🌙';
    localStorage.setItem('theme', 'dark');
  }
}

const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

toggle.addEventListener('click', () => {
  const isLight = root.classList.contains('light');
  setTheme(isLight ? 'dark' : 'light');
});

window.addEventListener('keydown', (event) => {
  if (event.key.toLowerCase() === 't') {
    toggle.click();
  }
});
