const canvas = document.getElementById("pixelbg");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.zIndex = "-1";
  canvas.style.opacity = "0.07"; // subtle vibe
  canvas.style.pointerEvents = "none";
  canvas.style.imageRendering = "pixelated";
  canvas.style.backgroundColor = "#111";

  const gridSize = 80; // 🟦 BIGGER PIXELS
  const cols = Math.ceil(canvas.width / gridSize);
  const rows = Math.ceil(canvas.height / gridSize);

  const pattern = [
    0,1,0,0,0,0,0,0,
    0,0,1,0,0,0,0,0,
    0,0,0,1,0,0,0,0,
    0,0,0,0,1,0,0,0,
    0,0,0,0,0,1,0,0,
    0,0,0,0,0,0,1,0,
    0,0,0,0,0,0,0,1,
    0,0,0,0,0,0,0,0,
  ];

  let frame = 0;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const index = (frame + x + y) % pattern.length;
        const val = pattern[index];
        ctx.fillStyle = val ? "#0af" : "#111";
        ctx.fillRect(x * gridSize, y * gridSize, gridSize, gridSize);
      }
    }

    frame++;
  }

  setInterval(draw, 1000 / 4); // 👀 slow & vibey
