const { Discord, Client, Partials, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages] })
  const { EmbedBuilder } = require('discord.js');

  module.exports = {
    name: 'stats',
    aliases: ['s'],
    category: 'Util',
    utilisation: '{prefix}stats',
 async run(client,message){
  console.log("test")
 const statsEmbed = new EmbedBuilder()
    .setTitle(`Bot Stats`)
    .setDescription(`Server count: ${client.guilds.cache.size}\nPing: **${client.ws.ping}ms**\nUser Count: ${client.users.cache.size}`)
    .setColor('BLUE')
    .setTimestamp();

try {
	  await message.channel.send({embeds: [statsEmbed]});
	} catch (err) {
		console.log(err);
		message.channel.send("I am not able to show the number of servers the bot is in!!");
	}
  
}

}