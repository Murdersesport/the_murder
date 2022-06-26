const Discord = require("discord.js")
const fs = require("fs")
const intents = new Discord.Intents(32767)
const Command = require("./Command")

class Client extends Discord.Client {

    constructor() {

        super({intents})

        /**
         * @type {Discord.Collection<string, Command>}
         */

         this.commands = new Discord.Collection();
         this.color = "#880808";

        
    }

    start(token) {

        fs.readdirSync("./Commandes").filter(file => file.endsWith(".js")).forEach(async f => {

            /**
             * @type {Command}
             */

            let props = require(`../Commandes/${f}`);
            console.log(`${f} commande charged succesfuly`);
            this.commands.set(props.name, props)
        })

        this.login(process.env.token)
    }
}

module.exports = Client;