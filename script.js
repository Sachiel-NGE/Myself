const Button = document.getElementById('mybutton');
const myVideo = document.getElementById('Video');

Button.addEventListener('click', () => {
    myVideo.style.display = 'block'; // Show the video
    myVideo.play();
});

myVideo.addEventListener('ended', () => {
    // Replace 'next-page.html' with your actual next page URL
    window.location.href = 'https://sachiel-nge.github.io/Myself/BetterAnimeList/Layout.html';
});