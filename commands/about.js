exports.run = (bot, msg, args) => {
  msg.channel.send(`Hey, ${msg.author}! I'm a discord bot built by the **ALL MIGHTY** 🔥 Fire Ninja 🔥.
Type **!roll** to get a random number between 1-100.
Type **!avatar** to see your avatar photo.
Type **!version** to see what version FireBot currently is.
Also, try typing **!ping** to play a game!`).catch(console.error)
}

exports.help = {
  name: 'about'
}