const mongoose = require("mongoose");
const chalk = require("chalk");

async function main() {
  await mongoose.connect(process.env.MONGODB_CONN_STRING || 'mongodb://localhost:27017/calendar-app');
  console.log(
    "%s Mongodb connected at %s.",
    chalk.yellow("✓"),
    process.env.MONGODB_CONN_STRING
  );
}

main().catch((err) => console.log(err));
