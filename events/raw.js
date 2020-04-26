module.exports = async (bot, event) => {
  const eventName = event.t;

  if (eventName === "MESSAGE_REACTION_ADD") {
    if (event.d.message_id == "614257389352517632") {
      const reactionChannel = bot.channels.get(event.d.channel_id);
      if (reactionChannel.messages.has(event.d.message_id)) {
        return;
      } else {
        reactionChannel
          .fetchMessage(event.d.message_id)
          .then(msg => {
            const msgReaction = msg.reactions.get(
              event.d.emoji.name + ":" + event.d.emoji.id
            );
            const user = bot.users.get(event.d.user_id);
            bot.emit("messageReactionAdd", msgReaction, user);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }

  if (eventName === "MESSAGE_REACTION_REMOVE") {
    if (event.d.message_id == "614257389352517632") {
      const reactionChannel = bot.channels.get(event.d.channel_id);
      if (reactionChannel.messages.has(event.d.message_id)) {
        return;
      } else {
        reactionChannel
          .fetchMessage(event.d.message_id)
          .then(msg => {
            const msgReaction = msg.reactions.get(
              event.d.emoji.name + ":" + event.d.emoji.id
            );
            const user = bot.users.get(event.d.user_id);
            bot.emit("messageReactionRemove", msgReaction, user);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }

  if (eventName === "MESSAGE_REACTION_ADD") {
    if (event.d.message_id == "614258600197750814") {
      const reactionChannel = bot.channels.get(event.d.channel_id);
      if (reactionChannel.messages.has(event.d.message_id)) {
        return;
      } else {
        reactionChannel
          .fetchMessage(event.d.message_id)
          .then(msg => {
            const msgReaction = msg.reactions.get(
              event.d.emoji.name + ":" + event.d.emoji.id
            );
            const user = bot.users.get(event.d.user_id);
            bot.emit("messageReactionAdd", msgReaction, user);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }

  if (eventName === "MESSAGE_REACTION_REMOVE") {
    if (event.d.message_id == "614258600197750814") {
      const reactionChannel = bot.channels.get(event.d.channel_id);
      if (reactionChannel.messages.has(event.d.message_id)) {
        return;
      } else {
        reactionChannel
          .fetchMessage(event.d.message_id)
          .then(msg => {
            const msgReaction = msg.reactions.get(
              event.d.emoji.name + ":" + event.d.emoji.id
            );
            const user = bot.users.get(event.d.user_id);
            bot.emit("messageReactionRemove", msgReaction, user);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
};
