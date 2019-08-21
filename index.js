const Discord = require('discord.js')
const bot = new Discord.Client()

require('dotenv/config')

const config = require('./config.json')

const token = process.env.TOKEN
const prefix = config.prefix

bot.commands = new Discord.Collection()

bot.on('ready', () => {
    console.log('Fire Mage is online!')
    bot.user.setActivity('with fire!')
})

bot.on('message', msg => {
  const args = msg.content.substring(config.prefix.length).split(' ')

  if (!msg.content.startsWith(prefix)) return

  // Generates a random number between 1 and 100 💻
  const randomNumber = Math.floor(Math.random() * 100) + 1

  // Returns an emoji based on the generated number 🚀
  const emoji = () => {
    if (randomNumber >= 1 && randomNumber <= 10) {
        return '☠️'
    } else if (randomNumber >= 11 && randomNumber <= 50) {
        return '💩'
    } else if (randomNumber >= 51 && randomNumber <= 68) {
        return '👍'
    } else if (randomNumber === 69) {
      return '😏'
    } else if (randomNumber >= 70 && randomNumber <= 89) {
      return '👍'
    } else if (randomNumber >= 90 && randomNumber <= 100) {
        return '🔥'
    }
  }

  switch(args[0]){

    case 'info':
      msg.channel.send(`Hey, ${msg.author}! I'm a discord bot built by the **ALL MIGHTY** 🔥 Fire Ninja 🔥.
Type **!roll** to get a random number between 1-100.
Type **!avatar** to see your avatar photo.
Type **!version** to see what version FireBot currently is.
Also, try typing **!ping** or **!marco** to play a game!`)
      break

    case 'ping':
      msg.channel.send('pong!')
      break

    case 'marco':
      msg.channel.send('polo!')
      break

    case 'roll':
      msg.reply(`rolled a ${randomNumber}! ${emoji()}`)
      break

    case 'version':
      msg.channel.send(`Version ${config.version}`)
      break

    case 'avatar':
      msg.channel.send(msg.author.avatarURL)
      break
  }
})

bot.on('guildMemberAdd', member => {
  const role = member.guild.roles.find(r => r.name === "Recruit")
  member.addRole(role).catch(console.error)

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


})

bot.login(token)
