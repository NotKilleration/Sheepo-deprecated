const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'hug',
    description: "Hug Command",
    execute(message, args, Discord){
      
        const mentions = message.mentions.users.size;
        
        let hug = ["Huggiesss!!!!", "Yayyy Hugssss", "Tight hugssss", "hug hug hug", "Hugs everywhere!!!!"];
        let hugrandom = Math.floor(Math.random() * 5);
        
        let huggif = ["https://media.giphy.com/media/3oEdv4hwWTzBhWvaU0/giphy.gif",
                    "https://media.giphy.com/media/f6y4qvdxwEDx6/giphy.gif",
                    "https://media.giphy.com/media/U4LhzzpfTP7NZ4UlmH/giphy.gif",
                    "https://media.giphy.com/media/VduFvPwm3gfGO8duNN/giphy.gif",
                    "https://media.giphy.com/media/JzsG0EmHY9eKc/giphy.gif",
                    "https://media.giphy.com/media/KL7xA3fLx7bna/giphy.gif",
                    "https://media.giphy.com/media/yidUzriaAGJbsxt58k/giphy.gif",
                    "https://media.giphy.com/media/VbawWIGNtKYwOFXF7U/giphy.gif",
                    "https://media.giphy.com/media/f6y4qvdxwEDx6/giphy.gif",
                    "https://media.giphy.com/media/us8FXd0EtOXXa/giphy-downsized-large.gif",
                    "https://media.giphy.com/media/INUsrrxQW4et2/giphy.gif",
                    "https://media.giphy.com/media/UwaByp0aMg6BO/giphy.gif",
                    "https://media.giphy.com/media/kooPUWvhaGe7C/giphy.gif",
                    "https://media.giphy.com/media/13YrHUvPzUUmkM/giphy.gif",
                    "https://media.giphy.com/media/l41lSTVB8eei3U3hC/giphy.gif",
                    "https://media.giphy.com/media/eMIGPdZ77kPgD7nf4j/giphy.gif"
                ];






        let randomhug = Math.floor(Math.random() * 16);

        let hugr = hug[hugrandom];
        let huggr = huggif[randomhug];



        if(!mentions) {
            const hugEm = new Discord.MessageEmbed()
            
            .setColor('00FFEC')
            .setTitle("Here's a hug for you "+(message.author.username)+" :D :hugging: ")
            .setDescription(hugr)
            .setImage(huggr)
            
            message.channel.send({embed: [hugEm]});    
            
            message.react('❤️');
            message.react('😄');
        }   

        else {
        const hugEm2 = new Discord.MessageEmbed() 
        .setColor('00FFEC')
        .setTitle(":hugging: "+(message.author.username)+" hugs "+(message.mentions.members.first().displayName))
        .setDescription(hugr)
        .setImage(huggr)
        

        message.channel.send({ embed: [hugEm2]});
        }



    }
}