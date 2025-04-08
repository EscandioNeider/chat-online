const express = require('express');
const app = express();
const http = require('http').createServer(app);
const path = require('path');
const io = require('socket.io')(http);

// Diz pro express consumir a pasta public
app.use(express.static(__dirname + '/public'));

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public'))); // pasta onde está o sala.html

// Rota dinâmica para qualquer sala
app.get('/sala/:nome', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'sala.html'));
});

// Evento para quando o cliente se conecta ao servidor via Socket.io
io.on('connection', (socket) => {
  console.log('Novo usuário conectado');

  // Mensagem enviada pelo usuário
  socket.on('chat message', (dados) => {
    io.emit('chat message', dados);
  });

  // Aviso de novo usuário
  socket.on('user joined', (nome) => {
    socket.broadcast.emit('user joined', nome);
  });

  // Desconexão
  socket.on('disconnect', () => console.log('Usuário desconectado'));

  // Historico de conversas
  socket.on('buscarHistorico', (sala) => {
    const historico = historicoPorSala[sala] || [];
    socket.emit('respostaHistorico', historico);
  });

});

// Inicia o servidor na porta 3000
http.listen(3000, () => {
  console.log(`Servidor rodando na porta 3000 - Link http://localhost:3000`);
});
