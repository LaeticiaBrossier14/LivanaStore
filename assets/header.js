document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.header-livana__hamburger');
    const mobileNav = document.querySelector('#mobile-nav');
    const cartIcon = document.querySelector('.header-livana__cart-icon');
    const cartDrawer = document.querySelector('#cart-drawer');
    const cartDrawerClose = document.querySelector('.cart-drawer__close');
    const cartDrawerOverlay = document.querySelector('#cart-drawer-overlay');

    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            mobileNav.classList.toggle('is-active');
        });
    }

    const toggleCartDrawer = () => {
        cartDrawer.classList.toggle('is-active');
        cartDrawerOverlay.classList.toggle('is-active');
    };

    if (cartIcon && cartDrawer && cartDrawerClose && cartDrawerOverlay) {
        cartIcon.addEventListener('click', (e) => {
            e.preventDefault();
            toggleCartDrawer();
        });

        cartDrawerClose.addEventListener('click', toggleCartDrawer);
        cartDrawerOverlay.addEventListener('click', toggleCartDrawer);
    }
}); 