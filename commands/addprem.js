
const premiumSchema = require("../models/premium")
const { EmbedBuilder } = require("discord.js")
const { Discord, Client, Partials, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages] })
module.exports.help = {
  name: "add-premium",
}
  module.exports.run = async(client,message,args)=>{
    if(message.author.id !== '699257426712592385') return message.channel.send(
      new EmbedBuilder()
      .setTitle("PREMIUM")
      .setDescription(":x: | You do not have permission to use this command (Owner only)"))





      const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])





      if(!member) return message.channel.send( 
        new EmbedBuilder() 
        .setTitle("PREMIUM") 
        .setDescription(":x: | Please mention a member")
        )




        premiumSchema.findOne({User: member.id},async(err, data) => {
          if(data) return message.channel.send(
            new EmbedBuilder()
            .setTitle("PREMIUM")
            .setDescription(`:x: | This user already gained premium features`)
          )


                  new premiumSchema({User: member.id}).save()
        return message.channel.send(
          new EmbedBuilder()
          .setTitle("PREMIUM")
          .setDescription(`:white_check_mark: | Added premium to : ${member}`)
        )
        })
    
  }
