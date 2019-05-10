const Discord = require('discord.js')
const bot = new Discord.Client()

const token = 'NTc2NDk1MTU5NjI2MTcwMzgx.XNXWMw.cG8umYMTB4h0sYOkJS3XCSlckgo'

bot.on('ready')

bot.on('message', msg => {
    if (msg.content === "Hello, Fire Mage!"){
        msg.reply('Hello, friend!')
    }
})

bot.login(token)
