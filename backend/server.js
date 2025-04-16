const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000", // URL do seu frontend React
        methods: ["GET", "POST"]
    }
});

// Armazenar mensagens para novos usuários
const messages = [];

io.on('connection', (socket) => {
    console.log('Usuário conectado:', socket.id);

    // Enviar mensagens anteriores para o usuário que acabou de conectar
    socket.emit('previousMessages', messages);

    // Receber mensagem do cliente
    socket.on('sendMessage', (data) => {
        messages.push(data);
        // Enviar mensagem para todos os clientes conectados
        io.emit('receivedMessage', data);
    });

    socket.on('disconnect', () => {
        console.log('Usuário desconectado:', socket.id);
    });
});

const PORT = 4000;
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});