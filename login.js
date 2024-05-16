// JavaScript for the login functionality

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('form');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Dummy login logic for demonstration
        if (email === 'user@example.com' && password === 'password') {
            alert('Login successful!');
            window.location.href = 'home.html';
        } else {
            alert('Invalid email or password. Please try again.');
        }
    });
});
