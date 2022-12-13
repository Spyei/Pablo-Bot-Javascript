const { EmbedBuilder } = require('discord.js');
module.exports = {
	name: 'random-emoji',
	aliases: ['re', 'randomemoji', 'random emoji'],
	description: 'Gera um emoji aleatório',
	run: async (client, message, args) => {
		function random(min, max) {
			return Math.round((Math.random() * (max - min)) + min)
		}
		let sim = message.guild.emojis.cache.map(a => a.name)
		let cu = sim[random(0, sim.length)]
		let emoji = message.guild.emojis.cache.find(a => a.name == `${cu}`)
		const embed = new EmbedBuilder()
			.setTitle(`**( <:${emoji.identifier}> ) Random Emoji**`)
			.setColor(`303136`)
			.setImage(`${emoji.url}`)
			.setDescription(`**Nome:** \`${emoji.name}\`\n **Id:** \`${emoji.id}\``)
			.setFooter({ text: `${message.author.tag}`, iconURL: `${message.author.avatarURL()}` })
		message.channel.send({ embeds: [embed] });
	}
}