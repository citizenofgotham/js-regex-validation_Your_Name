document.getElementById('validationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    validateForm();
});

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

function validateName(name) {
    const regex = /^[A-Za-z\s]+$/;
    if (!regex.test(name)) {
        document.getElementById('nameError').textContent = 'Invalid name (only alphabetic characters and spaces allowed).';
        document.getElementById('fullName').style.borderColor = 'red';
        return false;
    } else {
        document.getElementById('nameError').textContent = '';
        document.getElementById('fullName').style.borderColor = '';
        return true;
    }
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email address.';
        document.getElementById('email').style.borderColor = 'red';
        return false;
    } else {
        document.getElementById('emailError').textContent = '';
        document.getElementById('email').style.borderColor = '';
        return true;
    }
}

function validatePhone(phone) {
    const regex = /^\d{10,15}$/;
    if (!regex.test(phone)) {
        document.getElementById('phoneError').textContent = 'Invalid phone number (10-15 digits only).';
        document.getElementById('phone').style.borderColor = 'red';
        return false;
    } else {
        document.getElementById('phoneError').textContent = '';
        document.getElementById('phone').style.borderColor = '';
        return true;
    }
}

function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!regex.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long, with one uppercase letter, one lowercase letter, and one number.';
        document.getElementById('password').style.borderColor = 'red';
        return false;
    } else {
        document.getElementById('passwordError').textContent = '';
        document.getElementById('password').style.borderColor = '';
        return true;
    }
}

// Real-time validation
document.getElementById('fullName').addEventListener('input', function () {
    validateName(this.value);
});
document.getElementById('email').addEventListener('input', function () {
    validateEmail(this.value);
});
document.getElementById('phone').addEventListener('input', function () {
    validatePhone(this.value);
});
document.getElementById('password').addEventListener('input', function () {
    validatePassword(this.value);
});
