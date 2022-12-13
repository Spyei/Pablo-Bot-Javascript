const { EmbedBuilder, ButtonBuilder, ActionRowBuilder } = require('discord.js');
module.exports = {
	name: 'invite',
	aliases: ['adicionar', 'adicionar bot', 'invitar'],
	description: 'Retorna o ping atual do bot',
	run: async (client, message, args) => {
		let guild = client.guilds.cache.size
		let math = Math.floor(guild + 1)
		const embed = new EmbedBuilder()
			.setTitle('**( <:simo_amigos:1018277464293773382> ) Obrigado por me adicionar em seu servidor!**')
			.setColor('303136')
			.setDescription(`Sabia que se você me adicionar no seu servidor eu vou estar em exatos \`${math}\` Servidores`)
			.setFooter({ text: `${message.author.tag}`, iconURL: `${message.author.avatarURL()}` })
		const button = new ActionRowBuilder().addComponents(new ButtonBuilder()
			.setURL('https://discord.com/api/oauth2/authorize?client_id=1021810246462738432&permissions=1644971949559&scope=bot%20applications.commands')
			.setLabel('Me adicione!')
			.setStyle('Link')
			.setEmoji('📤')
		)
		message.channel.send({ embeds: [embed], components: [button]})
}
}