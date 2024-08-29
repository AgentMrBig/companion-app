'use client';

import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput('');

    // Here you would typically send a request to your AI backend
    // For now, we'll just echo the message back
    const botMessage = { role: 'assistant', content: `You said: ${input}` };
    setMessages(prevMessages => [...prevMessages, botMessage]);
  };

  return (
    <div className="flex flex-col h-[70vh] max-w-2xl mx-auto border rounded-lg">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`p-3 rounded-lg ${
            message.role === 'user' ? 'bg-blue-100 ml-auto' : 'bg-gray-100'
          } max-w-[80%]`}>
            {message.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit" 
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;