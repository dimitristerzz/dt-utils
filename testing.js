import { dateTimeFormat } from "./dist/index.js";
import { getServerUtcTime } from "./dist/datetimeformat/getServerUtcTime.js";


async function main() {
  const serverTime = await getServerUtcTime();
  console.log("Server UTC time:", serverTime.toISOString());
}

main();