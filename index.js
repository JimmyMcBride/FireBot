// Set up bot 🤖
const { Client } = require("discord.js");
const bot = new Client();

// Hide the token 🙈
require("dotenv/config");

// Break up bot into multiple files 💔
const fs = require("fs");
const Enmap = require("enmap");

// Set new commands 💬
bot.commands = new Enmap();

// Let's us know bot is online 🍏
bot.on("ready", () => {
  console.log("FireBot is live!!!");
  bot.user.setActivity("with fire!");
});

// Set up event file directories 🌄
fs.readdir("./events/", (err, files) => {
  if (err) console.error;
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    const evt = require(`./events/${file}`);
    const evtName = file.split(".")[0];
    console.log(`Loaded event ${evtName}`);
    bot.on(evtName, evt.bind(null, bot));
  });
});

// Set up message commands 💬
fs.readdir("./commands/", async (err, files) => {
  if (err) return;
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    const props = require(`./commands/${file}`);
    const cmdName = file.split(".")[0];
    console.log(`Loaded command ${cmdName}`);
    bot.commands.set(cmdName, props);
  });
});

// Login bot 🌳
bot.login(process.env.TOKEN);
