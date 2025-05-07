const fs = require('fs');
const { Client, LocalAuth } = require('whatsapp-web.js');

// Crea el cliente con guardado de sesión automático
const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    args: ['--no-sandbox'],
    headless: true,
  }
});

client.on('qr', (qr) => {
  console.log('Escanea este QR en tu WhatsApp:');
  console.log(qr);
});

client.on('ready', () => {
  console.log('✅ Bot conectado a WhatsApp');
});

client.on('message', message => {
  if (message.body.toLowerCase() === 'hola') {
    message.reply('👋 ¡Hola! Soy tu bot en Railway 🚀');
  }
});

client.initialize();
