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

client.on("messageCreate", message => {
  if (message.content.startsWith("!say")) { //Importante che ci sia startsWith in modo che il comando non deve essere solo "!comando" ma può continuare
      const args = message.content.split(/ +/); //Tutti gli argomenti

      let arg1 = args[1]; //Argomento 1

      let testo = args.slice(2).join(" "); //Con slice si rimuovono le prima due parole, e poi le successive vengono contatenate con uno spazio
      client.queue('text', {
        type: 'chat', needs_translation: false, source_name: client.username, xuid: '', platform_chat_id: '',
        message: `[DISCORD] - ${message.author}: ${arg1}`
      })
  }
})