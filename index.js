const Discord = require("discord.js")
const { Client, MessageEmbed } = require('discord.js');
const client = new Discord.Client()



client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)

})

client.on("message", msg => {
  if (msg.content === "міу") {
    msg.channel.send('лох');
  }
  if (msg.content.startsWith('!update')) {
    let indOfDot = msg.content.indexOf('.', 0);
    let title;
    let content="";


    if(indOfDot<=7)
    title = "Something goes wrong";
    else
    title = msg.content.slice(7,indOfDot);


 while(indOfDot!=-1)
 {
  content+=msg.content.slice(indOfDot+1,msg.content.indexOf('.', indOfDot+1));
  content+='\n';
 indOfDot = msg.content.indexOf('.', indOfDot+1);
 console.log("contnent"+msg.content.length);
 console.log(indOfDot);



 }


        const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle(title)
      // Set the color of the embed
      .setColor(0xff0000)
      // Set the main content of the embed
      .setDescription(content);

  client.channels.fetch('784545317432983573')
     .then(channel => channel.send(embed));
  }
  
})


//
client.login(process.env.TOKEN)