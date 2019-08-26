module.exports = async (bot, member) => {
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
}