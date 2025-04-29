document.addEventListener('DOMContentLoaded', () => {
  const giftBox = document.getElementById('gift-box');
  const mainContent = document.getElementById('main-content');
  const backgroundMusic = document.getElementById('background-music');

  // Add click event to the gift box
  giftBox.addEventListener('click', () => {
    giftBox.style.display = 'none';       // Hide the gift box
    mainContent.style.display = 'block';  // Show the main content
    backgroundMusic.play();               // Play the music
  });
});