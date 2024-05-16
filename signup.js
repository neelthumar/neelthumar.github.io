// JavaScript for the signup functionality

document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.querySelector('form');

    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Dummy signup logic for demonstration
        if (name && email && password) {
            alert('Signup successful! Welcome to Movie Magic.');
            window.location.href = 'index.html';
        } else {
            alert('Please fill out all fields.');
        }
    });
});
