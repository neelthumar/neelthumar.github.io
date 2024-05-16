// JavaScript for the community functionality

document.addEventListener('DOMContentLoaded', function () {
    const postButton = document.querySelector('.new-post button');
    const textarea = document.querySelector('.new-post textarea');
    const communityContent = document.querySelector('.community-content');

    postButton.addEventListener('click', function () {
        const newPostText = textarea.value.trim();
        if (newPostText) {
            const newPost = document.createElement('div');
            newPost.classList.add('post');
            newPost.innerHTML = `<h3>Username</h3><p>${newPostText}</p>`;
            communityContent.appendChild(newPost);
            textarea.value = '';
        } else {
            alert('Please enter some text to post.');
        }
    });
});
