#!/usr/bin/env nodenpm

function datetimeformat() {
  console.log("Running datetimeformat function...");
}

function bar() {
  console.log("Running bar function...");
}

const commands = {
  "datetimeformat": "Formats a date/time string",
  "bar": "Does bar stuff"
};

const [,, cmd, arg] = process.argv;

if (cmd === "help") {
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

if (cmd === "datetimeformat") {
  datetimeformat();
} else if (cmd === "bar") {
  bar();
} else {
  console.log("Unknown command. Run 'dtutils help' to see all commands.");
  process.exit(1);
}