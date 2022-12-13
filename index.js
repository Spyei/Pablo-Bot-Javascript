const fs = require('node:fs');
const config = require('./config.json');
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const token = process.env['TOKEN']
const { EmbedBuilder } = require('discord.js')

const client = new Client({ intents: [3276799] });

client.once('ready', () => {
	console.log('Ready!');
});

client.commands = new Collection()
let folders = fs.readdirSync('./commands/')
folders.forEach(f => {
let files = fs.readdirSync(`./commands/${f}/`).filter(ff => ff.endsWith('.js'))
for (let file of files) {
let cmd = require(`./commands/${f}/${file}`)
client.commands.set(cmd.name, cmd)
}
})

client.on('messageCreate', async (message) => {
let prefix = config.prefix

if(message.content.startsWith('<@' + client.user.id + '>' || '<@!' + client.user.id + '>')){
	  const embed = new EmbedBuilder()
		.setTitle(`**( 🔧 ) Menção**`)
		.setDescription(`Olá **${message.author.tag}** Eu sou o pablo bot e estou sendo desenvolvido para testar o \`Discord.js\`\nMeu prefixo é \`${prefix}\``)
		.setColor('#303136')
		.setFooter({ text: `${message.author.tag}`, iconURL: `${message.author.avatarURL()}` })
		message.channel.send({ embeds: [embed] });
}
					
if(!message.content.startsWith(prefix)) return;
const args = message.content.slice(prefix.length).trim().split(' ')
let cmd = args.shift().toLowerCase()
const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
if(command) {
try {
command.run(client, message, args)
} catch(err) {
console.log(`Error ${err}`)
}
}
})
client.login(token)