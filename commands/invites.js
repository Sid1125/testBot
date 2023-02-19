const { Discord, Client, Partials, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages] })
module.exports.run = async (client, message, args, utils) => {
	try {
		const member = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;

		const invites = await message.guild.fetchInvites();

		const memberInvites = invites.filter(i => i.inviter && i.inviter.id === member.user.id);

		if (memberInvites.size <= 0) {
			return message.channel.send(`**${member.displayName} Doesnt have any active invites in this server!**`, (member === message.member ? null : member));

			// eslint-disable-next-line no-empty
			{ }
		}

		const content = '`' + memberInvites.map(i => i.code).join('`\n`') + '`';
		let index = 0;
		memberInvites.forEach(invite => index += invite.uses);

		const embed = new Discord.EmbedBuilder()
			.setColor('RANDOM')
			.setFooter(message.guild.name, message.guild.iconURL())
			.setAuthor(`Invite's for ${message.guild.name}`)
			.setDescription(`Information on Invites of ${member.displayName}`)
			.addFields('**No. Invited Persons**', index)
			.addFields('Invitation Codes\n\n', content);
		message.channel.send(embed);
	}
	catch (e) {
		return message.channel.send(e.message);
	}
};

module.exports.help = {
	aliases: [],
	name: 'invites',
	description: 'Shows the amount of invites you have!',
	usage: `s#invites`,
};
