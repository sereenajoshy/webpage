document.addEventListener("DOMContentLoaded", function() {
    const columns = document.querySelectorAll('.scolumn');
  
    function checkScroll() {
      columns.forEach(column => {
        const rect = column.getBoundingClientRect();
        const windowHeight = window.innerHeight;
  
        if (rect.top < windowHeight && rect.bottom > 0) {
          column.classList.add('animate');
        } else {
          column.classList.remove('animate');
        }
      });
    }
  
    // Check scroll on page load and scroll
    checkScroll();
    window.addEventListener('scroll', checkScroll);
  });