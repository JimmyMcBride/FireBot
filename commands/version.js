const config = require("../config.js")
module.exports = {
  name: "version",
  execute(msg) {
    msg.channel
      .send(
        `**Version** ${config.version}
**GitHub link:** https://github.com/JimmyMcBride/FireBot
Patch notes in README.md`
      )
      .catch(console.error)
  },
}
