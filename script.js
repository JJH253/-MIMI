// Heart animation background
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

class Heart {
  constructor(x, y, size, speed) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
    this.alpha = Math.random() * 0.5 + 0.5;
  }
  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.scale(this.size, this.size);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(0, -3, -5, -15, -15, -15);
    ctx.bezierCurveTo(-35, -15, -35, 10, -35, 10);
    ctx.bezierCurveTo(-35, 25, -20, 35, 0, 50);
    ctx.bezierCurveTo(20, 35, 35, 25, 35, 10);
    ctx.bezierCurveTo(35, 10, 35, -15, 15, -15);
    ctx.bezierCurveTo(5, -15, 0, -3, 0, 0);
    ctx.closePath();
    ctx.fillStyle = `rgba(255, 105, 180, ${this.alpha})`;
    ctx.fill();
    ctx.restore();
  }
  update() {
    this.y -= this.speed;
    if (this.y < -50) {
      this.y = canvas.height + 50;
      this.x = Math.random() * canvas.width;
    }
    this.draw();
  }
}

for (let i = 0; i < 25; i++) {
  hearts.push(new Heart(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 0.2 + 0.1, Math.random() * 1 + 0.5));
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach(h => h.update());
  requestAnimationFrame(animate);
}
animate();

// Unmute sound
const video = document.getElementById('mainVideo');
const unmuteBtn = document.getElementById('unmuteBtn');

unmuteBtn.addEventListener('click', () => {
  video.muted = false;
  video.play().catch(() => {});
  unmuteBtn.style.display = 'none';
});

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
