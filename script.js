document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMessage = document.getElementById('formMessage');

  if (name && email && message) {
    // Simulate form submission
    formMessage.style.color = 'green';
    formMessage.textContent = "Thanks! Your message has been sent.";
    this.reset();
  } else {
    formMessage.style.color = 'red';
    formMessage.textContent = "Please fill in all required fields.";
  }
});
