/**
 * Calculates the dimensions and offset needed to draw an image onto a canvas
 * simulating the CSS `object-fit: cover` behavior.
 * 
 * @param {HTMLImageElement} img - The image to draw
 * @param {HTMLCanvasElement} canvas - The target canvas
 * @returns {Object} { drawWidth, drawHeight, offsetX, offsetY }
 */
export function getCoverMath(img, canvas) {
  const canvasRatio = canvas.width / canvas.height;
  const imgRatio = img.width / img.height;
  
  let drawWidth = canvas.width;
  let drawHeight = canvas.height;
  let offsetX = 0;
  let offsetY = 0;

  if (imgRatio > canvasRatio) {
    // Image is wider than canvas
    drawWidth = canvas.height * imgRatio;
    offsetX = (canvas.width - drawWidth) / 2;
  } else {
    // Canvas is wider than image
    drawHeight = canvas.width / imgRatio;
    offsetY = (canvas.height - drawHeight) / 2;
  }

  return { drawWidth, drawHeight, offsetX, offsetY };
}
