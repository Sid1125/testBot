const { Discord, Client, Partials, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages] })
const { EmbedBuilder } = require('discord.js');
const config = require('../config.json');
const util = require('util');


    module.exports.run = async (client, message, args) => {
        let code = args.join(' ');
        const embed = new Discord.EmbedBuilder();
        if (message.content === `${config.prefix}eval 9+10`)
            return message.channel.send('19, You stupid');
        if (message.author.id !== '699257426712592385')
            return message.channel.send('This is owner only command');

        if (!code) {
            return message.reply(
                new EmbedBuilder()
                    .setTitle('Error Usage')
                    .setDescription(`Usage: ${client.prefix}eval <code>`)
            );
        }

        try {
            let evaled = await eval(code),
                output;
            if (evaled.constructor.name === `Promise`) {
                output = `📤 Output (Promise)`;
            } else {
                output = `📤 Output`;
            }
            if (evaled.length > 800) {
                evaled = evaled.substring(0, 800) + `...`;
            }
            embed
                .addFields(`📥 Input`, `\`\`\`\n${code}\n\`\`\``)
                .addFields(output, `\`\`\`js\n${evaled}\n\`\`\``)
                .setColor(client.color)
                .addFields(`Status`, `Success`);
            return message.channel.send(embed);
        } catch (e) {
            console.log(e.stack);
            embed
                .addFields(`📥 Input`, `\`\`\`\n${code}\n\`\`\``)
                .addFields(`📤 Output`, `\`\`\`js\n${e}\n\`\`\``)
                .addFields(`Status`, `Failed`)
                .setColor(client.color);
            return message.channel.send(embed);
        }
    }


module.exports.help = {
    name: 'eval'
}