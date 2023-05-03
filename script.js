// Smooth scrolling for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form submission
const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();

  // Code to submit form data to server
  // ...

  alert('Message sent successfully!');
  form.reset();
});

// Hide navigation menu on mobile devices after clicking a link
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show');
  });
});

// Change navigation menu background color when scrolling
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Load portfolio items from an API
const portfolioItems = document.querySelector('.portfolio-items');

fetch('https://api.example.com/portfolio')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      const html = `
        <div class="portfolio-item">
          <img src="${item.image}" alt="${item.title}">
          <div class="portfolio-item-overlay">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <a href="${item.link}" target="_blank">Visit Site</a>
          </div>
        </div>
      `;
      portfolioItems.innerHTML += html;
    });
  })
  .catch(error => {
    console.error(error);
  });
