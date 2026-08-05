import { createNavbar } from '../../components/navbar.js';

import { createFooter } from '../../components/footer.js';

import { fetchProducts } from '../../scripts/scripts/productsAPI.js'

import { createProductCard } from '../../components/productCard.js'

const API_URL = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=4';

const navbarContainer = document.getElementById('navbar-container');


const footerContainer = document.getElementById('footer-container');

const featureProductContainerElement = document.getElementById('featured-products')

const loadingElement = document.getElementById('loading');

const errorElement = document.getElementById('error');

async function initHomePage() {

    loadingElement.style.display = 'block';

    try {

        const products = await fetchProducts(API_URL);

        renderProducts(products);

    } catch (error) {

     

        errorElement.style.display = 'block';

        errorElement.innerText =
            error.message || 'Unable to load products :(';

    } finally {

        loadingElement.style.display = 'none';

    }
}

function renderProducts(products) {

    featureProductContainerElement.innerHTML = '';

    if (products.length === 0) {

        featureProductContainerElement.innerHTML = `
            <p class="no-products">
                No products found.
            </p>
        `;

        return;
    }

    products.forEach((product) => {

        const card =
            createProductCard(product);

        featureProductContainerElement.appendChild(card);

    });
}

// Render Navbar
navbarContainer.appendChild(createNavbar());


// Render Footer
footerContainer.appendChild(createFooter());

initHomePage()

