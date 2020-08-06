document.addEventListener('DOMContentLoaded', () => {

  const themeStylesheet = document.getElementById('theme');
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    themeStylesheet.href = storedTheme;
  }
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    if (themeStylesheet.href.includes('light')) {
      themeStylesheet.href = 'css/dark-theme.css';
      $('svg').css({
        stroke: "#e9befe"
      });
    } else {
      themeStylesheet.href = 'css/light-theme.css';
      $('svg').css({
        stroke: "#000000"
      });
    }
    localStorage.setItem('theme', themeStylesheet.href)
  })
})
