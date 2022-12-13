const { EmbedBuilder } = require('discord.js')
const moment = require("moment");
moment.locale("pt-br");
module.exports = {
	name: "botinfo",
	aliases: ['bi', 'bot-info'],
	description: 'mostra informações do bot',
	run: async (client, message, args) => {
		let criacao = moment(`${client.user.createdAt}`).format("LLLL")
		const embed = new EmbedBuilder()
			.setTitle(`**( <:simo_info:1017567152410210364> ) Botinfo**`)
			.addFields(
				{
					name: `**Informações de \`${client.user.tag}\`**`, value: `
> **ID:** \`${client.user.id}\`
> **Dono do bot:** <@955095844275781693>
> **Tenho: \`${client.commands.size}\` Comandos disponiveis**
> **Fui criado em \`${criacao}\`**
`
				}
			)
			.setThumbnail(`${client.user.avatarURL()}`)
			.setColor('#303136')
			.setFooter({ text: `${message.author.tag}`, iconURL: `${message.author.avatarURL()}` })
		message.channel.send({ embeds: [embed] });
	}
}