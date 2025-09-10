import { rgbToHex } from "./dist/rgbtohex/rgbToHex.js";


async function main() {
  const red = 255;
  const green = 100;
  const blue = 50;

  const hexColor = rgbToHex(red, green, blue);
  console.log(`RGB(${red}, ${green}, ${blue}) -> Hex: ${hexColor}`);
}

main();