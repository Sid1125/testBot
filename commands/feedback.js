const { Discord, Client, Partials, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages] })

module.exports.run = async (client, message, args) => {
let feedback = args.join(" ").slice(0);
let user = message.author.username;
let uid = message.author.id;
let guild = message.guild.name;
let gid = message.guild.id;
let channel = client.channels.cache.get("838390156841975808")
let embed = new Discord.EmbedBuilder()
.setTitle(`Feedback Report in SUtilBot`)
.setThumbnail("https://www.icegif.com/wp-content/uploads/icegif-1.gif")
.addFields("Feedback", feedback)
.addFields("Feedback By", user)
.addFields("Feedback User ID", uid)
.addFields("Feedback Guild Name ", guild)
.addFields("Feedback Guild ID", gid)
.setColor("YELLOW")
.setTimestamp()
.setFooter("New Feedback Found")

message.reply("**❤️ Your Feedback has been reported in the official server. Thanks for the valuable feedback & thanks for supporting us.**")
channel.send(embed).then(i => i.react("💖"))


}

module.exports.help = {
    name: 'feedback'
}