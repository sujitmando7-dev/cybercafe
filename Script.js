// Santosh CSC Center - JavaScript Features

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Contact form validation
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector('textarea').value.trim();

    if (!name || !email || !message) {
      alert('⚠️ Please fill out all fields before submitting.');
      return;
    }

    // Simple email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('❌ Please enter a valid email address.');
      return;
    }

    // Success message
    alert(`✅ Thank you, ${name}! Your message has been received.\nWe will contact you soon.`);
    form.reset();
  });
}
<script src="script.js"></script>
  ...
  <footer>
    <p>© 2025 Santosh CSC Center. All Rights Reserved.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
