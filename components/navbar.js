export function createNavbar() {

    const navbar = document.createElement('header');

    navbar.classList.add('navbar');

    navbar.innerHTML = `

        <div class="container nav-content">

            <a
                href="home.html"
                class="logo"
            >
                MyStore
            </a>


            <nav class="nav-links">

                <a href="home.html">
                    Home
                </a>

                <a href="products.html">
                    Products
                </a>

                <a href="contact.html">
                    Contact
                </a>
            </nav>

            <div class="theme-switcher" role="radiogroup" aria-label="Theme selection">

                <label class="theme-option">
                    <input type="radio" name="theme" value="light">
                    <span>Light</span>
                </label>

                <label class="theme-option">
                    <input type="radio" name="theme" value="dark">
                    <span>Dark</span>
                </label>

            </div>

        </div>

    `;

    const themeOptions = navbar.querySelectorAll('input[name="theme"]');
    const THEME_STORAGE_KEY = 'mystore-theme';

    function applyTheme(theme) {

        const isDark = theme === 'dark';

        document.body.classList.toggle('dark-theme', isDark);

        themeOptions.forEach((radio) => {

            radio.checked = radio.value === theme;

        });

    }

    try {

        const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || 'light';

        applyTheme(savedTheme);

    } catch (error) {

        applyTheme('light');

    }

    themeOptions.forEach((radio) => {

        radio.addEventListener('change', (event) => {

            const nextTheme = event.target.value;

            try {

                localStorage.setItem(THEME_STORAGE_KEY, nextTheme);

            } catch (error) {

                console.warn('Theme preference could not be saved:', error);

            }

            applyTheme(nextTheme);

        });

    });

    return navbar;
}