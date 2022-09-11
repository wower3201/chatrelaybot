const Discord = require("discord.js")
const bot = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] }
)

bot.login(process.env.token)


const bedrock = require('bedrock-protocol')
const client = bedrock.createClient({
  realms: {
    realmInvite: "drqP2b_b2b8"// Function which recieves an array of joined/owned Realms and must return a single Realm. Can be async
  }
})

client.on('text', data => {
  bot.channels.cache.get('1018496267309031504').send(`[${data.source_name}]: ${data.message}`)
})


bot.on('messageCreate', message => { 
  if (!message.author.id == "1018467183933800518") {
    client.write('text', {
      type: 'text',
      message: `[Da Discord: ${message.author}]: ${message.content}`
    })
  }
})
