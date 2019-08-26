const {
  Client
} = require('discord.js')
const bot = new Client()

require('dotenv/config')

const config = require('./config.json')

const token = process.env.TOKEN
const prefix = config.prefix

bot.on('ready', () => {
  console.log('Fire Mage is online!')
  bot.user.setActivity('with fire!')
})

bot.on('raw', event => {
  // console.log(event)
  const eventName = event.t

  if (eventName === 'MESSAGE_REACTION_ADD') {
    if (event.d.message_id == '614257389352517632') {
      const reactionChannel = bot.channels.get(event.d.channel_id)
      if (reactionChannel.messages.has(event.d.message_id)) {
        return
      } else {
        reactionChannel.fetchMessage(event.d.message_id)
          .then(msg => {
            const msgReaction = msg.reactions.get(event.d.emoji.name + ':' + event.d.emoji.id)
            const user = bot.users.get(event.d.user_id)
            bot.emit('messageReactionAdd', msgReaction, user)
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }

  if (eventName === 'MESSAGE_REACTION_ADD') {
    if (event.d.message_id == '614258600197750814') {
      const reactionChannel = bot.channels.get(event.d.channel_id)
      if (reactionChannel.messages.has(event.d.message_id)) {
        return
      } else {
        reactionChannel.fetchMessage(event.d.message_id)
          .then(msg => {
            const msgReaction = msg.reactions.get(event.d.emoji.name + ':' + event.d.emoji.id)
            const user = bot.users.get(event.d.user_id)
            bot.emit('messageReactionAdd', msgReaction, user)
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
})

bot.on('messageReactionAdd', (messageReaction, user) => {
  console.log(`${user.username} reacted.`)

  const roleName = messageReaction.emoji.name
  const member = messageReaction.message.guild.members.find(member => member.id === user.id)

  console.log(roleName)

  const html = member.guild.roles.get('614143178517512212')
  const frontEnd = member.guild.roles.get('614141223904608292')
  const backEnd = member.guild.roles.get('614141451252662307')
  const fullStack = member.guild.roles.get('614141552192913429')
  const javaScript = member.guild.roles.get('614141755364737088')
  const python = member.guild.roles.get('614142076443033601')
  const cPlus = member.guild.roles.get('614142290138759169')
  const cSharp = member.guild.roles.get('614142370333589505')
  const ruby = member.guild.roles.get('614142871049863189')
  const sql = member.guild.roles.get('614142471680688130')
  const mongo = member.guild.roles.get('614142559614271713')
  const rubyOnRails = member.guild.roles.get('614142939425407026')
  const firebase = member.guild.roles.get('614143270813171742')
  const react = member.guild.roles.get('614143745708916736')
  const reactNative = member.guild.roles.get('614143828575911946')
  const angular = member.guild.roles.get('614143889879728151')

  if (roleName === 'html') {
    member.addRole(html)
  } else if (roleName === 'frontend') {
    member.addRole(frontEnd)
  } else if (roleName === 'backend') {
    member.addRole(backEnd)
  } else if (roleName === 'fullstack') {
    member.addRole(fullStack)
  } else if (roleName === 'javascript') {
    member.addRole(javaScript)
  } else if (roleName === 'python') {
    member.addRole(python)
  } else if (roleName === 'csharp') {
    member.addRole(cSharp)
  } else if (roleName === 'cplus') {
    member.addRole(cPlus)
  } else if (roleName === 'ruby') {
    member.addRole(ruby)
  } else if (roleName === 'sql') {
    member.addRole(sql)
  } else if (roleName === 'mongo') {
    member.addRole(mongo)
  } else if (roleName === 'rubyonrails') {
    member.addRole(rubyOnRails)
  } else if (roleName === 'firebase') {
    member.addRole(firebase)
  } else if (roleName === 'react') {
    member.addRole(react)
  } else if (roleName === 'reactnative') {
    member.addRole(reactNative)
  } else if (roleName === 'angular') {
    member.addRole(angular)
  }
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

  if (`${msg.guild}` === 'FireScript') {


    switch (args[0]) {
      case 'blah':
        msg.channel.send('blah-blah!')
        break
    }

  }

  switch (args[0]) {

    case 'about':
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
  if (`${member.guild}` === 'Harbingers of Fire') {
    const role = member.guild.roles.find(r => r.name === "Recruit")
    member.addRole(role).catch(console.error)

    const welcomeChannel = member.guild.channels.find(channel => channel.name === '👀welcome-channel')

    if (!welcomeChannel) return

    welcomeChannel.send(`Hey ${member}, welcome to **${member.guild}**! 🔥

Thanks for joining! We kindly ask that all of our guild members change their nickname in the guild to your ESO username so it's easier to know who's who. Thanks!

**While you wait, please tell us a little about yourself:**

What's your CP level? If you haven't reached CP yet, what level is your main?
What class/role do you prefer to play?
What do you hope to get out of HoF?`)
  } else if (`${member.guild}` === 'FireScript') {
    const role = member.guild.roles.find(r => r.name === "Dev")
    member.addRole(role).catch(console.error)

    const chatRoom = member.guild.channels.find(channel => channel.name === '🗯chat-room')

    if (!chatRoom) return

    chatRoom.send(`Hey ${member}, welcome to **${member.guild} {🔥}**
Head over to our **🍥role-selector** channel to help represent your style as a developer!`)
  }
})

bot.login(token)