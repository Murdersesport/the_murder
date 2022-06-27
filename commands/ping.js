const { SlashCommandBulder } = require("@discordjs/bulders");

module.exports = {
    data: new SlashCommandBulder()
        .setName("ping")
        .setDescription("Renvoie pong"),
    async execute(interaction){
        await interaction.reply("pong");
    }

}