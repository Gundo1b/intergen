import React, { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { Theme } from '../types';

interface AIChatProps {
  theme: Theme;
}

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  provider?: string;
}

const AI_PROVIDERS = [
  { name: 'ChatGPT', id: 'chatgpt', color: 'text-green-500' },
  { name: 'Claude', id: 'claude', color: 'text-orange-500' },
  { name: 'Gemini', id: 'gemini', color: 'text-blue-500' },
  { name: 'Llama', id: 'llama', color: 'text-purple-500' },
  { name: 'DeepSeek', id: 'deepseek', color: 'text-red-500' },
  { name: 'Qwen', id: 'qwen', color: 'text-cyan-500' },
];

export const AIChat: React.FC<AIChatProps> = ({ theme }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your AI assistant. Choose a provider above to start chatting!',
      isUser: false,
      provider: 'system'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [selectedProvider, setSelectedProvider] = useState('chatgpt');

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
    };

    // Add AI response (simulated)
    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: `This is a simulated response from ${AI_PROVIDERS.find(p => p.id === selectedProvider)?.name}. In a real implementation, this would connect to the ${selectedProvider} API.`,
      isUser: false,
      provider: selectedProvider,
    };

    setMessages([...messages, userMessage, aiMessage]);
    setInputText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-bg-dark dark:to-slate-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold font-display bg-gradient-to-r from-brand-start to-brand-end text-transparent bg-clip-text mb-4">
            AI Chat
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Choose your AI provider and start chatting
          </p>
        </div>

        {/* Provider Selection */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wide">
            Choose AI Provider
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {AI_PROVIDERS.map((provider) => (
              <button
                key={provider.id}
                onClick={() => setSelectedProvider(provider.id)}
                className={`p-3 rounded-lg border transition-all duration-200 ${
                  selectedProvider === provider.id
                    ? 'border-brand-end bg-brand-end/10 text-brand-end'
                    : 'border-slate-200 dark:border-slate-700 hover:border-brand-start dark:hover:border-brand-start'
                }`}
              >
                <div className={`text-sm font-medium ${provider.color}`}>
                  {provider.name}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Interface */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
          {/* Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.isUser
                      ? 'bg-brand-end text-white'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100'
                  }`}
                >
                  {!message.isUser && (
                    <div className="flex items-center gap-2 mb-1">
                      <Bot size={16} />
                      <span className="text-xs font-medium opacity-75">
                        {message.provider === 'system' ? 'System' : AI_PROVIDERS.find(p => p.id === message.provider)?.name}
                      </span>
                    </div>
                  )}
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-slate-200 dark:border-slate-700 p-4">
            <div className="flex gap-2">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={`Chat with ${AI_PROVIDERS.find(p => p.id === selectedProvider)?.name}...`}
                className="flex-1 resize-none border border-slate-300 dark:border-slate-600 rounded-lg px-3 py-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-end"
                rows={1}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="px-4 py-2 bg-brand-end text-white rounded-lg hover:bg-brand-end/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
          <p>Currently showing simulated responses. In a real implementation, this would connect to actual AI APIs.</p>
        </div>
      </div>
    </div>
  );
};