// Converts a hex color string to an "R G B" string.
// Example: "#FF6347" -> "255 99 71"
export const hexToRgbString = (hex: string): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) {
    // Return a default or throw an error if hex is invalid
    console.warn(`Invalid hex color: ${hex}, defaulting to black.`);
    return "0 0 0"; 
  }
  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);
  return `${r} ${g} ${b}`;
};
