const venom = require('venom-bot');

venom
  .create()
  .then((client) => start(client))
  .catch((error) => {
    console.log(error);
  });

function start(client) {
  client.onMessage((message) => {
    if (message.body.toLowerCase() === 'hola') {
      client.sendText(message.from, '¡Hola! Soy tu bot en la nube 🤖');
    }
  });
}
