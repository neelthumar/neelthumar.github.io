function skip(value, videoId) {
    const video = document.getElementById(videoId);
    video.currentTime += value;
}

function toggleFullscreen(videoId) {
    const video = document.getElementById(videoId);
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { /* Firefox */
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE/Edge */
        video.msRequestFullscreen();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const movieList = document.getElementById('movie-list');

    const movies = [
        {
            title: "Movie 1",
            src: "Dune (2021).mkv",
            id: "video1"
        },
        {
            title: "Movie 2",
            src: "movie2.mp4",
            id: "video2"
        }
        // Add more movies as needed
    ];

    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');
        movieItem.innerHTML = `
            <h3>${movie.title}</h3>
            <video id="${movie.id}" controls>
                <source src="${movie.src}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <button onclick="skip(-10, '${movie.id}')">Back 10s</button>
            <button onclick="skip(10, '${movie.id}')">Forward 10s</button>
            <button onclick="toggleFullscreen('${movie.id}')">Fullscreen</button>
            <a href="${movie.src}" download="${movie.src}">Download</a>
        `;
        movieList.appendChild(movieItem);
    });
});
