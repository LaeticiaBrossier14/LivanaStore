document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.header-livana__hamburger');
    const mobileNav = document.querySelector('#mobile-nav');

    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            mobileNav.classList.toggle('is-active');
        });
    }
}); 