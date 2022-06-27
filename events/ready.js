const { SlashCommandBuilder } = require("@discordjs/builder");

module.exports = {
    name: "ready",
    once: true,
    execute(Client){
        console.log("murder");

        var data = new SlashCommandBuilder()
            .setName("ping")
            .setDescription("renvoie pong");
        Client.guild.cache.get("863340954442399744").commands.create(data);
    }
}