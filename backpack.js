document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { id: 1, name: 'backpack1', description: 'The latest iPhone with advanced features.', image: 'backpacks/backpack1.jpeg', page: 'backpack1.html' },
        { id: 2, name: 'backpack2', description: 'Powerful laptop with M2 chip.', image: 'backpacks/backpack2.png', page: 'construction.html' },
        { id: 3, name: 'backpack3', description: 'The latest iPhone with advanced features.', image: 'backpacks/backpack3.png', page: 'construction.html' },
        { id: 4, name: 'backpack4', description: 'The latest iPhone with advanced features.', image: 'backpacks/backpack4.png', page: 'construction.html' },
        { id: 5, name: 'backpack5', description: 'The latest iPhone with advanced features.', image: 'backpacks/backpack5.png', page: 'construction.html' },
        { id: 6, name: 'backpack6', description: 'The latest iPhone with advanced features.', image: 'backpacks/backpack6.png', page: 'construction.html' },
        {id: 7, name: 'backpack7', description: 'The latest iPhone with advanced features.', image: 'backpacks/backpack7.png', page: 'construction.html' },
        {id: 8, name: 'backpack8', description: 'The latest iPhone with advanced features.', image: 'backpacks/backpack8.png', page: 'construction.html' },
        {id: 9, name: 'backpack9', description: 'The latest iPhone with advanced features.', image: 'backpacks/backpack9.png', page: 'construction.html' },
        {id: 10, name: 'backpack10', description: 'The latest iPhone with advanced features.', image: 'backpacks/backpack10.png', page: 'construction.html' }
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
