export const drawRect = (detections, ctx) => {
  // Loop through each prediction
  detections.forEach((prediction) => {
    // Extract boxes and classes
    const [x, y, width, height] = prediction["bbox"];
    const text = prediction["class"];

    // Set styling
    const color = Math.floor(Math.random() * 16777215).toString(16);
    ctx.strokeStyle = "#" + color;
    ctx.font = "22px Arial";

    // Draw rectangles and text
    ctx.beginPath();

    ctx.fillStyle = "#1a1a1a";
    ctx.fillRect(x, y - 25, ctx.measureText(text).width + 10, 25);
    
    ctx.fillStyle = "#f0f0f0";
    ctx.fillText(text, x + 5, y - 5);

    ctx.fillStyle = "#" + color;
    ctx.rect(x, y, width, height);
    ctx.stroke();
  });
};
