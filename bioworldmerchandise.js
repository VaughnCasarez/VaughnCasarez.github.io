document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { id: 1, name: 'Clothes', description: 'The latest iPhone with advanced features.', image: 'hat.jpg', page: 'bioworld.html' },
        { id: 2, name: 'Backpacks', description: 'Powerful laptop with M2 chip.', image: 'shirt.jpg', page: 'Bioworld/backpack.html' },
        { id: 3, name: 'Blankets', description: 'The latest iPhone with advanced features.', image: 'brand_logos/bioworld_logo.png', page: 'bioworld.html' },
        { id: 4, name: 'Keychain', description: 'The latest iPhone with advanced features.', image: 'brand_logos/bioworld_logo.png', page: 'bioworld.html' },
        { id: 5, name: 'Lunchboxes', description: 'The latest iPhone with advanced features.', image: 'brand_logos/bioworld_logo.png', page: 'bioworld.html' },
        { id: 6, name: 'Patches', description: 'The latest iPhone with advanced features.', image: 'brand_logos/bioworld_logo.png', page: 'bioworld.html' },
        {id: 7, name: 'Water Bottles', description: 'The latest iPhone with advanced features.', image: 'brand_logos/bioworld_logo.png', page: 'bioworld.html' },
        {id: 8, name: 'Wristband', description: 'The latest iPhone with advanced features.', image: 'brand_logos/bioworld_logo.png', page: 'bioworld.html' }
    ];

    const productList = document.querySelector('.product-list');
    const searchInput = document.getElementById('search');
    const sortSelect = document.getElementById('sort');

    function renderProducts(productsToRender) {
        productList.innerHTML = '';
        productsToRender.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.innerHTML = `
                <a href="${product.page}">
                    <img src="${product.image}" alt="${product.name}">
                </a>
            `;
            productList.appendChild(productItem);
        });
    }

    function filterAndSortProducts() {
        let filteredProducts = products;

        // Search functionality
        const searchTerm = searchInput.value.toLowerCase();
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );

        // Sort functionality
        const sortBy = sortSelect.value;
        filteredProducts.sort((a, b) => {
            if (a[sortBy] < b[sortBy]) return -1;
            if (a[sortBy] > b[sortBy]) return 1;
            return 0;
        });

        renderProducts(filteredProducts);
    }

    // Initial render
    renderProducts(products);

    // Event listeners
    searchInput.addEventListener('input', filterAndSortProducts);
    sortSelect.addEventListener('change', filterAndSortProducts);
});
