const { EmbedBuilder } = require('discord.js')
const moment = require("moment");
moment.locale("pt-br");
module.exports = {
	name: "serverinfo",
	aliases: ['si', 'server-info'],
	description: 'Mostra informações do servidor',
	run: async (client, message, args) => {
		let criacao = moment(message.guild.createdAt).format("LLLL");
		const embed = new EmbedBuilder()
			.setTitle(`**( ℹ ) ServerInfo**`)
			.addFields(
				{
					name: `**Informações do servidor: \`${message.guild.name}\`**`, value: `
> **ID:** \`${message.guild.id}\`
> **Dono do servidor** <@${message.guild.ownerId}>
> **Temos \`${message.guild.memberCount}\` Membros neste servidor**
> **Foi criado em \`${criacao}\`**
`
				}
			)
			.setThumbnail(`${message.guild.iconURL()}`)
			.setColor('#303136')
			.setFooter({ text: `${message.author.tag}`, iconURL: `${message.author.avatarURL()}` })
		message.channel.send({ embeds: [embed] });
	}
}