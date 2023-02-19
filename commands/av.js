const { Discord, Client, Partials, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages] });


module.exports.run = async(client,message,args)=>{
  let ad = message.mentions.users.first() ;
  phraseToSend='User Not found!'
  if(!ad) return message.channel.send({content: `${phraseToSend}`})

  let avatar = ad.displayAvatarURL({ dynamic: true, format: 'png', });
  let attachment = new Discord.MessageAttachment(avatar);
  const embed = new Discord.EmbedBuilder()
  .setTitle(`You look Cool Today!`)     
  .setImage(avatar)
  .setColor("BLUE")
  .setDescription('Avatar')

message.channel.send({ embeds: [embed], files: [attachment] })

    message.channel.send(attachment)
    message.channel.send({content: "You look Cool Man!!"})
}

module.exports.help ={
    name:"av"
}