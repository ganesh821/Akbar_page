// nav link red color border:
  // Select all nav-links
  const navLinks = document.querySelectorAll('.nav-link');
    
  // Function to remove active class from all links
  function removeActiveClass() {
    navLinks.forEach(link => link.classList.remove('active'));
  }

  // Add click event listener to each nav-link
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      removeActiveClass(); // Remove active class from all
      this.classList.add('active'); // Add active class to clicked link
    });
  });

  // Initially focus on "About Us" (add the active class)
  document.querySelector('.nav-link.active').classList.add('active');



  document.getElementById('occasion-btn').addEventListener('click', function() {
    document.getElementById('occasion-img').style.display = 'block';
    document.getElementById('celebrations-img').style.display = 'none';
    document.getElementById('functions-img').style.display = 'none';
    reinitializeCarousel();
  });

  document.getElementById('celebrations-btn').addEventListener('click', function() {
    document.getElementById('occasion-img').style.display = 'none';
    document.getElementById('celebrations-img').style.display = 'block';
    document.getElementById('functions-img').style.display = 'none';
    reinitializeCarousel();
  });

  document.getElementById('functions-btn').addEventListener('click', function() {
    document.getElementById('occasion-img').style.display = 'none';
    document.getElementById('celebrations-img').style.display = 'none';
    document.getElementById('functions-img').style.display = 'block';
    reinitializeCarousel();
  });