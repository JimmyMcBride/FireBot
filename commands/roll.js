exports.run = (bot, msg, args) => {
  // Generates a random number between 1 and 100 💻
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  // Returns an emoji based on the generated number 🚀
  const emoji = () => {
    if (randomNumber >= 1 && randomNumber <= 10) {
      return "☠️";
    } else if (randomNumber >= 11 && randomNumber <= 50) {
      return "💩";
    } else if (randomNumber >= 51 && randomNumber <= 68) {
      return "👍";
    } else if (randomNumber === 69) {
      return "😏";
    } else if (randomNumber >= 70 && randomNumber <= 89) {
      return "👍";
    } else if (randomNumber >= 90 && randomNumber <= 100) {
      return "🔥";
    }
  };
  msg.reply(`rolled a **${randomNumber}**! ${emoji()}`).catch(console.error);
};

exports.help = {
  name: "ping"
};
