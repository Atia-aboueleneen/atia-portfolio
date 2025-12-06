
      // Mobile Navigation Toggle
      const mobileToggle = document.querySelector('.mobile-toggle');
      const nav = document.querySelector('nav');
      
      mobileToggle.addEventListener('click', () => {
          nav.classList.toggle('active');
          mobileToggle.innerHTML = nav.classList.contains('active') 
              ? '<i class="fas fa-times"></i>' 
              : '<i class="fas fa-bars"></i>';
      });
      
      // Close mobile menu when clicking a link
      document.querySelectorAll('nav a').forEach(link => {
          link.addEventListener('click', () => {
              nav.classList.remove('active');
              mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
          });
      });
      
      // Header scroll effect
      const header = document.getElementById('header');
      window.addEventListener('scroll', () => {
          if (window.scrollY > 50) {
              header.classList.add('header-scrolled');
          } else {
              header.classList.remove('header-scrolled');
          }
      });
      
      // Form submission
      const contactForm = document.getElementById('contactForm');
      contactForm.addEventListener('submit', (e) => {
          e.preventDefault();
          
          // Get form values
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const subject = document.getElementById('subject').value;
          const message = document.getElementById('message').value;
          
          // In a real application, you would send this data to a server
          // For demo purposes, we'll just show an alert
          alert(`Thank you for your message, ${name}! I'll get back to you soon at ${email}.`);
          
          // Reset form
          contactForm.reset();
      });
      
      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function(e) {
              e.preventDefault();
              
              const targetId = this.getAttribute('href');
              if (targetId === '#') return;
              
              const targetElement = document.querySelector(targetId);
              if (targetElement) {
                  window.scrollTo({
                      top: targetElement.offsetTop - 80,
                      behavior: 'smooth'
                  });
              }
          });
      });
      
      // Set active navigation link based on scroll position
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('nav a');
      
      window.addEventListener('scroll', () => {
          let current = '';
          
          sections.forEach(section => {
              const sectionTop = section.offsetTop;
              const sectionHeight = section.clientHeight;
              
              if (scrollY >= (sectionTop - 150)) {
                  current = section.getAttribute('id');
              }
          });
          
          navLinks.forEach(link => {
              link.classList.remove('active');
              if (link.getAttribute('href') === `#${current}`) {
                  link.classList.add('active');
              }
          });
      });
      
      // Print functionality
      const printBtn = document.querySelector('.social-link[onclick]');
      printBtn.addEventListener('click', (e) => {
          e.preventDefault();
          window.print();
      });
