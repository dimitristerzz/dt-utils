import { color } from "./dist/color/index.js";

function testRgbToHex(r, g, b) {
  const hex = color.rgbToHex(r, g, b);
  console.log(`RGB (${r}, ${g}, ${b}) to HEX:`, hex);
}

function testHexToRgb(hex) {
  const rgb = color.hexToRgb(hex);
  console.log(`HEX (${hex}) to RGB:`, rgb);
}

const myRgb = [255, 255, 255];
const myHex = "#FFFFFF";

testRgbToHex(...myRgb);
testHexToRgb(myHex);