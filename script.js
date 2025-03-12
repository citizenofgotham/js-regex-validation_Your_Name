document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault();
  if (validateForm()) {
    document.getElementById('successMessage').textContent = 'Form submitted successfully!';
    document.getElementById('successMessage').style.display = 'block';
  }
});

function validateForm() {
  let isValid = true;

  // Full Name Validation
  const fullName = document.getElementById('fullName').value;
  const fullNameError = document.getElementById('fullNameError');
  if (!/^[A-Za-z\s]+$/.test(fullName)) {
    fullNameError.textContent = 'Full Name should only contain alphabetic characters and spaces.';
    fullNameError.style.display = 'block';
    document.getElementById('fullName').classList.add('invalid');
    isValid = false;
  } else {
    fullNameError.style.display = 'none';
    document.getElementById('fullName').classList.remove('invalid');
  }

  // Email Validation
  const email = document.getElementById('email').value;
  const emailError = document.getElementById('emailError');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailError.textContent = 'Please enter a valid email address.';
    emailError.style.display = 'block';
    document.getElementById('email').classList.add('invalid');
    isValid = false;
  } else {
    emailError.style.display = 'none';
    document.getElementById('email').classList.remove('invalid');
  }

  // Phone Number Validation
  const phone = document.getElementById('phone').value;
  const phoneError = document.getElementById('phoneError');
  if (!/^\d{10,15}$/.test(phone)) {
    phoneError.textContent = 'Phone Number should contain 10-15 digits.';
    phoneError.style.display = 'block';
    document.getElementById('phone').classList.add('invalid');
    isValid = false;
  } else {
    phoneError.style.display = 'none';
    document.getElementById('phone').classList.remove('invalid');
  }

  // Password Validation
  const password = document.getElementById('password').value;
  const passwordError = document.getElementById('passwordError');
  if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {
    passwordError.textContent = 'Password must be at least 8 characters, including one uppercase letter, one lowercase letter, and one number.';
    passwordError.style.display = 'block';
    document.getElementById('password').classList.add('invalid');
    isValid = false;
  } else {
    passwordError.style.display = 'none';
    document.getElementById('password').classList.remove('invalid');
  }

  return isValid;
}

// Real-time validation
document.querySelectorAll('input').forEach(input => {
  input.addEventListener('input', function () {
    validateForm();
  });
});
