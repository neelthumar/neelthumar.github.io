// JavaScript for the explore genres functionality

document.addEventListener('DOMContentLoaded', function () {
    const genreBoxes = document.querySelectorAll('.genre-box');

    genreBoxes.forEach(box => {
        box.addEventListener('click', function () {
            const genre = this.querySelector('h3').innerText;
            alert(`You selected the ${genre} genre. Implement navigation to the genre's page here.`);
            // Implement navigation logic here
        });
    });
});
