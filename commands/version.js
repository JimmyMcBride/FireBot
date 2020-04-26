const config = require("../config.json");

exports.run = (bot, msg, args) => {
  msg.channel
    .send(
      `**Version** ${config.version}
**GitHub link:** https://github.com/JimmyMcBride/FireBot
Patch notes in README.md`
    )
    .catch(console.error);
};

exports.help = {
  name: "version"
};
