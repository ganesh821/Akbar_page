function showInfo(card) {
  // Remove the 'clicked' class from all person cards
  const allCards = document.querySelectorAll('.person-card');
  allCards.forEach(c => c.classList.remove('clicked'));
  
  // Add the 'clicked' class to the clicked card
  card.classList.add('clicked');
}


// Select all the nav-link elements
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






// Function to handle scroll event
// function handleScroll() {
//   const sections = document.querySelectorAll('.akbar-year, .Timeline-section');
//   const windowHeight = window.innerHeight;

//   sections.forEach(section => {
//     const rect = section.getBoundingClientRect();
    
   
//     if (rect.top >= 0 && rect.top <= windowHeight / 2) {
//       section.classList.add('active');
//       section.classList.remove('fade');
//     } else {
//       section.classList.remove('active');
//       section.classList.add('fade');
//     }
//   });
// }

// window.addEventListener('scroll', handleScroll);


// window.onload = handleScroll;





// window.addEventListener('scroll', function() {

//   const sections = document.querySelectorAll('.Timeline-section');
//   const buttons = document.querySelectorAll('.btn-custom');
//   const lines = document.querySelectorAll('.btn-line'); 

//   sections.forEach((section, index) => {
//       const rect = section.getBoundingClientRect();

    
//       if (rect.top < window.innerHeight && rect.bottom > 0) {
        
//           buttons[index].classList.add('active-btn');
//           lines[index].classList.add('active-line');

         
//           section.classList.add('active');
//           section.previousElementSibling.classList.add('active');
//       } else {
          
//           buttons[index].classList.remove('active-btn');
//           lines[index].classList.remove('active-line');

          
//           section.classList.remove('active');
//           section.previousElementSibling.classList.remove('active');
//       }
//   });
// });



