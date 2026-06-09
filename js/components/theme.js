export default function themeToggle() {
    // Defaults to light theme
    let selectedTheme = localStorage.getItem('selectedTheme') || 'light';
    // DOM Queries
    const themeToggleBtn = document.querySelector('.theme-toggle');
    // Guard
    if (!themeToggleBtn) {
        return;
    }
    const lightIcon = themeToggleBtn.querySelector('.theme-toggle--light');
    const darkIcon = themeToggleBtn.querySelector('.theme-toggle--dark');
    // On mount
    renderThemeUI(selectedTheme, lightIcon, darkIcon);
    // On click
    themeToggleBtn.addEventListener('click', () => {
        // Flips the theme state
        selectedTheme = selectedTheme === 'light' ? 'dark' : 'light';
        // Then save it to the localStorage
        updateThemeState(selectedTheme);
        // Updates the DOM
        renderThemeUI(selectedTheme, lightIcon, darkIcon);
    });
}

function renderThemeUI(theme, lightIcon, darkIcon) {
    if (theme === 'light') {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        lightIcon.style.display = 'none';
        darkIcon.style.display = 'block';
    } else if (theme === 'dark') {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        darkIcon.style.display = 'none';
        lightIcon.style.display = 'block';
    }
}

function updateThemeState(theme) {
    localStorage.setItem('selectedTheme', theme);
}