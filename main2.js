
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    const scrollY = window.scrollY;
  
    if (scrollY > 10) { // Adjust the scroll threshold as needed
      nav.classList.add('fixed');
    } else {
      nav.classList.remove('fixed');
    }
  });