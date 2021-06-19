// Set up bot 🦠
const { Client, Collection } = require("discord.js")
const bot = new Client()

const { prefix, token } = require("./config")

// Break up bot into multiple files 💔
const fs = require("fs")

// Set new commands 💬
bot.commands = new Collection()

// Let's us know bot is online 🍏
bot.on("ready", () => {
  console.log("FireBot is live!")
  bot.user.setActivity("with fire!")
})

// Set up event file directories 🌄
const eventFiles = fs
  .readdirSync("./events")
  .filter((file) => file.endsWith(".js"))

for (const file of eventFiles) {
  const event = require(`./events/${file}`)
  console.log(`Loaded event: ${event.name}`)
  if (event.once) {
    bot.once(event.name, (...args) => event.execute(...args, bot))
  } else {
    bot.on(event.name, (...args) => event.execute(...args, bot))
  }
}

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"))

for (const file of commandFiles) {
  const command = require(`./commands/${file}`)
  // set a new item in the Collection
  // with the key as the command name and the value as the exported module
  bot.commands.set(command.name, command)
  console.log("Loaded command:", command.name)
}

bot.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return

  const args = message.content.slice(prefix.length).trim().split(/ +/)
  const command = args.shift().toLowerCase()

  if (!bot.commands.has(command)) return

  try {
    bot.commands.get(command).execute(message, args)
  } catch (error) {
    console.error(error)
    message.reply("there was an error trying to execute that command!")
  }
})

// fs.readdir("./events/", (err, files) => {
//   if (err) console.error
//   files.forEach((file) => {
//     if (!file.endsWith(".js")) return
//     const evt = require(`./events/${file}`)
//     const evtName = file.split(".")[0]
//     console.log(`Loaded event ${evtName}`)
//     bot.on(evtName, evt.bind(null, bot))
//   })
// })

// Set up message commands 💬
// fs.readdir("./commands/", async (err, files) => {
//   if (err) return
//   files.forEach((file) => {
//     if (!file.endsWith(".js")) return
//     const props = require(`./commands/${file}`)
//     const cmdName = file.split(".")[0]
//     console.log(`Loaded command: ${cmdName}`)
//     bot.commands.set(cmdName, props)
//   })
// })

// Login bot 🌳
bot.login(token)
