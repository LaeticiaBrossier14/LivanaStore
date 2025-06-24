document.addEventListener('DOMContentLoaded', () => {
    const productForms = document.querySelectorAll('.product-form');
    if (productForms.length === 0) return;

    productForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);

            fetch('/cart/add.js', {
                method: 'POST',
                body: formData,
                headers: { 'X-Requested-With': 'XMLHttpRequest' }
            })
            .then(response => response.json())
            .then(cart => {
                renderCartDrawer(cart);
                document.querySelector('#cart-drawer').classList.add('is-active');
                document.querySelector('#cart-drawer-overlay').classList.add('is-active');
            })
            .catch(error => console.error('Error:', error));
        });
    });

    function renderCartDrawer(cart) {
        const cartDrawerContent = document.querySelector('.cart-drawer__content');
        const cartDrawerFooter = document.querySelector('.cart-drawer__footer');
        const cartCountElement = document.querySelector('.cart-item-count');

        if (!cartDrawerContent || !cartDrawerFooter || !cartCountElement) return;

        cartDrawerContent.innerHTML = ''; // Clear existing items
        cart.items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <div class="cart-item__product">
                    <a href="${item.url}"><img src="${item.image}" alt="${item.title}" loading="lazy"></a>
                    <div>
                        <a href="${item.url}">${item.product_title}</a>
                        <p>${item.variant_title || ''}</p>
                        <p class="cart-item__price">${(item.price / 100).toFixed(2)}</p>
                        <p>Qty: ${item.quantity}</p>
                    </div>
                </div>
                <a href="/cart/change?line=${item.line_index}&quantity=0" class="cart-item__remove">Remove</a>
            `;
            cartDrawerContent.appendChild(itemElement);
        });

        document.querySelector('.cart-drawer__subtotal-price').textContent = `${(cart.total_price / 100).toFixed(2)}`;
        cartCountElement.textContent = cart.item_count;
    }

    // Initial render on page load
    fetch('/cart.js').then(res => res.json()).then(renderCartDrawer);
}); 