// Get form and input elements
const form = document.getElementById('signupForm');
const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const successMessage = document.getElementById('successMessage');

// Regular expressions for validation
const nameRegex = /^[A-Za-z\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{10,15}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

// Real-time validation functions
fullNameInput.addEventListener('input', () => validateField(fullNameInput, nameRegex, 'Invalid name (letters and spaces only)', 'fullNameError'));
emailInput.addEventListener('input', () => validateField(emailInput, emailRegex, 'Invalid email format', 'emailError'));
phoneInput.addEventListener('input', () => validateField(phoneInput, phoneRegex, 'Phone must be 10-15 digits', 'phoneError'));
passwordInput.addEventListener('input', () => validateField(passwordInput, passwordRegex, 'Password must be 8+ characters, include uppercase, lowercase, and number', 'passwordError'));

// Form submission handler
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateForm()) {
    successMessage.textContent = 'Form submitted successfully!';
    successMessage.style.color = '#00FF00'; // Green
    form.reset();
    clearErrors();
  } else {
    successMessage.textContent = '';
  }
});

// Function to validate a single field
function validateField(input, regex, errorMessage, errorElementId) {
  const errorElement = document.getElementById(errorElementId);
  if (!regex.test(input.value)) {
    input.classList.add('invalid');
    errorElement.textContent = errorMessage;
  } else {
    input.classList.remove('invalid');
    errorElement.textContent = '';
  }
}

// Function to validate the entire form
function validateForm() {
  let isValid = true;
  if (!nameRegex.test(fullNameInput.value)) {
    validateField(fullNameInput, nameRegex, 'Invalid name (letters and spaces only)', 'fullNameError');
    isValid = false;
  }
  if (!emailRegex.test(emailInput.value)) {
    validateField(emailInput, emailRegex, 'Invalid email format', 'emailError');
    isValid = false;
  }
  if (!phoneRegex.test(phoneInput.value)) {
    validateField(phoneInput, phoneRegex, 'Phone must be 10-15 digits', 'phoneError');
    isValid = false;
  }
  if (!passwordRegex.test(passwordInput.value)) {
    validateField(passwordInput, passwordRegex, 'Password must be 8+ characters, include uppercase, lowercase, and number', 'passwordError');
    isValid = false;
  }
  return isValid;
}

// Function to clear error messages
function clearErrors() {
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach((error) => (error.textContent = ''));
  const inputs = document.querySelectorAll('input');
  inputs.forEach((input) => input.classList.remove('invalid'));
}
