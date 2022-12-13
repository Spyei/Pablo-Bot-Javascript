const { EmbedBuilder } = require('discord.js');
const moment = require("moment");
moment.locale("pt-br");
module.exports = {
	name: 'userinfo',
	aliases: ['ui', 'user-info'],
	description: 'Mostra informções do usuario',
	run: async (client, message, args) => {
		const user =
			message.mentions.users.first() ||
			message.author;
		const userav = user.displayAvatarURL()
		let usercria = moment(user.createdAt).format("LLLL");
		const embed = new EmbedBuilder()
			.setTitle(`**( ℹ ) UserInfo**`)
			.addFields(
				{
					name: `**Informações do usuário: \`${user.username}\`**`, value: `
> **ID:** \`${user.id}\`
> **Discriminador:** \`#${user.discriminator}\`
> **Conta criada há:** \`${usercria}\`
`
				}
			)
			.setThumbnail(`${userav}`)
			.setColor('#303136')
			.setFooter({ text: `${message.author.tag}`, iconURL: `${message.author.avatarURL()}` })
		message.channel.send({ embeds: [embed] });
	}
}