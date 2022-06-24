const Discord = require("discord.js")
const Client = require("./Client")

/**
 * @param {Discord.Client} bot
 * @param {Discord.Message} message
 * @param {string[]} args
 */

function RunFuunction(bot, message, args) {}

class Command {

     /**
     * @typedef {{name: string, description: string, utilisation: string, category: string, run: RunFunction}}
     * @param {CommandOption} options
     */

    constructor(options) {

        this.name = options.name;
        this.description = options.description;
        this.utilisation = options.utilisation;
        this.permission = options.permission;
        this.category = options.category;
        this.run = options.run;
   }
}

module.exports = Command;