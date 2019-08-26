const config = require('../config.json')
const prefix = config.prefix

module.exports = async (bot, msg) => {
  if (!msg.content.startsWith(prefix)) return

  const args = msg.content.substring(config.prefix.length).split(' ')
  const command = args.shift().toLowerCase()

  const cmd = bot.commands.get(command)
  if (!cmd) return

  cmd.run(bot, msg, args)
}