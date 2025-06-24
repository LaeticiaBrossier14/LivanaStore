document.addEventListener('DOMContentLoaded', () => {
  const filtersForm = document.getElementById('collection-filters-form');
  const sortSelect = document.getElementById('sort-by');
  const mobileFilterTrigger = document.getElementById('mobile-filter-trigger');
  const mobileFilterPanel = document.getElementById('mobile-filter-panel');
  const mobileFilterContent = document.querySelector('.mobile-filter-panel__content');
  const closeMobileFilters = document.getElementById('close-mobile-filters');
  const mobileFilterOverlay = document.getElementById('mobile-filter-overlay');

  if (filtersForm) {
    // Clone filters for mobile
    if (mobileFilterContent) {
      mobileFilterContent.innerHTML = filtersForm.innerHTML;
    }

    const inputs = document.querySelectorAll('#collection-filters-form input, .mobile-filter-panel__content input');

    function debounce(fn, wait) {
      let t;
      return (...args) => {
        clearTimeout(t);
        t = setTimeout(() => fn.apply(this, args), wait);
      };
    }

    const debouncedSubmit = debounce(() => {
      const form = window.innerWidth <= 768 ? document.querySelector('.mobile-filter-panel__content form') : filtersForm;
      const formData = new FormData(form);
      const searchParams = new URLSearchParams(formData);
      
      const sortValue = sortSelect ? sortSelect.value : '';
      if(sortValue) {
        searchParams.set('sort_by', sortValue);
      }

      const url = `${window.location.pathname}?${searchParams.toString()}`;

      fetch(url)
        .then(response => response.text())
        .then(text => {
          const html = new DOMParser().parseFromString(text, 'text/html');
          const newGrid = html.getElementById('product-grid');
          
          if (newGrid) {
            document.getElementById('product-grid').innerHTML = newGrid.innerHTML;
          }

          history.pushState({ path: url }, '', url);
        })
        .catch(e => {
          console.error(e);
        });
    }, 500);

    inputs.forEach(input => {
      input.addEventListener('input', (event) => {
        debouncedSubmit();
      });
    });

    if (sortSelect) {
      sortSelect.addEventListener('change', () => {
        debouncedSubmit();
      });
    }

    if (mobileFilterTrigger) {
      mobileFilterTrigger.addEventListener('click', () => {
        mobileFilterPanel.classList.add('is-active');
        mobileFilterOverlay.classList.add('is-active');
      });
    }

    if (closeMobileFilters) {
      closeMobileFilters.addEventListener('click', () => {
        mobileFilterPanel.classList.remove('is-active');
        mobileFilterOverlay.classList.remove('is-active');
      });
    }
    
    if (mobileFilterOverlay) {
        mobileFilterOverlay.addEventListener('click', () => {
            mobileFilterPanel.classList.remove('is-active');
            mobileFilterOverlay.classList.remove('is-active');
        });
    }
  }

  // Handle pagination clicks
  document.addEventListener('click', (event) => {
    const paginationLink = event.target.closest('.pagination a');
    if (paginationLink) {
      event.preventDefault();
      const url = paginationLink.href;
      
      fetch(url)
        .then(response => response.text())
        .then(text => {
          const html = new DOMParser().parseFromString(text, 'text/html');
          const newGrid = html.getElementById('product-grid');
           if (newGrid) {
            document.getElementById('product-grid').innerHTML = newGrid.innerHTML;
          }
           history.pushState({ path: url }, '', url);
           window.scrollTo(0, 0);
        })
        .catch(e => {
          console.error(e);
        });
    }
  });
}); 