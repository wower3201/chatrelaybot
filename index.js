const Discord = require("discord.js")
const bot = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_INTEGRATIONS"] }
)

/**
 * Sends a text message in Minecraft chat
 * @param {String} text The text to send
 * @example sendMessage("HI!")
 */

function sendMessage(text) {
  client.queue('text', {
    type: 'chat', needs_translation: false, source_name: client.username, xuid: '', platform_chat_id: '',
    message: text
  })
}

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


client.on('text', data => {
  if (data.message.toLowerCase().includes("ciao") && !data.source_name.toLowerCase().includes("stormcraft")) {
    sendMessage(`Ciao ${data.source_name}!`)
  }
})
const { Authflow } = require("prismarine-auth")
const { RealmAPI } = require('prismarine-realms')
const authflow = new Authflow()
const api = RealmAPI.from(authflow, 'bedrock') // or 'java'


bot.on("messageCreate", message => {
  if (message.content.startsWith("!realms_info")) { //Importante che ci sia startsWith in modo che il comando non deve essere solo "!comando" ma può continuare
      const args = message.content.split(/ +/); //Tutti gli argomenti

      let arg1 = args[1]; //Argomento 1

      let testo = args.slice(2).join(" "); 
      api.getRealmFromInvite(arg1).then(data => {
        message.reply(`INFO REALM: Nome: ${data.name}, Permesso di default: ${data.defaultPermission}, Players massimi: ${data.maxPlayers}, Owner: ${data.owner}, Stato: ${data.state}`)
      })
  }
})