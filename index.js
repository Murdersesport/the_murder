const Client = require("./Structure/Client")
const bot = new Client();

bot.on("messageCreate", async message => {

    if(message.content.startsWith("!")) return;

    const command = bot.commands.get(message.content.slice(1))

    if(!command) return message.reply(`this command is not found`)

    command.run(bot, message, args)
})

bot.on("ready", async () => {

    console.log(`${bot.user.username} : Onligne in ${bot.guilds.cahes.size} server`)
})

Client.start(process.env.token);