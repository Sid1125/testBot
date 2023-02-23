﻿const { Discord, Client, Partials, Collection, GatewayIntentBits, ActivityType } = require('discord.js');
const ytdl = require('ytdl-core');
const colors = require("colors");
const { Player } = require('discord-player');
const fs = require('fs');
const fetch = require('node-fetch');
const { GiveawaysManager } = require('discord-giveaways');
const prefix = 's#';

const Schema = require('./models/welcomeChannel');

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "";
const mongo = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1});
mongo.connect(err => {
  const collection = mongo.db("test").collection("devices");
  // perform actions on the collection object
  mongo.close();
});
const config = require('./config.json');

// Creating a new client:
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildVoiceStates
  ],
  partials: [
    Partials.Channel,
    Partials.Message,
    Partials.User,
    Partials.GuildMember,
    Partials.Reaction
  ]
});
client.config = config;

// Host the bot:
require('http').createServer((req, res) => res.end('Ready.')).listen(3000)

// Getting the bot token:
const AuthenticationToken = process.env.DJS_TOKEN || "";
if (!AuthenticationToken) {
  console.warn("[CRASH] Authentication Token for Discord bot is required! Use Envrionment Secrets or config.json.".red + "\n")
  process.exit();
};
client.on('guildMemberAdd', async(member) => {
	Schema.findOne({ Guild: member.guild.id }, async(err, data) => {
		if(!data) return;
const user = member.user;

		

const channel = member.guild.channels.cache.get(data.Channel);

const embed = new Discord.MessageEmbed()
                        .setTitle(`Welcome!, Enjoy your stay at ${member.guild.name}! `)     
                        .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5B73NVrODIjdj8OOsYjvBNsxpNR-gm4egBg&usqp=CAU')
                        .setColor("BLUE")
                        .setDescription(`Glad you are here ${member}!!!!\nBe sure to check the Rules of the server!\nYou are the ${member.guild.memberCount}th Member of this Server!!`)

channel.send({ embeds: [embed] })


});

});

client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        embedColor: "#FF0000",
        reaction: "🎉"
    }
});
// We now have a client.giveawaysManager property to manage our giveaways!

client.giveawaysManager.on("giveawayReactionAdded", (giveaway, member, reaction) => {
    console.log(`${member.user.tag} entered giveaway #${giveaway.messageID} (${reaction.emoji.name})`);
});

client.giveawaysManager.on("giveawayReactionRemoved", (giveaway, member, reaction) => {
    console.log(`${member.user.tag} unreact to giveaway #${giveaway.messageID} (${reaction.emoji.name})`);
});

client.giveawaysManager.on("giveawayEnded", (giveaway, winners) => {
    console.log(`Giveaway #${giveaway.messageID} ended! Winners: ${winners.map((member) => member.user.username).join(', ')}`);
	

});
client.on("messageCreate", (message) => {
    const badWords = ["fuck", "saale", "kutte", "bitch"];

    if (badWords.some(word => message.content.toLowerCase().includes(word))) {
        message.delete();
		    message.reply ("No bad Words allowed!");
    };
    
    phrase(message);
});

function phrase(message) {
    const phraseResponses = {
        "dream": "In this video 3 of my friends try and hunt me down! If I kill the Ender Dragon I win but if they kill me once I lose. \nThis is Minecraft Manhunt. \nAlso, only a small percentage of people who watch my videos are subscribed, so make sure you subscribe. This really helps me out a lot! So, let's get straight into the video! \n\n(_Dream Minecraft Manhunt music starts playing!_) \n\n(_Dream killed the Ender Dragon and won!!_)",
        "technoblade": "Hail TECHNOBLADE!!!! \n\nTECHNOBLADE NEVER DIES",
        "wilbursoot": "2 to the 1 to the 1 to the 3 Please get TommyInnit off my screen!!",
        "bbs": "Hey Fellas Beast boy here!",
        "rasode me kon tha?": "Rashi Ben",
        "drista": "Tommy I need help Dream hit me! Help me TommyInnit!",
        "lets fight": "I am gonna kill you!",
        "no u": "Aaaah, You killed me. \nYou won't live a peaceful life!",
        "ghostbot": "Boooooo! I am the ghost of the client you killed!",
        "so what": "You know what? I won't fight you! \nYou are just a waste of time! \nBYE",
        "RIP": "let's keep silence of 2 minutes for Our Loved friend!!"
    };
	
    var content = message.content;
    var phraseToSend;
    var trigger;

    switch (content) {
        case 'dream':
            phraseToSend = phraseResponses['dream'];
            trigger = 'dream';
            break;
        case 'technoblade':
            phraseToSend = phraseResponses['technoblade'];
            trigger = 'technoblade';
            break;
        case 'wilbursoot':
            phraseToSend = phraseResponses['wilbursoot'];
            trigger = 'wilbursoot';
            break;
        case 'bbs':
            phraseToSend = phraseResponses['bbs'];
            trigger = 'bbs';
            break;
        case 'rasode me kon tha?':
            phraseToSend = phraseResponses['rasode me kon tha?'];
            trigger = 'rasode me kon tha?';
            break;
        case 'drista':
            phraseToSend = phraseResponses['drista'];
            trigger = 'drista';
            break;
        case 'lets fight':
            phraseToSend = phraseResponses['lets fight'];
            trigger = 'lets fight';
            break;
        case 'no u':
            phraseToSend = phraseResponses['no u'];
            trigger = 'no u';
            break;
        case 'ghostbot':
            phraseToSend = phraseResponses['ghostbot'];
            trigger = 'ghostbot';
            break;
        case 'so what':
            phraseToSend = phraseResponses['so what'];
            trigger = 'so what';
            break;
        case 'RIP':
            phraseToSend = phraseResponses['RIP'];
            trigger = 'RIP';
            break;
    };

    if (message.content.toLowerCase() === trigger) {
        message.channel.send({content: `${phraseToSend}`});
    };
};
// Handler:
client.commands = new Collection();
client.events = new Collection();

module.exports = client;
fs.readdir('./commands',(err,files) =>{
    if(err) console.log(err);
    let jsfiles = files.filter(f=> f.split(".").pop() === "js");
  
    if(jsfiles.length <= 0) {
      console.log(`NO COMMANDS FOUND !`);
    }
  
  console.log(`LOADING ${jsfiles.length} COMMANDS !`);
  
  jsfiles.forEach((f,i)=>{
    let sss = require(`./commands/${f}`);
    console.log(`${i+1}: ${f} Has Been Loaded !`);
    client.commands.set(sss.help,sss)
  })
  })
  

    client.on("messageCreate", async message => {
      if(message.author.client) return;
      if(message.channel.type === "dm") return;
  
      let messageArray = message.content.split(" ");
      let command = messageArray[0];
      let args = messageArray.slice(1);
  
      if(!command.startsWith(prefix)) return;
  
      let cmd = client.commands.get(command.slice(prefix.length));
      if(cmd) cmd.run(client, message, args);
  
  });
  const core = fs.readdirSync('./commands/core').filter(file => file.endsWith('.js'));
  const infos = fs.readdirSync('./commands/infos').filter(file => file.endsWith('.js'));

  
  
  for (const file of core) {
      console.log(`Loading command ${file}`);
      const command = require(`./commands/core/${file}`);
      client.commands.set(command.name.toLowerCase(), command);
  };
  
  for (const file of infos) {
      console.log(`Loading command ${file}`);
      const command = require(`./commands/infos/${file}`);
      client.commands.set(command.name.toLowerCase(), command);
  };
  

  const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
  
  for (const file of events) {
      console.log(`Loading discord.js event ${file}`);
      const event = require(`./events/${file}`);
      client.on(file.split(".")[0], event.bind(null, client));
  };

  



  client.once('ready', async () => {
          console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({
  	  activities: [{ name: `s#help in ${client.guilds.cache.size} servers.`, type: ActivityType.Watching }],
  	  status: 'online',
});
  });


// Login to the bot:
client.login(AuthenticationToken)
  .catch((err) => {
    console.warn("[CRASH] Something went wrong while connecting to your bot..." + "\n");
    console.warn("[CRASH] Error from Discord API:" + err);
    process.exit();
  });

// Handle errors:
process.on('unhandledRejection', async (err) => {
  console.log(`[ANTI-CRASH] Unhandled Rejection: ${err}`.red)
})
/*let ls=0;
client.on("message", msg => {
    if (msg.content === "chaton") {
        ls=1;
        message.reply('ChatBot On')
    }
  })

  client.on("message", msg => {
    if (msg.content === "chatoff") {
      ls=0;
      message.reply('ChatBot Off')
    }
  })

  if (!(ls=0)) {     
        require('dotenv').config();
  const { Configuration, OpenAIApi } = require("openai");
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  let prompt =`SUtilBot is a chatbot that reluctantly answers questions.\n\
You: How many pounds are in a kilogram?\n\
Marv: This again? There are 2.2 pounds in a kilogram. Please make a note of this.\n\
You: What does HTML stand for?\n\
Marv: Was Google too busy? Hypertext Markup Language. The T is for try to ask better questions in the future.\n\
You: When did the first airplane fly?\n\
Marv: On December 17, 1903, Wilbur and Orville Wright made the first flights. I wish they'd come and take me away.\n\
You: What is the meaning of life?\n\
Marv: I'm not sure. I'll ask my friend Google.\n\
You: hey whats up?\n\
Marv: Nothing much. You?\n`;

  client.on("messageCreate", function(message) {
    if (message.author.bot) return;
    prompt += `You: ${message.content}\n`;
   (async () => {
         const gptResponse = await openai.createCompletion({
             model: "text-davinci-002",
             prompt: prompt,
             max_tokens: 60,
             temperature: 0.3,
             top_p: 0.3,
             presence_penalty: 0,
             frequency_penalty: 0.5,
           });
         message.reply(`${gptResponse.data.choices[0].text.substring(5)}`);
         prompt += `${gptResponse.data.choices[0].text}\n`;
     })();                          
    })
}

*/
