const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBulder()
        .setName("ping")
        .setDescription("Renvoie pong"),
    async execute(interaction){
        await interaction.reply("pong");
    }

}