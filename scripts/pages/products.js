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

const sortSelect = document.getElementById('sort-products');


let allProducts = [];

let currentSearch = '';

let currentSort = 'default';


function getFilteredProducts(searchTerm) {

  return allProducts.filter((product) => {

    return product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

  });
}


function sortProducts(products) {

  const sortedProducts = [...products];

  if (currentSort === 'low-high') {

    sortedProducts.sort((a, b) => a.price - b.price);

  } else if (currentSort === 'high-low') {

    sortedProducts.sort((a, b) => b.price - a.price);

  }

  return sortedProducts;
}


function searchProducts(searchTerm) {

  currentSearch = searchTerm;

  const filteredProducts = getFilteredProducts(searchTerm);

  renderProducts(sortProducts(filteredProducts));
}


// Search Input Event
searchInput.addEventListener('input', (event) => {

  const searchTerm = event.target.value.trim();

  searchProducts(searchTerm);

});


sortSelect.addEventListener('change', (event) => {

  currentSort = event.target.value;

  const filteredProducts = getFilteredProducts(currentSearch);

  renderProducts(sortProducts(filteredProducts));

});


async function initProductsPage() {

  try {

    const products = await fetchProducts(API_URL);

    allProducts = products;

    renderProducts(sortProducts(getFilteredProducts(currentSearch)));

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
