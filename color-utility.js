/**
 * Set the alpha channel of a hex color to a specific value
 * @param hexColor - the hex color code without the alpha value.
 * @param opacity - The opacity of the color.
 * @returns The hex color with the alpha value applied.
 */
export function setAlphaToHex(colorHex, alpha=1) {
  var alphaHex = Math.round(clamp(alpha, 0, 1) * 255);
  return colorHex + alphaHex.toString(16).toUpperCase();
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Given a color name, return the hex value of that color (Works only on browsers)
 * @param colorName - The name of the color you want to convert to hex.
 * @returns A string
 */
export function fromColorNameToHex(colorName) {
  try {
    const ctx = document.createElement("canvas").getContext("2d");
    ctx.fillStyle = colorName;
    return ctx.fillStyle
  } catch (e) { 
    throw new Error("Can't get color from name without a document");
  }
}

/**
 * Given an array of four numbers, return a string representing the color in RGBA format
 * @param rgba - an array of four numbers, each between 0 and 255, representing the red, green, blue,
 * and alpha values of the color.
 * @returns A string.
 */
export function toRGBAString(rgba) {
  return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + rgba[3] + ")";
}

/**
 * Given a color in hex format, convert it to an array of RGBA values
 * @param colorHex - the hexadecimal color code, e.g. #FFF or #FFFFFF
 * @returns An array of four numbers.
 */
export function fromColorHexToRGBA(colorHex) {
  let hexCode = colorHex.replace("#", "");
  hexCode = hexCode.length === 3 ? hexCode.split("").map(c => c + c).join("") : hexCode;
  if (hexCode.length === 6 || hexCode.length === 8) {
    var aRgbHex = hexCode.match(/.{1,2}/g);
    var aRgba = [
      parseInt(aRgbHex[0], 16),
      parseInt(aRgbHex[1], 16),
      parseInt(aRgbHex[2], 16),
      roundTo((parseInt((aRgbHex[3] || 'ff'), 16) / 255), 2)
    ];
    return aRgba;
  } else {
    throw new Error("Invalid color hex code");
  }
}

function roundTo(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}


/**
 * Given a color in hex format, return the color that contrasts with it
 * @param colorHex - the color in hex format
 * @returns The contrasting color is being returned.
 */
export function contrastingColor(colorHex, applyAlpha = false) {
  return (luma(colorHex, applyAlpha) >= 165) ? '#000000' : '#ffffff';
}


/**
 * Given a color in hex format, return the luma of that color
 * @param colorHex - the hexadecimal value of the color you want to analyze.
 * @returns The luma value of the color.
 */
export function luma(colorHex, applyAlpha = false) {
  const rgba = fromColorHexToRGBA(colorHex, applyAlpha);
  return roundTo((((0.2126 * rgba[0]) + (0.7152 * rgba[1]) + (0.0722 * rgba[2])) * (applyAlpha ? rgba[3] : 1)), 2);
}

