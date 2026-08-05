import { createProductCard } from '../../components/productCard.js';
import { fetchProducts } from '../scripts/productsAPI.js'
import { createNavbar } from '../../components/navbar.js';

import { createFooter } from '../../components/footer.js';

const footerContainer = document.getElementById('footer-container');
const navbarContainer = document.getElementById('navbar-container');




const API_URL = 'https://api.escuelajs.co/api/v1/products';

const productsContainer = document.getElementById('products-container');

const loadingElement = document.getElementById('loading');

const errorElement = document.getElementById('error');

const searchInput = document.getElementById('product-search');


let allProducts = [];

let currentSearch = '';




function searchProducts(searchTerm) {

  const filteredProducts = allProducts.filter((product) => {

    return product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

  });

  renderProducts(filteredProducts);
}


// Search Input Event
searchInput.addEventListener('input', (event) => {

  const searchTerm = event.target.value.trim();

  searchProducts(searchTerm);

});


async function initProductsPage() {

  try {

    const products = await fetchProducts(API_URL);

    allProducts = products;

    renderProducts(allProducts);

  } catch (error) {

    console.error(error);

    errorElement.style.display = 'block';

    errorElement.innerText =
      error.message || 'Unable to load products :(';

  } finally {

    loadingElement.style.display = 'none';

  }
}


function renderProducts(products) {

  productsContainer.innerHTML = '';

  if (products.length === 0) {

    productsContainer.innerHTML = `
            <p class="no-products">
                No products found.
            </p>
        `;

    return;
  }

  products.forEach((product) => {

    const card =
      createProductCard(product);

    productsContainer.appendChild(card);

  });
}


initProductsPage();

// Render Navbar
navbarContainer.appendChild(createNavbar());


// Render Footer
footerContainer.appendChild(createFooter());
