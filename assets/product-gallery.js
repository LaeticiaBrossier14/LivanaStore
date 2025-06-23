document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.product-gallery__thumbnails .thumbnail');
    const mainImage = document.getElementById('main-product-image');

    if (thumbnails.length > 0 && mainImage) {
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                const newSrc = thumbnail.src.replace('_100x', '_800x');
                mainImage.src = newSrc;
            });
        });
    }
}); 