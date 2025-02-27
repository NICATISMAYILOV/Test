document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessages = document.querySelectorAll('.error-message');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Reset any previous error messages
        errorMessages.forEach(message => message.classList.add('hidden'));

        // Validate form fields
        let isValid = true;

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const eventName = document.getElementById('event');

        // Name Validation
        if (name.value.trim() === '') {
            name.nextElementSibling.classList.remove('hidden');
            isValid = false;
        }

        // Email Validation
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email.value.trim())) {
            email.nextElementSibling.classList.remove('hidden');
            isValid = false;
        }

        // Event Name Validation
        if (eventName.value.trim() === '') {
            eventName.nextElementSibling.classList.remove('hidden');
            isValid = false;
        }

        if (isValid) {
            // Show success message and hide form
            form.style.display = 'none';
            successMessage.classList.remove('hidden');

            // Optionally, send form data to the server here (e.g., using fetch or AJAX)
            console.log('Form Submitted:', {
                name: name.value,
                email: email.value,
                event: eventName.value
            });
        }
    });
});
