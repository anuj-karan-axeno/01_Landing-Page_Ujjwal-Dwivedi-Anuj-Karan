export function createFooter() {

    const footer = document.createElement('footer');

    footer.classList.add('footer');

    footer.innerHTML = `

        <div class="container footer-content">

            <div>

                <h2>
                    MyStore
                </h2>

                <p>
                    Quality products for
                    everyday life.
                </p>

            </div>


            <div class="footer-links">

                <a href="home.html">
                    Home
                </a>

                <a href="products.html">
                    Products
                </a>

                <a href="contact.html">
                    Contact
                </a>

            </div>

        </div>


        <div class="footer-bottom">

            <p>
                © 2026 MyStore.
                All rights reserved.
            </p>

        </div>

    `;

    return footer;
}