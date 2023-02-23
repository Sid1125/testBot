const { EmbedBuilder } = require('discord.js');
module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Core',
    utilisation: '{prefix}help <command name>',

    async run(client, message, args) {
        if (!args[0]) {
             const exampleEmbed = new EmbedBuilder()
                .setColor('BLUE')
                .setTitle('Help Page')
                .setAuthor({ name: 'Help pannel' })
                .setDescription(`To use filters, ${client.config.prefix}filter (the filter). Example : ${client.config.prefix}filter 8D.\n\n[Bot usage](https://youtu.be/mERQB-MrDsc)\n[Invite Me!](https://dsc.gg/sutilbot)\n[Join our Server!](https://dsc.gg/sutilbotserver)\n[Vote for me on Top.gg](https://top.gg/bot/756538469106581554)`)
                .addFields(
                    { name: 'Bot', value: '`debug`, `ping`, `invite`, `vote`, `covid`, `addrole`, `removerole`, `clear`, `swc(set a welcome channel)`, `cwc(check welcome channel)`' },
					{ name: 'No prefix', value: '`dream`, `technoblade`, `wilbursoot`, `bbs`, `rasode me kon tha`, `drista`, `RIP`' },
					{ name: 'Roleplay (no prefix)', value: '`lets fight`, `no u`, `ghostbot`, `so what`' },
			        { name: 'Image', value: '`av`, `delete`, `jail`, `trigger`, `hitler`, `wanted`' },
			        { name: 'Moderation', value: '`ban`, `kick`, `nuke`, `addrole`, `removerole`' },
                    { name: 'Cryptocurrency', value: '`cryptoprice name_of_crypto currency(usd,inr,eur,etc.)`, `cryptonews`' },
                    { name: 'Fun', value: '`mcadvancement`, `meme`, `minecraft`, `hangman`, `anime`, `fight`' },
			        { name: 'Giveaway - Do s#startgive #channel duration winner_count prize', value: '`startgive`, `endgiveaway`, `rgiveaway(r = reroll)`' },
                                )
                .setTimestamp();
            message.channel.send({content:`Here you go -`})        
            message.channel.send({embeds: [exampleEmbed]});
                }
            
        else{
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(c => c.aliases && c.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - I did not find this command !`);

            message.channel.send({
                embed: {
                    color: 'BLUE',
                    author: { name: 'Help pannel' },
                    fields: [
                        { name: 'Name', value: command.name, inline: true },
                        { name: 'Category', value: command.category, inline: true },
                        { name: 'Aliase(s)', value: command.aliases.length < 1 ? 'None' : command.aliases.join('\n'), inline: true },
                        { name: 'Utilisation', value: command.utilisation.replace('{prefix}', client.config.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: 'Find information on the command provided.\nMandatory arguments `[]`, optional arguments `<>`.',
                }
            })
        }
    },
};