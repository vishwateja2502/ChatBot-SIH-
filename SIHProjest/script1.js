
function validateForm() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');

    if (username === '' || email === '' || password === '') {
        errorMessage.textContent = 'Please fill out all fields.';
        return false; // Prevent form submission
    }

    errorMessage.textContent = ''; // Clear error message
    // Allow form submission and redirect
    setTimeout(() => {
        window.location.href = 'trasport.html'; 
    }, 500); 
    return false;
}