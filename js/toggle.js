function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');

    if (body.getAttribute('data-theme') === 'dark') {
    body.setAttribute('data-theme', 'light');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    } else {
    body.setAttribute('data-theme', 'dark');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    }
}

