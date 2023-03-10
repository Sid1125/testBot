const { EmbedBuilder } = require('discord.js');
const { add } = require('mathjs');
const { Discord, Client, Partials, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages] })
module.exports.run = async(client,message,args)=>{
let warnPermErr = new EmbedBuilder()
        .setTitle("**User Permission Error!**")
        .setDescription("**Sorry, you don't have permissions to use this! ❌**")
            if(!message.channel.permissionsFor(message.member).has(['MANAGE_MESSAGES'])) return message.channel.send(warnPermErr);
    
            let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            if(!member) return message.reply("Please mention a valid member of this server");
        
            let reason = args.slice(1).join(' ');
            if(!reason) reason = "(No Reason Provided)";
            
            member.send(`You have been warned by <${message.author.username}> for this reason: ${reason}`)
            .catch(error => message.channel.send(`Sorry <${message.author}> I couldn't n't warn because of : ${error}`));
            let warnEmbed = new EmbedBuilder()
            .setTitle("User Warned")
            .setColor("GREEN")
            .addFields("User:", `<@${member.user.id}>`, true)
            .addFields(`Moderator:`, `${message.author}`, true)
            .addFields(`Reason:`, `${reason}`)

            message.channel.send(warnEmbed)
            const channel = message.guild.channels.cache.find(c => c.id === '<logschannelid>') //sends this to a specific channel in an embed
            channel.send(
                new EmbedBuilder()
                .setTitle("User Warned")
                .setColor("GREEN")
                .addFields("User:", `<@${member.user.id}>`, true)
                .addFields(`Moderator:`, `${message.author}`, true)
                .addFields(`Reason:`, `${reason}`)
                .setFooter(message.guild.name, message.guild.iconURL())
                .setTimestamp()
            )
}

module.exports.help ={
    name:"warn"
}