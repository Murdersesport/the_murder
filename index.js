const Client = require("discord.js")

bot.on("ready", async () => {

    console.log(`${bot.user.username} : Onligne in ${bot.guilds.cahes.size} server`)
})

Client.start(process.env.token)