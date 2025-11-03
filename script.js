const video = document.getElementById("mainVideo");
const unmuteBtn = document.getElementById("unmuteBtn");

// allow sound on user tap (for mobile browsers)
unmuteBtn.addEventListener("click", () => {
  video.muted = false;
  video.play();
  unmuteBtn.style.display = "none";
});

// floating hearts
const background = document.querySelector(".background");
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";
  background.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 500);
