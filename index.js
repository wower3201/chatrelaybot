const Discord = require("discord.js")
const bot = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_INTEGRATIONS"] }
)

bot.login(process.env.token)



const bedrock = require('bedrock-protocol')
const client = bedrock.createClient({
  realms: {
    realmInvite: "drqP2b_b2b8",
    }
  }
)


client.on('text', data => {
  bot.channels.cache.get('1018496267309031504').send(`[${data.source_name}]: ${data.message}`)
})


bot.on("messageCreate", message => {
  if (message.author.id == "1018467183933800518") return
if (message.channelId == "1018496267309031504") {
  client.queue('text', {
    type: 'chat', needs_translation: false, source_name: client.username, xuid: '', platform_chat_id: '',
    message: `[§9DISCORD §r- §e${message.author.username}§r]: ${message.content}`
})}})


client.on("connect", data => {
  bot.channels.cache.get('1018496267309031504').send(`**UTENTE UNITO AL REALM**: ${data.source_name}`)
})