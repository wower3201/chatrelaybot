const Discord = require("discord.js")
const bot = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_INTEGRATIONS"] }
)

bot.login(process.env.token)



const bedrock = require('bedrock-protocol')
const client = bedrock.createClient({
  realms: {
    realmInvite: "drqP2b_b2b8"// Function which recieves an array of joined/owned Realms and must return a single Realm. Can be async
  }
})

bot.on("ready", () => {
  const guild = bot.guilds.cache.get("962336358582583306")
  guild.commands.create({
  name: "cmd",
  description: "Eseguire un cmd",
  options: [
      {
          name: "cmdsyn",
          description: "Il cmd",
          type: "STRING",
          required: true
      }
  ]
})
})

bot.on("interactionCreate", interaction => {
if (!interaction.isCommand()) return


if (interaction.commandName == "cmd") {
if (!interaction.member.permissions.has("MANAGE_SERVER")) {
  return interaction.reply({ content: "Non hai il permesso", ephemeral: true })
}

var utente = interaction.options.getString("cmdsyn")

client.queue('text', {
  type: 'chat', needs_translation: false, source_name: client.username, xuid: '', platform_chat_id: '',
  message: `/${utente}`
})

interaction.reply({ content: "Comando eseguto con successo" })
}
})


client.on('text', data => {
  
  bot.channels.cache.get('1018496267309031504').send(`[${data.source_name}]: ${data.message}`)
})

bot.on("messageCreate", message => {
if (message.author.id == "1018467183933800518") return
if (message.channelId == "1018496267309031504") {
  client.queue('text', {
    type: 'chat', needs_translation: false, source_name: client.username, xuid: '', platform_chat_id: '',
    message: `[DISCORD]: ${message.content}`
})}})