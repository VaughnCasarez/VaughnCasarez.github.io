document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { id: 1, name: 'Bioworld', image: 'brand_logos/bioworld_logo.png', page: 'bioworld.html' },
        { id: 2, name: 'Boston America Corp', description: 'Powerful laptop with M2 chip.', image: 'brand_logos/bostamer_corp.jpg', page: 'construction.html' },
        { id: 3, name: 'Cloak', image: 'brand_logos/cloak_logo.png', page: 'construction.html' },
        { id: 4, name: 'Creator Ink', image: 'brand_logos/creatorink_logo.jpg', page: 'construction.html' },
        { id: 5, name: "Dave & Buster's", image: 'brand_logos/d&b_logo.png', page: 'construction.html' },
        { id: 6, name: 'FiGPiN', image: 'brand_logos/figpin_logo.png', page: 'construction.html' },
        { id: 7, name: 'Funko', description: 'Powerful laptop with M2 chip.', image: 'brand_logos/funko_logo.jpeg', page: 'construction.html' },
        { id: 8, name: 'FYE', image: 'brand_logos/fye_logo.png', page: 'construction.html' },
        { id: 9, name: 'Good Smile Company', image: 'brand_logos/gsc_logo.webp', page: 'construction.html' },
        { id: 10, name: 'Goodstuff', image: 'brand_logos/goodstuff_logo.png', page: 'construction.html' },
        { id: 11, name: 'Hex', image: 'brand_logos/hex_logo.png', page: 'construction.html' },
        { id: 12, name: 'Hot Topic', image: 'brand_logos/hottopic_logo.jpg', page: 'construction.html' },
        { id: 13, name: 'Illumix', image: 'brand_logos/illumix_logo.png', page: 'construction.html' },
        { id: 14, name: 'Insomnia Cookies', image: 'brand_logos/insomcook_logo.jpeg', page: 'construction.html' },
        { id: 15, name: 'Just Toys', image: 'brand_logos/justtoys_logo.jpeg', page: 'construction.html' },
        { id: 16, name: 'Loungefly', image: 'brand_logos/loungefly_logo.png', page: 'construction.html' },
        { id: 17, name: 'Lumen', image: 'brand_logos/lumen_logo.png', page: 'construction.html' },
        { id: 18, name: 'McFarland Toys', image: 'brand_logos/mcfarlane_logo.webp', page: 'construction.html' },
        { id: 19, name: 'Moose', image: 'brand_logos/moose_logo.png', page: 'construction.html' },
        { id: 20, name: 'Morbid Enterprise', image: 'brand_logos/morbid_logo.png', page: 'construction.html' },
        { id: 21, name: 'NECA', image: 'brand_logos/neca_logo.png', page: 'construction.html' },
        { id: 22, name: 'Phatmojo', image: 'brand_logos/phatmojo_logo.jpg', page: 'construction.html' },
        { id: 23, name: 'Pillow Pets', image: 'brand_logos/pillowpets_logo.jpg', page: 'construction.html' },
        { id: 24, name: 'Radz', image: 'brand_logos/radz_logo.png', page: 'construction.html' },
        { id: 25, name: 'Regal', image: 'brand_logos/regal_logo.png', page: 'construction.html' },
        { id: 26, name: "Rubie's", image: 'brand_logos/rubie_logo.png', page: 'construction.html' },
        { id: 27, name: 'Sanshee', image: 'brand_logos/sanshee_logo.avif', page: 'construction.html' },
        { id: 28, name: "Spencer's", image: 'brand_logos/spencer_logo.jpeg', page: 'construction.html' },
        { id: 29, name: 'Think Geek', image: 'brand_logos/thinkgeek_logo.png', page: 'construction.html' },
        { id: 30, name: 'Trends International', image: 'brand_logos/trends_logo.jpeg', page: 'construction.html' },
        { id: 31, name: 'Tsunameez', image: 'brand_logos/tsunameez_logo.jpeg', page: 'construction.html' },
        { id: 32, name: 'USAopoly', image: 'brand_logos/usaopoly_logo.jpeg', page: 'construction.html' },
        { id: 33, name: 'Walmart', image: 'brand_logos/walmart_logo.jpg', page: 'construction.html' },
        { id: 34, name: 'Youtooz', image: 'brand_logos/youtooz_logo.png', page: 'construction.html' }
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
            product.name.toLowerCase().includes(searchTerm)
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
