#!/usr/bin/env node


const commands: Record<string, string> = {
  "rgbtohex": "Convert RGB values to HEX color code",
};

const [,, cmd, arg] = process.argv;

if (cmd === "help" || cmd === "") {
  if (arg && commands[arg]) {
    console.log(`${arg}: ${commands[arg]}`);
  } else {
    console.log("Available commands:");
    for (const [name, desc] of Object.entries(commands)) {
      console.log(`  ${name.padEnd(15)} ${desc}`);
    }
  }
  process.exit(0);
}

// if (cmd === "rgbtohex") {
//   datetimeformat();
// } else if (cmd === "bar") {
//   bar();
// } else {
//   console.log("Unknown command. Run 'dtutils help' to see all commands.");
//   process.exit(1);
// }