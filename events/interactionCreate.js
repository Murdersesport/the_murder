const { Collection } = require("discord.js");
const fs = require("fs");

class Commands {
    constructor(){
        this.list = new Collection();
        const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

        for(const file of commandFiles){
            const command = require("./commands" + file);

            this.list.set(command.data.name, command);
        }
    }
}


module.exports = {
    name: "interactionCreate",
    once: false,
    commands: new Commands(),
    async execute(interaction){
        if(interaction.isCommand()){
            const command = this.commands.list.get(interaction.commandName);

            if(!command) return;

            try {
                await command.execute(interaction);
            } catch(error){
                console.error(error);
                await interaction.reply({content: "we got error :" + error, ephemeral: true});
            }
        }
        
    }
}