const Discord = require('discord.js')
const bot = new Discord.Client

const token = 'NTc2NDk1MTU5NjI2MTcwMzgx.XNXWMw.cG8umYMTB4h0sYOkJS3'

bot onabort('ready', () => {
    console.log('Your bot is online.')
})

bot.login(token)
