// Add event listener for form submission
document.getElementById('validationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    validateForm();
});

// Function to validate the entire form
function validateForm() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    const nameValid = validateName(fullName);
    const emailValid = validateEmail(email);
    const phoneValid = validatePhone(phone);
    const passwordValid = validatePassword(password);

    if (nameValid && emailValid && phoneValid && passwordValid) {
        document.getElementById('successMessage').textContent = 'Form submitted successfully!';
    } else {
        document.getElementById('successMessage').textContent = '';
    }
}

// Real-time validation for Full Name
document.getElementById('fullName').addEventListener('input', function () {
    validateName(this.value);
});

// Real-time validation for Email
document.getElementById('email').addEventListener('input', function () {
    validateEmail(this.value);
});

// Real-time validation for Phone Number
document.getElementById('phone').addEventListener('input', function () {
    validatePhone(this.value);
});

// Real-time validation for Password
document.getElementById('password').addEventListener('input', function () {
    validatePassword(this.value);
});

// Validation functions
function validateName(name) {
    const regex = /^[A-Za-z\s]+$/;
    if (!regex.test(name)) {
        document.getElementById('nameError').textContent = 'Invalid name (only alphabetic characters and spaces allowed).';
        document.getElementById('fullName').classList.add('invalid');
        return false;
    } else {
        document.getElementById('nameError').textContent = '';
        document.getElementById('fullName').classList.remove('invalid');
        return true;
    }
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email address.';
        document.getElementById('email').classList.add('invalid');
        return false;
    } else {
        document.getElementById('emailError').textContent = '';
        document.getElementById('email').classList.remove('invalid');
        return true;
    }
}

function validatePhone(phone) {
    const regex = /^\d{10,15}$/;
    if (!regex.test(phone)) {
        document.getElementById('phoneError').textContent = 'Invalid phone number (10-15 digits only).';
        document.getElementById('phone').classList.add('invalid');
        return false;
    } else {
        document.getElementById('phoneError').textContent = '';
        document.getElementById('phone').classList.remove('invalid');
        return true;
    }
}

function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!regex.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long, with one uppercase letter, one lowercase letter, and one number.';
        document.getElementById('password').classList.add('invalid');
        return false;
    } else {
        document.getElementById('passwordError').textContent = '';
        document.getElementById('password').classList.remove('invalid');
        return true;
    }
}
