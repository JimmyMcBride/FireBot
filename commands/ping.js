exports.run = (bot, msg, args) => {
  msg.channel.send('Polo!').catch(console.error)
}

exports.help = {
  name: 'ping'
}