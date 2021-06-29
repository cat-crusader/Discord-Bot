const Discord = require("discord.js")
const { Client, MessageEmbed } = require('discord.js');
const client = new Discord.Client()



client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)

})

// client.on("message", msg => {
//   if (msg.content === "міу") {
//     msg.channel.send('лох');
//   }
// //   if (msg.content.startsWith('!update')) {
// //     // let indOfDot = msg.content.indexOf('.', 0);
// //     // let title;
// //     // let content;
// //     // if(indOfDot<=7)
// //     // title = msg.content.slice(7);
// //     // else
// //     // title = msg.content.slice(7,indOfDot);
// // // while(indOfDot!=-1)
// // // {
// // // indOfDot = msg.content.indexOf('.', indOfDot);

// // // }


// //         const embed = new MessageEmbed()
// //       // Set the title of the field
// //       .setTitle('l')
// //       // Set the color of the embed
// //       .setColor(0xff0000)
// //       // Set the main content of the embed
// //       .setDescription('Hello, this is a \n slick embed!');

// //   // client.channels.fetch('784545317432983573').send('hi');

// //   }
  
// })


//
client.login(process.env.TOKEN)