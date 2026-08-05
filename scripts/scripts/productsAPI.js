export async function fetchProducts(API_URL) {

    const response = await fetch(API_URL);
    if (!response.ok) {

        throw new Error(
            'Failed to fetch products'
        );

    }


    const products =
        await response.json();


    return products;
}