const Discord = require("discord.js")
const Command = require("../structure/Command")

module.exports = new Command({

    name: "ping",
    description: "Know the latency of the bot",
    utilisation: "ping",
    permission: "None",
    category: "Information",

    async run(bot, message, args) {

        const startTime = Date.now()

        await message.channel.send(`Wait...`).then(async msg => {

            const endTime = Date.now()

            await msg.edit(`\`Bot Latency\` : ${endTime - startTime}ms\n\`Latency for API Discord\` : ${bot.ws.ping}ms`)
        })
    }
})