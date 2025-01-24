// Smooth scroll effect for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Console greeting
  console.log('Welcome to Money Master Web! Explore and enjoy.');
  
  // Dark/Light mode toggle
  const modeToggleButton = document.getElementById('mode-toggle');
  const body = document.body;
  
  // Check if dark mode is already active
  if (localStorage.getItem('mode') === 'dark') {
    body.classList.add('dark-mode');
    modeToggleButton.textContent = '🌞'; // Set button text to sun for dark mode
  }
  
  // Toggle dark mode on button click
  modeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Save the mode in localStorage
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('mode', 'dark');
      modeToggleButton.textContent = '🌞'; // Change button text to sun
    } else {
      localStorage.setItem('mode', 'light');
      modeToggleButton.textContent = '🌙'; // Change button text to moon
    }
  });
  