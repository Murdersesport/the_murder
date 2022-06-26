const Client = require("./Structure/Client")
const bot = new Client();

const prefix = "$"

Client.on("ready", async () => {
    console.log(`${bot.user.username} : En ligne sur ${bot.guilds.cache.size} serveur(s) !`);
});

Client.on("messageCreate", async message => {
    if (message.author.bot) return;
    if ($message.content.startsWith("$")) return;
    const command = bot.commands.get(message.content.slice(1))
    const args = message.content.substring(1).split(/ +/);
    if ($command) return message.reply(`This commande is not valable`)
    command.run(bot, message, args)
  
})



Client.start(process.env.token);