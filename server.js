// This script starts the server using nodemon for automatic restart on file changes
//(pt-br) Este script inicia o servidor usando o nodemon para reinicialização automática em alterações de arquivos

// Install nodemon as a development dependency by running the command:
// (PT-BR) Instale o nodemon como uma dependência de desenvolvimento executando o comando:
// npm install nodemon --save-dev

// To start the server and enable automatic restart, run the command:
// (PT-BR) Para iniciar o servidor e habilitar a reinicialização automática, execute o comando:
// npm startconst express = require('express');
const express = require('express');
const ytdl = require('ytdl-core');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/download', (req, res) => {
  const videoURL = req.query.url;
  const format = req.query.format || 'mp4';

  if (!ytdl.validateURL(videoURL)) {
    res.send('Invalid YouTube URL');
    return;
  }

  res.header('Content-Disposition', `attachment; filename="video.${format}"`);
  ytdl(videoURL, { format: format }).pipe(res);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


