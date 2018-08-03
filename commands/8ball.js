const responses = [
    'Unclear, ask again later',
    'Soon',
    'Yes',
    'Absolutely!',
    'Never',
    'Magic 8-ball is currently unavailable, please leave a message after the tone. \\*beep\\*',
    'When you are ready',
    'Hopefully',
    'Hopefully not',
    'Oh my, why would you even ask that?',
    'What kind of a question is that?',
    'Over my dead body!',
    'Haha, funny joke'
];

function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

exports.run = (bot, message, args) => {
     if (args.length < 1) {
         throw 'Please specify something to ask of the magic 8-ball!';
     }
 
     let response = randomItem(responses);
 
     const query = args.join(' ');
 
     if (query.indexOf('TotoDelon') > -1 || query.indexOf('233360087979130882') > -1) {
          response = 'He is a bitch oWo.';
     }
     if (query.indexOf('MrHacker449') > -1 || query.indexOf('233360087979130882') > -1) {
        response = 'He is very cool';
   }

     message.channel.send(`${query} :8ball: | **${response}**`);
}    


exports.info = {
    name: '8ball',
    usage: '8ball <question>',
    description: 'Asks the magic 8-ball a question'
};