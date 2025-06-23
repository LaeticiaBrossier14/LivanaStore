document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.querySelector('.product-form');
    if (!productForm) return;

    const variantSelects = productForm.querySelectorAll('select[name^="options"]');
    const variantIdInput = productForm.querySelector('input[name="id"]');

    variantSelects.forEach(select => {
        select.addEventListener('change', () => {
            const selectedOptions = Array.from(variantSelects).map(s => s.value);
            const productData = JSON.parse(document.getElementById('product-json').textContent);
            
            const selectedVariant = productData.variants.find(variant => {
                return selectedOptions.every((option, index) => {
                    return variant.options[index] === option;
                });
            });

            if (selectedVariant) {
                variantIdInput.value = selectedVariant.id;
            }
        });
    });
}); 