const bgImage = new Image();
bgImage.src = 'assets/images/background.png'; // Path to your new file

// Inside the game's "draw" or "render" function:
ctx.drawImage(bgImage, 0, 0, 1920, 1080); 
