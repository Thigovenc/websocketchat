// Arquivo: App.tsx

import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import "./App.css";

// Definição da interface para as mensagens
interface Message {
  username: string;
  message: string;
  time: string;
}

function App() {
  const [socket, setSocket] = useState<any>(null);
  const [message, setMessage] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Conectar ao servidor WebSocket quando o componente montar
  useEffect(() => {
    const newSocket = io("http://localhost:4000");
    setSocket(newSocket);

    // Limpar conexão quando o componente desmontar
    return () => {
      newSocket.disconnect();
    };
  }, []);

  // Configurar eventos do socket após a conexão
  useEffect(() => {
    if (!socket) return;

    // Receber mensagens anteriores
    socket.on("previousMessages", (previousMessages: Message[]) => {
      setMessages(previousMessages);
    });

    // Receber novas mensagens
    socket.on("receivedMessage", (message: Message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Limpeza de event listeners quando o componente desmontar
    return () => {
      socket.off("previousMessages");
      socket.off("receivedMessage");
    };
  }, [socket]);

  // Rolar para o final da lista de mensagens quando novas mensagens chegarem
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Enviar mensagem
  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim() && username.trim() && socket) {
      const messageData: Message = {
        username,
        message,
        time: new Date().toLocaleTimeString(),
      };

      socket.emit("sendMessage", messageData);
      setMessage("");
    }
  };

  return (
    <div className="chat-container">
      <header>
        <h1>Chat em Tempo Real com WebSocket e TypeScript</h1>
      </header>

      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <strong>{msg.username}</strong>{" "}
            <span className="time">[{msg.time}]</span>
            <p>{msg.message}</p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className="message-form">
        <input
          type="text"
          placeholder="Seu nome"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Digite sua mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
