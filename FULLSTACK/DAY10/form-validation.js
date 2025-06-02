document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const message = document.getElementById('message');

  if (!name || !email || !password) {
    message.textContent = 'All fields are required.';
    message.style.color = 'red';
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    message.textContent = 'Invalid email address.';
    message.style.color = 'red';
    return;
  }

  if (password.length < 6) {
    message.textContent = 'Password must be at least 6 characters.';
    message.style.color = 'red';
    return;
  }
  message.style.color = 'green';
  message.textContent = 'Form submitted successfully!';
});