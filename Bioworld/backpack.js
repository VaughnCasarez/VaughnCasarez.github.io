document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { id: 1, name: 'backpack1', description: 'The latest iPhone with advanced features.', image: 'backpacks/backpack1.jpeg', page: 'bioworld.html' },
        { id: 2, name: 'backpack2', description: 'Powerful laptop with M2 chip.', image: 'backpacks/backpack2.webp', page: '' },
        { id: 3, name: 'backpack3', description: 'The latest iPhone with advanced features.', image: 'brand_logos/bioworld_logo.png', page: 'bioworld.html' },
        { id: 4, name: 'backpack4', description: 'The latest iPhone with advanced features.', image: 'brand_logos/bioworld_logo.png', page: 'bioworld.html' },
        { id: 5, name: 'backpack5', description: 'The latest iPhone with advanced features.', image: 'brand_logos/bioworld_logo.png', page: 'bioworld.html' },
        { id: 6, name: 'backpack6', description: 'The latest iPhone with advanced features.', image: 'brand_logos/bioworld_logo.png', page: 'bioworld.html' },
        {id: 7, name: 'backpack7', description: 'The latest iPhone with advanced features.', image: 'brand_logos/bioworld_logo.png', page: 'bioworld.html' },
        {id: 8, name: 'backpack8', description: 'The latest iPhone with advanced features.', image: 'brand_logos/bioworld_logo.png', page: 'bioworld.html' },
        {id: 9, name: 'backpack9', description: 'The latest iPhone with advanced features.', image: 'brand_logos/bioworld_logo.png', page: 'bioworld.html' },
        {id: 10, name: 'backpack10', description: 'The latest iPhone with advanced features.', image: 'brand_logos/bioworld_logo.png', page: 'bioworld.html' },
        {id: 11, name: 'backpack11', description: 'The latest iPhone with advanced features.', image: 'brand_logos/bioworld_logo.png', page: 'bioworld.html' }
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
