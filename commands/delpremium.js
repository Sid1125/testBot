const premiumSchema = require("../models/premium")
const { EmbedBuilder } = require("discord.js")
const { Discord, Client, Partials, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages] })
module.exports.help = {
  name: "del-premium",
}
 module.exports.run = async(client,message,args)=>{
    if(message.author.id !== '699257426712592385') return message.channel.send(
      new EmbedBuilder()
      .setTitle("DELETE PREMIUM")
      .setDescription(":x: | You do not have permission to use this command (Owner only)"))





      const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])





      if(!member) return message.channel.send( 
        new EmbedBuilder() 
        .setTitle("DELETE PREMIUM") 
        .setDescription(":x: | Please mention a member")
        )




        premiumSchema.findOne({User: member.id},async(err, data) => {
         if(!data) return message.channel.send(
           new EmbedBuilder()
           .setTitle("DELETE PREMIUM")
           .setDescription(":x: | User was previously not added to database")
         )


         data.delete();
         return message.channel.send(`:white_check_mark: | Premium deleted `)
        })
    
  }
