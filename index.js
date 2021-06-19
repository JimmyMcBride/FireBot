// Set up bot 🦠
const { Client, Collection } = require("discord.js")
const client = new Client()

// Hide the token 🙈
require("dotenv/config")

// Break up client into multiple files 💔
const fs = require("fs")

// Set new commands 💬
client.commands = new Collection()

// Let's us know client is online 🍏
client.on("ready", () => {
  console.log("FireBot is live!")
  client.user.setActivity("with fire!")
})

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"))

for (const file of commandFiles) {
  const command = require(`./commands/${file}`)
  // set a new item in the Collection
  // with the key as the command name and the value as the exported module
  client.commands.set(command.name, command)
  console.log("Loaded command:", command.name)
}

// const prefix = "!"

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return

  const args = message.content.slice(prefix.length).trim().split(/ +/)
  const command = args.shift().toLowerCase()

  if (!client.commands.has(command)) return

  try {
    client.commands.get(command).execute(message, args)
  } catch (error) {
    console.error(error)
    message.reply("there was an error trying to execute that command!")
  }
})

// Set up event file directories 🌄
// const eventFiles = fs
//   .readdirSync("./events")
//   .filter((file) => file.endsWith(".js"))

// for (const file of eventFiles) {
//   const event = require(`./events/${file}`)
//   console.log(`Loaded event: ${event.name}`)
//   if (event.once) {
//     client.once(event.name, (...args) => event.execute(...args))
//   } else {
//     client.on(event.name, (...args) => event.execute(...args))
//   }
// }
// fs.readdir("./events/", (err, files) => {
//   if (err) console.error
//   files.forEach((file) => {
//     if (!file.endsWith(".js")) return
//     const evt = require(`./events/${file}`)
//     const evtName = file.split(".")[0]
//     console.log(`Loaded event ${evtName}`)
//     client.on(evtName, evt.bind(null, client))
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
//     client.commands.set(cmdName, props)
//   })
// })

// Login client 🌳
client.login(process.env.TOKEN)
