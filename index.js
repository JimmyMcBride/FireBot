const { Client, Attachment } = require('discord.js')
const bot = new Client()

require('dotenv/config')
require('./index')

const config = require('./config.json')
const token = process.env.TOKEN

bot.on('ready', () => {
    console.log('Fire Mage is online!')
})

bot.on('message', msg => {
    let args = msg.content.substring(config.prefix.length).split(' ')

    let randomNumber = Math.floor(Math.random() * 100) + 1
    let emoji = () => {
        if (randomNumber > 1 && randomNumber < 25) {
            return '☠️'
        } else if (randomNumber > 26 && randomNumber < 50) {
            return '💩'
        }
        else if (randomNumber > 51 && randomNumber < 75) {
            return '😏'
        } else if (randomNumber > 76 && randomNumber < 100) {
            return '🔥'
        }
    }

    if (msg.content === 'what is my avatar') {
      msg.reply(msg.author.avatarURL)
    }

    switch(args[0]){

      case 'intro':
        msg.channel.send(`Hey, ${msg.author}! I'm a discord bot built by the **ALL MIGHTY** 🔥 Fire Ninja 🔥.
You can type **!roll** to get a random number between 1-100.
Also, try typing **!ping** or **!marco** to play a game!`)
        break

      case 'hey':
        msg.channel.send(`Hey, ${msg.author}! Welcome to 🔥 **${msg.guild}** 🔥

Thanks for joining! We kindly ask that all of our guild members change their nickname in the guild to your ESO username so it's easier to know who's who. Thanks!

**While you wait, please tell us a little about yourself:**

What's your CP level? If you haven't reached CP yet, what level is your main?
What class/role do you prefer to play?
What do you hope to get out of HoF?`)
        break

      case 'ping':
        msg.channel.sendMessage('pong!')
        break

      case 'marco':
        msg.channel.sendMessage('polo!')
        break

      case 'roll':
        msg.reply(`rolled a ${randomNumber}! ${emoji()}`)
        break

      case 'info':
        if (args[1] === 'version') {
          msg.channel.sendMessage('Version 1.0.1')
        }
    }
})

bot.on('guildMemberAdd', member => {
  const welcomeChannel = member.guild.channels.find(channel => channel.name === '👀welcome-channel')
  const botTestChannel = member.guild.channels.find(channel => channel.name === '🤖bot-test')

  if (!welcomeChannel) return
  if (!botTestChannel) return

  welcomeChannel.send(`Hey ${member}, welcome to **${member.guild}**! 🔥

Thanks for joining! We kindly ask that all of our guild members change their nickname in the guild to your ESO username so it's easier to know who's who. Thanks!

**While you wait, please tell us a little about yourself:**

What's your CP level? If you haven't reached CP yet, what level is your main?
What class/role do you prefer to play?
What do you hope to get out of HoF?`)

  let role = member.guild.roles.find(r => r.name === "Recruit")
  member.addRole(role).catch(console.error)
})

var http = require("http")
setInterval(function() {
  http.get("http://hof-discord-bot.herokuapp.com")
}, 300000)

bot.login(token)
