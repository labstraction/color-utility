/**
 * Set the alpha channel of a hex color to a specific value
 * @param hexColor - the hex color code without the alpha value.
 * @param opacity - The opacity of the color.
 * @returns The hex color with the alpha value applied.
 */
export function setAlpha(hexColor, opacity){
  var _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return hexColor + _opacity.toString(16).toUpperCase();
}

/**
 * Convert a color string to an rgba or rgb string
 * @param colorString - The color string to convert to an RGBA string.
 * @returns The RGBA values of the color.
 */
export function fromColorStringToRGBA(colorString){
  if (document) {
    const canvas = document.createElement("canvas");
    canvas.height = 1;
    canvas.width = 1;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 1, 1);
    return ctx.getImageData(0, 0, 1, 1).data;
  } else {
    const r = parseInt(colorString.slice(1, 3), 16);
    const g = parseInt(colorString.slice(3, 5), 16);
    const b = parseInt(colorString.slice(5, 7), 16);
    const alpha = parseInt(colorString.slice(7, 9), 16);

    if (alpha) {
      return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
      return "rgb(" + r + ", " + g + ", " + b + ")";
    }
  }
}

/**
 * Given a hex color, return the color that would be a better contrast
 * @param hexColor - The hex value of the color you want to analyze.
 * @returns a string.
 */
export function getContrastingColor(hexColor){
  if (hex.indexOf("#") === 0) {
    hex = hex.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
    throw new Error("Invalid HEX color.");
  }
  var r = parseInt(hex.slice(0, 2), 16),
    g = parseInt(hex.slice(2, 4), 16),
    b = parseInt(hex.slice(4, 6), 16);

  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000000" : "#FFFFFF";
}
