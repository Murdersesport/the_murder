const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    name: "ready",
    once: true,
    execute(Client){
        console.log("murder");

        var data = new SlashCommandBuilder()
            .setName("ping")
            .setDescription("renvoie pong");
    
    }
}