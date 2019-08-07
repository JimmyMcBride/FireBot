const Discord = require('discord.js')
const bot = new Discord.Client()

const config = require('./config.json')
const token = config.token

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

    if (msg.content === 'Introduce yourself, Fire Mage.'){
        msg.channel.send(`I'm a discord bot built by the **ALL MIGHTY** 🔥 Fire Ninja 🔥.
You can type **!roll** to get a random number between 1-100.
Also, try typing **!ping** or **!marco** to play a game!`)
    }

    switch(args[0]){
        case 'ping':
            msg.reply('pong!')
        break

        case 'marco':
            msg.reply('polo!')
        break

        case 'roll':
            msg.reply(`rolled a ${randomNumber}! ${emoji()}`)
        break

        case 'info':
    }


})

bot.login(token)
