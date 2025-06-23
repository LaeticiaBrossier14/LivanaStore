document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.querySelector('.product-form');
    if (!productForm) return;

    productForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(productForm);

        fetch('/cart/add.js', {
            method: 'POST',
            body: formData,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
        .then(response => response.json())
        .then(data => {
            updateCartCount();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });

    function updateCartCount() {
        fetch('/cart.js')
        .then(response => response.json())
        .then(data => {
            const cartCountElement = document.querySelector('.cart-item-count');
            if (cartCountElement) {
                cartCountElement.textContent = data.item_count;
            }
        });
    }
}); 