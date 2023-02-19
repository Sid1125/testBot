module.exports = {
    name: 'w-filters',
    aliases: ['filters'],
    category: 'Music',
    utilisation: '{prefix}w-filters',

    run(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

        const disabledEmoji = client.emotes.error;
        const enabledEmoji = client.emotes.success;

        const filtersStatuses = [[], []];

        Object.keys(client.filters).forEach((filterName) => {
            const array = filtersStatuses[0].length > filtersStatuses[1].length ? filtersStatuses[1] : filtersStatuses[0];
            array.push(client.filters[filterName] + " : " + (client.player.getQueue(message).filters[filterName] ? enabledEmoji : disabledEmoji));
        });

        message.channel.send({
            embed: {
                color: 'ORANGE',
                footer: { text: 'This bot uses a Github project made by Zerio (ZerioDev/Music-bot)' },
                fields: [
                    { name: 'Filters', value: filtersStatuses[0].join('\n'), inline: true },
                    { name: '** **', value: filtersStatuses[1].join('\n'), inline: true },
                ],
                timestamp: new Date(),
                description: `List of all filters enabled or disabled.\nUse \`${client.config.prefix}filter\` to add a filter to a song.`,
            },
        });
    /* eslint-disable no-unused-vars */
const { Discord, Client, Partials, Collection, GatewayIntentBits } = require('discord.js');
const client1 = new Client({ intents: [GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages] })

module.exports.run = async (client, message, args, utils) => {
	const pronouns = ['silly', 'mommy', 'dad', 'mom', 'master', 'nii-san', 'onee-san', 'love', 'ma\'am', 'sir', 'friend', 'b-baka', 'honey'];
	const randompronoun = pronouns[Math.floor(Math.random() * (pronouns.length - 1 + 1) + 1)];
	const question = args.join(' ');
	if(!question) return message.channel.send(`${randompronoun}, ask a question 🥺`);
	const answer = ['nu', 'yus', 'yes', 'no', 'never', 'of course', 'hell yeah', 'hell no', 'negative', 'positive', 'not today', 'only today', 'sadly yes', 'sadly no', 'maybe', 'you bet', 'not a chance', 'it\'s a secret', 'only for today'];
	const randomanswer = answer[Math.floor(Math.random() * (answer.length - 1 + 1) + 1)];
	const embed = new Discord.EmbedBuilder()
		.setColor('RANDOM')
		.setTitle(question)
		.setDescription(`${randompronoun}, ${randomanswer}`);
	message.channel.send({embeds:[embed]});
};


module.exports.help = {
	aliases: ['ball'],
	name: '8ball',
	description: 'Tells probability of that thing happening',
	usage: `s#8ball Is this bot good?`,
};

},
};