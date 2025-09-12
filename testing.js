import { formatColor } from "./dist/index.js";

console.log(formatColor("#FF0000", "hsl"));
console.log(formatColor("0,128,255", "hsl"));
console.log(formatColor({ r: 255, g: 255, b: 0 }, "rgb"));