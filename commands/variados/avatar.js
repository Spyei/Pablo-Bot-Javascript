const { EmbedBuilder } = require('discord.js');
module.exports = {
	name: 'avatar',
	aliases: ['av'],
	description: 'Retorna o avatar do mencionado',
	run: async (client, message, args) => {
		const user =
			message.mentions.users.first() ||
			message.author;
		const avatar = user.displayAvatarURL({
			dynamic: true,
			format: "png",
			size: 2048,
		});
		const embed = new EmbedBuilder()
			.setColor('303136')
			.setTitle(`**( <:simo_image:1027297944216539157> ) Avatar de ${user.tag}**`)
			.setDescription(`Clique [aqui](${avatar}) para baixar o avatar`)
			.setFooter({ text: `${user.tag}`, iconURL: `${avatar}` })
			.setImage(`${avatar}`)
		message.channel.send({ embeds: [embed] });
	}
}