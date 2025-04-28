document.addEventListener('DOMContentLoaded', () => {
  const giftBox = document.getElementById('gift-box');
  const mainContent = document.getElementById('main-content');
  const backgroundMusic = document.getElementById('background-music');

  // Add fade-out effect to the body
  document.body.classList.add('fade-out');

  // Show the gift box after the fade-out animation
  setTimeout(() => {
    giftBox.style.display = 'flex';  // Show the gift box
  }, 1000);  // Match the duration of the fade-out animation (1 second)

  // Add click event to the gift box
  giftBox.addEventListener('click', () => {
    giftBox.style.display = 'none';       // Hide the gift box
    mainContent.style.display = 'block';  // Show the main content
    backgroundMusic.play();               // Play the music
  });
});