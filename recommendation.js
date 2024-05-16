// JavaScript for the personalized recommendations page

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.preferences-form form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const genre = document.querySelector('#genre').value;
        const year = document.querySelector('#year').value;
        alert(`Preferences Updated: Genre - ${genre}, Year - ${year}`);
        // Fetch and update recommendations based on new preferences
        updateRecommendations(genre, year);
    });

    function updateRecommendations(genre, year) {
        // Example function to update recommendations
        // This should be replaced with actual API call to fetch recommendations
        console.log(`Fetching recommendations for Genre: ${genre}, Year: ${year}`);
        // Clear existing recommendations
        const movieGrid = document.querySelector('.movie-grid');
        movieGrid.innerHTML = '';
        // Dummy movie data (should be replaced with actual API data)
        const movies = [
            { title: 'New Movie 1', genre: genre, year: year, image: 'movie1.jpg' },
            { title: 'New Movie 2', genre: genre, year: year, image: 'movie2.jpg' },
        ];
        // Add new recommendations
        movies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');
            movieCard.innerHTML = `
                <img src="${movie.image}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>Genre: ${movie.genre}</p>
                <p>Release Year: ${movie.year}</p>
            `;
            movieGrid.appendChild(movieCard);
        });
    }
});
