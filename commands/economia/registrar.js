const db = require('secure-db')
const { EmbedBuilder } = require('discord.js')
module.exports = {
  name: 'registrar',
	aliases: ['register'],
  description: 'Registra na database',
  run: async(client, message, args) => {
		if(db.get(`${message.author.id}.money`) != null){
			message.channel.send(`**( ❌ ) Você já está registrado na minha database**`)
		}else{
		const embed = new EmbedBuilder()
		.setColor('303136')
		.setTitle(`**( 📗 ) Registro**`)
		.setDescription(`Você se registrou com sucesso na minha database!`)
		.setFooter({ text: `${message.author.tag}`, iconURL: `${message.author.avatarURL()}` })
		.setThumbnail(`${message.author.avatarURL()}`)
		message.channel.send({ embeds: [embed] });
		db.set(`${message.author.id}.money`, 0)
		}
	}
}