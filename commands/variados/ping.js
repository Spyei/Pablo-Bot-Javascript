const { EmbedBuilder } = require('discord.js');
module.exports = {
	name: 'ping',
	description: 'Retorna o ping atual do bot',
	run: async (client, message, args) => {
		const embed = new EmbedBuilder()
			.setTitle('**( ✏ ) Ping**')
			.setColor('303136')
			.setDescription(`Meu ping está em \`${client.ws.ping}ms\``)
			.setFooter({ text: `${message.author.tag}`, iconURL: `${message.author.avatarURL()}` })
		message.channel.send({ embeds: [embed] });
	}
}