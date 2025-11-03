// 🌸 Floating Hearts + Sparkles Animation

const particlesContainer = document.querySelector('.particles');

// Function to create a floating heart
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '💖';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 4 + Math.random() * 3 + 's';
  particlesContainer.appendChild(heart);

  // Remove heart after it floats away
  setTimeout(() => {
    heart.remove();
  }, 7000);
}

// Function to create glowing sparkles
function createSparkle() {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');
  sparkle.style.left = Math.random() * 100 + 'vw';
  sparkle.style.top = Math.random() * 100 + 'vh';
  sparkle.style.animationDuration = 3 + Math.random() * 2 + 's';
  particlesContainer.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 5000);
}

// Generate hearts and sparkles every few milliseconds
setInterval(createHeart, 600);
setInterval(createSparkle, 400);

// Optional: Soft floating animation for background blobs
const blobs = document.querySelectorAll('.blob');
blobs.forEach((blob, i) => {
  let x = 0, y = 0, direction = 1;

  setInterval(() => {
    x += (Math.random() - 0.5) * 2;
    y += (Math.random() - 0.5) * 2;
    blob.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
  }, 2000 + i * 500);
});
