const { Discord, Client, Partials, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages] })
const got = import('got') // npm install got

  module.exports.run = async (client, message, args) => {

            got('https://www.reddit.com/r/memes/random/.json').then(res => {
                let content = JSON.parse(res.body)
                message.channel.send(
                    new Discord.EmbedBuilder()
                        .setTitle(content[0].data.children[0].data.title)     
                        .setImage(content[0].data.children[0].data.url)
                        .setColor("RANDOM")
                        .setFooter(`👍 ${content[0].data.children[0].data.ups} | 👎 ${content[0].data.children[0].data.downs} | 💬 ${content[0].data.children[0].data.num_comments}`)
                )
            })
        }
    

module.exports.help = { // Update according to your handler. lol
    name: "meme",
    }