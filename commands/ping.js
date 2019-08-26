exports.run = (bot, msg, args) => {
  msg.channel.send('Pong!').catch(console.error)
}

exports.help = {
  name: 'ping'
}