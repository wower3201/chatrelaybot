const Discord = require("discord.js")
const bot = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_INTEGRATIONS"] }
)

bot.login(process.env.token)

bot.on('ready', () => {
  
})

const bedrock = require('bedrock-protocol')
const client = bedrock.createClient({
  realms: {
    realmInvite: "drqP2b_b2b8"// Function which recieves an array of joined/owned Realms and must return a single Realm. Can be async
  }
})

bot.on("ready", () => {
  var server = bot.guilds.cache.get("962336358582583306")
  server.commands.create({
    name: "executecmd",
    description: "Esegue un command",
    options: [
      {
        name: "cmd",
        description: "Il comando da eseguire (Non serve inserire lo /)",
        type: "STRING",
        required: true
      }
    ]
  })
})

bot.on('interactionCreate', interaction => {
  if (!interaction.isCommand()) return

  if (interaction.commandName == "executecmd"){
    if (!interaction.member.permissions.has("MANAGE_SERVER")){
      return interaction.reply({content: "Non hai il permesso di eseguire questo comando!", ephemeral: true})
    }
    var cmd = interaction.options.getString("cmd")
    client.queue('text', {
      type: 'chat', needs_translation: false, source_name: client.username, xuid: '', platform_chat_id: '',
      message: `/${cmd}`
    })
    } interaction.reply({content: "Comando eseguito!", ephemeral: true})
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