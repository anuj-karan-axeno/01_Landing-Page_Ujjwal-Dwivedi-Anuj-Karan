export function createProductCard(product) {

    const card = document.createElement('article');

    card.classList.add('product-card');

    card.innerHTML = `
        <img 
            src="${product.images[0]}" 
            alt="${product.title}"
            loading="lazy"
        >

        <div class="product-info">

            <h2 class="product-title">
                ${product.title}
            </h2>

            <p class="product-price">
                $${product.price}
            </p>

            <p class="product-category">
                Category: ${product.category.name}
            </p>

            <p class="product-description">
                ${product.description}
            </p>

        </div>
    `;

    return card;
}