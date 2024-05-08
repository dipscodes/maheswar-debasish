const https = require('https');

const botToken = '7027867176:AAGVSE0Utfp0yZ6qA4vIrHYmwftctUHJr1Y';
const chatId = '-1002096638123';
const message = 'Gurudev Sushil Bhardwaj ki Jay';

const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

https.get(url, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(JSON.parse(data));
  });
}).on('error', (err) => {
  console.log("Error: " + err.message);
});
