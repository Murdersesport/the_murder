const Discord= require("discord.js");
const Client = new Discord.Client({intents: []});

Client.on("ready", () => {
    console.log("murder")

});

Client.login(process.env.token)