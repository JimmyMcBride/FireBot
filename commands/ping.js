module.exports = {
    name: "ping",
    execute(msg) {
        msg.channel.send("Pong!").catch(console.error)
    },
}
