const { EmbedBuilder } = require('discord.js');
module.exports = {
	name: 'random-color',
	aliases: ['rc', 'randocolor', 'random color'],
	description: 'Gera um hex aleatório',
	run: async (client, message, args) => {
		let corzinha = Math.floor((1 + Math.random()) * 0x100000).toString(16);
		const embed = new EmbedBuilder()
			.setTitle(`**( <:simo_neve:1018278407550816346> ) Random Color**`)
			.setColor(`303136`)
			.setImage(`${corzinha.url}`)
			.setDescription(`**Nome:** \`${emoji.name}\`\n **Id:** \`${emoji.id}\``)
			.setFooter({ text: `${message.author.tag}`, iconURL: `${message.author.avatarURL()}` })
		message.channel.send({ embeds: [embed] });
}
}