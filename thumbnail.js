const bgImage = new Image();
bgImage.src = 'assets/images/BSSModdedThumbnail (1).png'; 

// This function waits for the image to be fully ready
bgImage.onload = function() {
    ctx.drawImage(bgImage, 0, 0, 1920, 1080);
    // Put any code for BUTTONS here so they draw ON TOP of the background
};

