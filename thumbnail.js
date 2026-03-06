const bgImage = new Image();
bgImage.src = 'assets/images/BSSModdedThumbnail (1).png'; 

bgImage.onload = function() {
    // Ensure the canvas matches your 1080p target resolution
    canvas.width = 1920;
    canvas.height = 1080;
    
    // Draw the image to fill the entire canvas
    ctx.drawImage(bgImage, 0, 0, 1920, 1080); 
    
    // --- DRAW BUTTONS HERE ---
    // Example: drawPlayButton();
};
