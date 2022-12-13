const { EmbedBuilder } = require('discord.js')

module.exports = {
	name: "info",
	description: 'Mostra informações do comando',
	run: async (client, message, args) => {
		let nome = args.join(" ");
		if (!args[0]) return message.channel.send('**( ❌ ) Digite algum comando para ver as informações**')
		if (client.commands.find(x => x.name === `${nome}`) === undefined) return message.channel.send(`**( ❌ ) Este comando não existe**`)
		const embed = new EmbedBuilder()
			.setTitle(`**( <:simo_info:1017567152410210364> ) Info**`)
			.addFields(
				{
					name: `**Informações do comando: \`${client.commands.find(x => x.name === `${nome}`).name}\`**`, value: `
> **Aliases:** \`${client.commands.find(x => x.name === `${nome}`).aliases}\`
> **Descrição:** \`${client.commands.find(x => x.name === `${nome}`).description}\`
`
				}
			)
			.setThumbnail(`${client.user.avatarURL()}`)
			.setColor('#303136')
			.setFooter({ text: `${message.author.tag}`, iconURL: `${message.author.avatarURL()}` })
		message.channel.send({ embeds: [embed] });
	}
}