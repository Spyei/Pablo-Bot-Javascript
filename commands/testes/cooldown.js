const db = require('secure-db')
const moment = require('moment')
module.exports = {
    name: "teste",
    run: async (client, message, args) => {
let tempo = Date.now() + 300000
let momento = moment(tempo).startOf('minute').fromNow()
let sim = Math.floor(db.get(`${message.author.id}.cooldown`) / 1000)
if(Date.now() < db.get(`${message.author.id}.cooldown`)){
message.channel.send(`Volte <t:${sim}:t>`)
}else{
db.set(`${message.author.id}.cooldown`, tempo)
message.channel.send(`filho da s`)
}
}
}