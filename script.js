document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("accountRegistrationForm");

    form.addEventListener("input", function (event) {
        validateInput(event.target);
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (validateForm()) {
            document.getElementById("successMessage").textContent = "🎉 Account successfully registered!";
            form.reset();
        }
    });

    function validateInput(input) {
        let errorSpan = document.getElementById(input.id + "Error");
        let isValid = false;

        if (input.id === "username") {
            isValid = /^[A-Za-z\s]+$/.test(input.value);
            errorSpan.textContent = isValid ? "" : "❌ Only alphabetic characters allowed";
        } else if (input.id === "email") {
            isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
            errorSpan.textContent = isValid ? "" : "❌ Enter a valid email address";
        } else if (input.id === "phone") {
            isValid = /^\d{10,15}$/.test(input.value);
            errorSpan.textContent = isValid ? "" : "❌ Enter a valid phone number (10-15 digits)";
        } else if (input.id === "password") {
            isValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(input.value);
            errorSpan.textContent = isValid ? "" : "❌ Password must be 8+ chars, 1 uppercase, 1 number";
        }

        input.style.borderColor = isValid ? "green" : "red";
        return isValid;
    }

    function validateForm() {
        let isValid = true;
        ["username", "email", "phone", "password"].forEach(id => {
            let input = document.getElementById(id);
            if (!validateInput(input)) {
                isValid = false;
            }
        });
        return isValid;
    }
});
