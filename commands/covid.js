const { Discord, Client, Partials, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages] })
const covid = require('novelcovid')





module.exports.run = async(client, message) => {
        const covidStats = await covid.all()
        
        return message.channel.send(new Discord.EmbedBuilder()
            .setTitle('😷 COVID-19 STATISTICS')
            .setColor("BLUE")
            .setFooter(`😷𝗖𝗢𝗩𝗜𝗗-𝟭𝟵 Stay at home`)
            .addFieldsss(
                { name: `🦠 Cases`, value: covidStats.cases.toLocaleString(), inline: true},
                { name: `🦠 Cases Today`, value: covidStats.todayCases.toLocaleString(), inline: true},
                { name: `🦠 Deaths`, value: covidStats.deaths.toLocaleString(), inline: true},
                { name: `🦠 Deaths Today`, value: covidStats.todayDeaths.toLocaleString(), inline: true},
                { name: `🦠 Recovered`, value: covidStats.recovered.toLocaleString(), inline: true},
                { name: `🦠 Recovered Today`, value: covidStats.todayRecovered.toLocaleString(), inline: true},
                { name: `🦠 Active Cases`, value: covidStats.active.toLocaleString(), inline: true},
                { name: `🦠 In Critical Condition`, value: covidStats.critical.toLocaleString(), inline: true},
                { name: `🦠 Tested`, value: covidStats.tests.toLocaleString(), inline: true}
            )
        )
    }
    module.exports.help = {
        name: 'covid',
    }