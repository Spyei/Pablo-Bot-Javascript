const { EmbedBuilder } = require('discord.js')

module.exports = {
	name: "emoji",
	description: 'Mostra informações do emoji solicitado',
	run: async (client, message, args) => {
		const moment = require('moment');
		moment.locale('pt-br');
		let nome = args.join(" ");
		let pinto = nome.replace('<:', '').replace('>', '');
		let cu = pinto.split(':', '2');
		let emoji = cu[0].replace('nome', '').replace('<', '').replace('let', '');
		let emojires = message.guild.emojis.cache.find(a => a.name == `${emoji}`);
		if (!args[0]) return message.channel.send('**( ❌ ) Digite algum emoji para ver as informações**')
		if (emojires === undefined) return message.channel.send('**( ❌ ) Este emoji não existe, ou não está no servidor**')
		let sim = message.guild.emojis.cache.find(a => a.name == `${emoji}`).createdAt.toLocaleString().split(',')[0];
		let data = moment(sim).format('LL')
		const embed = new EmbedBuilder()
			.setTitle(`**( <:simo_info:1017567152410210364> ) Emoji Info**`)
			.setDescription(`**Nome:** \`${emojires.name}\`\n **Id:** \`${emojires.id}\`\n **Data de criação:** \`${data}\``)
			.setImage(`${emojires.url}`)
			.setColor('#303136')
			.setFooter({ text: `${message.author.tag}`, iconURL: `${message.author.avatarURL()}` })
		message.channel.send({ embeds: [embed] });
	}
}