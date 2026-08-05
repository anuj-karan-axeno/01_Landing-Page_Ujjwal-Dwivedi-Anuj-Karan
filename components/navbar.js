
export function createNavbar() {

    const navbar = document.createElement("header");

    navbar.classList.add("navbar");

    navbar.innerHTML = `
        <div class="container nav-content">

            <a href="index.html" class="logo">
                MyStore
            </a>

            <nav class="nav-links">
                <a href="../index.html">Home</a>
                <a href="../htmlPages/products.html">Products</a>
                <a href="../htmlPages/contact.html">Contact</a>
            </nav>

            <div class="theme-switcher">

                <label>
                    <input type="radio" name="theme" value="light">
                    Light
                </label>

                <label>
                    <input type="radio" name="theme" value="dark">
                    Dark
                </label>

            </div>

        </div>
    `;

    const themeOptions = navbar.querySelectorAll('input[name="theme"]');

    // Get saved theme or use dark by default
    const savedTheme = localStorage.getItem("theme") || "dark";

    // Apply theme
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
    }

    // Select correct radio button
    themeOptions.forEach((radio) => {
        if (radio.value === savedTheme) {
            radio.checked = true;
        }

        radio.addEventListener("change", () => {

            localStorage.setItem("theme", radio.value);

            if (radio.value === "dark") {
                document.body.classList.add("dark-theme");
            } else {
                document.body.classList.remove("dark-theme");
            }

        });
    });

    return navbar;
}