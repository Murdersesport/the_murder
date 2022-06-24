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
  



  //$soon
  if (message.content === prefix + "event"){
  message.channel.send ( "<:letter_s:985628697392472074> <:letter_o:985628391812259940> <:letter_o:985628391812259940> <:letter_n:985628341929377874>" )};
  //$event1
  if (message.content === prefix + 'event1'){
    const nitroevent = new Discord.MessageEmbed()
     .setTitle("Discord Nitro")
     .setDescription("bghiti trba7 nitro discord")
     .setThumbnail('https://cdn.iconscout.com/icon/free/png-256/discord-nitro-4941624-4109024.png')
     .addFields(
		{ name: 'Rule 1', value: '**invite 5**' },
		{ name: 'Rule 2', value: '**follow instaram**' },
		{ name: 'Rule 3', value: '**5000 VoiceXP**' },)
     .setTimestamp()
     .setFooter({ text: 'Event ghaysali 07/07 \n **Good Luck**', });
    
     
    message.channel.send({ embeds: [nitroevent]});
  };        
   //$help 
  if (message.content === prefix + "help"){
  message.reply( "wa ta sr t9awed" )};
   //$tag
  if (message.content === prefix + "tag"){ 
  message.channel.send ( "|| @everyone ||")}; 

   //$reactionevent
  if (message.content === prefix + "reactionevent"){
    var row = new Discord.MessageActionRow()
     .addComponents(new Discord.MessageButton()
      .setCustomId("Event")
      .setLabel("Done")
      .setStyle("SECONDARY")
      .setEmoji("🎉")
      )
      .addComponents(new Discord.MessageButton()
       .setLabel("Instagram")
       .setStyle("LINK")
       .setURL("https://www.instagram.com/murders.mur")
      );
    message.channel.send({components: [row]})
  };

   //$rulesimage
  if (message.content === prefix + "rulesimage"){
    const RulesFire = new Discord.MessageAttachment(
      "https://cdn.discordapp.com/attachments/863340954458914863/863761482062757919/519-5192856_animated-rules-gif-transparent-hd-png-download.png"
    );
    message.channel.send ({ files: [RulesFire] } ,)
    };

   //$rules
  if (message.content === prefix + "rules"){
      message.channel.send ("<:mid:863761049344671794><:mid:863761049344671794><:mid:863761049344671794> SERVER RULES  <:mifd:863761049344671794><:mid:863761049344671794> \n <:dot:863759818820812810> Don't Be Racist \n <:dot:863759818820812810> Don't Be Toxic \n <:dot:863759818820812810> Stop Spamming \n <:dot:863759818820812810> No +18 Pics \n <:dot:863759818820812810> Dont Share Your Own Discord Server ( in chat - or private to a member ) \n <:dot:863759818820812810> Don't Scream On The Mic \n <:dot:863759818820812810> If a Moderator Told You Stop Something . Stop It \n <:dot:863759818820812810> Don't Post Someone's personal information ( pictures - conversation ) \n <:dot:863759818820812810> Be Human \n <:mid:863761049344671794><:mid:863761049344671794><:mid:863761049344671794><:mid:863761049344671794><:mid:863761049344671794><:mid:863761049344671794><:mid:863761049344671794><:end:863761091955654656> \n <:dot:863759818820812810> Respect the Terms of Service & Guidelines of Discord. \n <:sahm:863759831332683777>  https://discord.com/terms \n <:sahm:863759831332683777>  https://discord.com/guidelines \n <:mid:863761049344671794><:mid:863761049344671794><:mid:863761049344671794> INVITE LINK  <:mid:863761049344671794><:mid:863761049344671794><:end:863761091955654656> \n <:dot:863759818820812810> Invite your friends using this link : https://discord.gg/BU2aH9UytV" )
  }
   //$othmane
  if (message.content === prefix + "othmane"){
       message.channel.send ("rwijl")
  }
   
});


Client.on("guildMemberAdd", async member => {
  console.log("new member");
  Client.channels.cache
    .get("863340954458914859")
    .send("<@" + member.id + ">")
  const welcomer = new Discord.MessageEmbed()
     .setTitle("Welcome to Murders Community")
     .setDescription(" <:sahm:863759831332683777> read rules #Rules \n <:sahm:863759831332683777> get roles #getroles \n <:sahm:863759831332683777> **Have Fun**  ")
     .setImage(member.user.displayAvatarURL({
               format: "png",
     }))
     .setImage('https://cdn.discordapp.com/attachments/985565505307947070/986030845460631702/42478-teaser1.jpg')
     .setTimestamp();
    ;
Client.channels.cache
    .get("863340954458914859")
    .send({ embeds: [welcomer]})
});


Client.start(process.env.token);