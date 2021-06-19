module.exports = async (bot, messageReaction, user) => {
  const roleName = messageReaction.emoji.name
  const member = messageReaction.message.guild.members.find(
    (member) => member.id === user.id
  )

  const html = member.guild.roles.get("614143178517512212")
  const frontEnd = member.guild.roles.get("614141223904608292")
  const backEnd = member.guild.roles.get("614141451252662307")
  const fullStack = member.guild.roles.get("614141552192913429")
  const javaScript = member.guild.roles.get("614141755364737088")
  const python = member.guild.roles.get("614142076443033601")
  const cPlus = member.guild.roles.get("614142290138759169")
  const cSharp = member.guild.roles.get("614142370333589505")
  const ruby = member.guild.roles.get("614142871049863189")
  const sql = member.guild.roles.get("614142471680688130")
  const mongo = member.guild.roles.get("614142559614271713")
  const rubyOnRails = member.guild.roles.get("614142939425407026")
  const firebase = member.guild.roles.get("614143270813171742")
  const react = member.guild.roles.get("614143745708916736")
  const reactNative = member.guild.roles.get("614143828575911946")
  const angular = member.guild.roles.get("614143889879728151")

  console.log(`${user.username} removed the "${roleName}" roll!`)

  if (roleName === "html") {
    member.removeRole(html)
  } else if (roleName === "frontend") {
    member.removeRole(frontEnd)
  } else if (roleName === "backend") {
    member.removeRole(backEnd)
  } else if (roleName === "fullstack") {
    member.removeRole(fullStack)
  } else if (roleName === "javascript") {
    member.removeRole(javaScript)
  } else if (roleName === "python") {
    member.removeRole(python)
  } else if (roleName === "csharp") {
    member.removeRole(cSharp)
  } else if (roleName === "cplus") {
    member.removeRole(cPlus)
  } else if (roleName === "ruby") {
    member.removeRole(ruby)
  } else if (roleName === "sql") {
    member.removeRole(sql)
  } else if (roleName === "mongo") {
    member.removeRole(mongo)
  } else if (roleName === "rubyonrails") {
    member.removeRole(rubyOnRails)
  } else if (roleName === "firebase") {
    member.removeRole(firebase)
  } else if (roleName === "react") {
    member.removeRole(react)
  } else if (roleName === "reactnative") {
    member.removeRole(reactNative)
  } else if (roleName === "angular") {
    member.removeRole(angular)
  }
}
