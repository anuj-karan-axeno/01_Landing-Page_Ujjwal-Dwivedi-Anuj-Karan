import { createNavbar } from '../../components/navbar.js';

import { createFooter } from '../../components/footer.js';

const footerContainer = document.getElementById('footer-container');
const navbarContainer = document.getElementById('navbar-container');


// Render Navbar
navbarContainer.appendChild(createNavbar());


// Render Footer
footerContainer.appendChild(createFooter());
