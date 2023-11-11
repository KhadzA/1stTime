document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('back-to-top-btn');
  
    window.addEventListener('scroll', function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    });
  
    backToTopButton.addEventListener('click', function () {
      document.body.scrollTop = 0; 
      document.documentElement.scrollTop = 0; 
    });
  });
  