document.getElementById('incubatorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Helper function for regex validation
    function validateField(value, pattern, errorMessage) {
        const regex = new RegExp(pattern);
        if (!regex.test(value)) {
            alert(errorMessage);
            return false;
        }
        return true;
    }

    // Retrieve form field values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('contact').value;
    const linkedin = document.getElementById('linkedin').value;
    const website = document.getElementById('website').value;
    const funding = document.getElementById('funding').value;

    // Validate required fields
    if (name.trim() === '') {
        alert('Please enter your full name.');
        return;
    }

    // Validate email
    const emailPattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';
    if (!validateField(email, emailPattern, 'Please enter a valid email address.')) {
        return;
    }

    // Validate phone number (India)
    const phonePattern = '^([6789])[0-9]{9}$'; // Indian phone numbers start with 7, 8, or 9 and are 10 digits long
    if (!validateField(phone, phonePattern, 'Please enter a valid 10-digit Indian phone number starting with 7, 8, or 9.')) {
        return;
    }

    // Validate LinkedIn URL (optional)
    const linkedinPattern = '^https?://(www\\.)?linkedin\\.com/in/[^\\s/$.?#].[^\\s]*$';
    if (linkedin && !validateField(linkedin, linkedinPattern, 'Please enter a valid LinkedIn profile URL.')) {
        return;
    }

    // Validate website URL (optional)
    const websitePattern = '^https?://[^\\s/$.?#].[^\\s]*$';
    if (website && !validateField(website, websitePattern, 'Please enter a valid website URL.')) {
        return;
    }

    // Validate funding (optional)
    if (funding && isNaN(funding)) {
        alert('Please enter a valid number for funding.');
        return;
    }

    // If all validations pass
    alert('Application submitted successfully!');

    // Reset the form
    this.reset();
});
