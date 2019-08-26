exports.run = (bot, msg, args) => {
  msg.channel.send(msg.author.avatarURL).catch(console.error)
}

exports.help = {
  name: 'avatar'
}