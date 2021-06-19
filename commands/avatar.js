module.exports = {
  name: "avatar",
  execute(msg) {
    msg.channel.send(
      "https://cdn.discordapp.com/avatars/" +
        msg.author.id +
        "/" +
        msg.author.avatar +
        ".jpeg"
    )
  },
}
