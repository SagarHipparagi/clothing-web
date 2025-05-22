// Sample product data (in a real app, this would come from a database)
const products = [
    {
        id: 1,
        name: "Striped Cotton Shirt",
        price: 299,
        image: "https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77024451_50.jpg?imwidth=2048&imdensity=1&ts=1721648192400",
        rating: 4,
        trending: true
    },
    {
        id: 2,
        name: "Slim Fit Jeans",
        price: 49.99,
        image: "https://images.bestsellerclothing.in/data/selected/24-sep-2024/900736901_g1.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto",
        rating: 5,
        trending: true
    },
    {
        id: 3,
        name: "Casual Summer Dress",
        price: 39.99,
        image: "https://images.bestsellerclothing.in/data/selected/24-sep-2024/900736901_g1.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto",
        rating: 4,
        trending: true
    },
    {
        id: 4,
        name: "Oversized Hoodie",
        price: 34.99,
        image: "https://images.bestsellerclothing.in/data/selected/24-sep-2024/900736901_g1.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto",
        rating: 3,
        trending: true
    },
    {
        id: 5,
        name: "Classic White Sneakers",
        price: 59.99,
        image: "https://images.bestsellerclothing.in/data/selected/24-sep-2024/900736901_g1.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto",
        rating: 5,
        trending: true
    },
    {
        id: 6,
        name: "Denim Jacket",
        price: 45.99,
        image: "https://images.bestsellerclothing.in/data/selected/24-sep-2024/900736901_g1.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto",
        rating: 4,
        trending: true
    },
    {
        id: 7,
        name: "Printed T-Shirt",
        price: 19.99,
        image: "https://images.bestsellerclothing.in/data/selected/24-sep-2024/900736901_g1.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto",
        rating: 3,
        trending: true
    },
    {
        id: 8,
        name: "Chino Pants",
        price: 39.99,
        image: "https://images.bestsellerclothing.in/data/selected/24-sep-2024/900736901_g1.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto",
        rating: 4,
        trending: true
    }
];

// Load products when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    loadTrendingProducts();
});

// Load trending products
function loadTrendingProducts() {
    const productsContainer = document.querySelector('.trending-products');
    productsContainer.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <div class="product-rating">
                    ${'★'.repeat(product.rating)}${'☆'.repeat(5 - product.rating)}
                </div>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        
        productsContainer.appendChild(productCard);
    });
    
    // Add event listeners to add-to-cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            alert(`Product ${productId} added to cart!`);
        });
    });
}

// Hero button click event
document.querySelector('.hero-btn').addEventListener('click', function() {
    alert('Redirecting to shop page!');
});