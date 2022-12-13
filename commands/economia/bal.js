const { EmbedBuilder } = require('discord.js');
const db = require('secure-db')
module.exports = {
  name: 'bal',
	aliases: ['atm'],
  description: 'Mostra informações da economia do mencionado ou seu',
  run: async(client, message, args) => {
		if (db.get(`${message.author.id}.money`) === null) return message.channel.send('**( ❌ ) Você precisa se registrar na minha database primeiro, use p!registrar**')
		let user = message.mentions.users.first() || message.author;
		let dinhero = db.get(`${user.id}.money`)
	  const embed = new EmbedBuilder()
		.setColor('303136')
		.setTitle(`**( 🏦 ) Balance**`)
		.setDescription(`<@${user.id}>, Você tem no total \`${dinhero.toLocaleString()}\` 💸`)
		.setThumbnail(`${user.avatarURL()}`)
		.setFooter({ text: `${user.tag}`, iconURL: `${user.avatarURL()}` })
		message.channel.send({ embeds: [embed] });
	}
}