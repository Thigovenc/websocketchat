# 💬 Chat em Tempo Real com WebSocket, React, TypeScript e Node.js

Este é um projeto de **exemplo prático** que demonstra como criar um sistema de **chat simples em tempo real** utilizando:

- 🧠 **Node.js + Express + Socket.IO** no backend
- ⚛️ **React + TypeScript** no frontend
- 🔄 Comunicação bidirecional em **tempo real** via WebSocket

---

## 🧠 Conceito

Este projeto simula uma aplicação de chat onde usuários entram em uma "sala" e trocam mensagens instantaneamente. É um ótimo ponto de partida para aplicações como:

- Sistemas de entrega com atualizações de status
- Chats privados ou em grupo
- Notificações em tempo real
- Games multiplayer e dashboards colaborativos

---

## 🗂️ Estrutura do Projeto

```
📁 projeto/
├── backend/            # Servidor Node.js com WebSocket (Socket.IO)
│   └── server.js
├── frontend/           # Aplicação React + TypeScript
│   ├── src/
│   │   ├── App.tsx
│   │   ├── index.tsx
├── package.json
└── README.md
```

---

## 🚀 Como rodar o projeto

### 📦 Requisitos

- Node.js (v18+)
- npm ou yarn

---

### ▶️ Passo a passo

#### 1. Clone o repositório

```bash
git clone https://github.com/Thigovenc/websocketchat.git
cd websocketchat
```

#### 2. Inicie o backend

```bash
cd backend
npm install
node index.js
```

O backend ficará disponível em: [http://localhost:4000](http://localhost:4000)

#### 3. Inicie o frontend

```bash
cd frontend
npm install
npm run dev
```

O frontend estará rodando em: [http://localhost:3000](http://localhost:3000)

---

## 🧪 Teste rápido

1. Abra [http://localhost:3000](http://localhost:3000) em **duas abas diferentes**
2. Envie uma mensagem em uma aba
3. Veja a mensagem aparecendo **instantaneamente** na outra aba 🎉

---

## 🔌 Como funciona

### Backend (`backend/index.js`)

- Cria um servidor HTTP com Express
- Integra com `socket.io` para escutar conexões WebSocket
- Gerencia salas e mensagens enviadas por cada cliente

### Frontend (`frontend/src/`)

- Conecta ao servidor WebSocket via `socket.io-client`
- Permite entrar em uma sala (chat)
- Atualiza a interface com as mensagens recebidas em tempo real

---

## 📚 Tecnologias Utilizadas

| Tecnologia | Função           |
| ---------- | ---------------- |
| Node.js    | Backend          |
| Express    | Servidor HTTP    |
| Socket.IO  | WebSockets       |
| React      | Frontend         |
| TypeScript | Tipagem estática |

---

## 🧑‍💻 Autor

Feito com ❤️ por [Thiago Venceslau](https://github.com/Thigovenc)

---
