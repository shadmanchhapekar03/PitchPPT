import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageSquare, FileDown, Settings, Clock, LayoutDashboard, User, Download, Zap, Sparkles } from 'lucide-react';

const Chat = () => {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Welcome to PitchMaster Workspace.\nI am ready to assist you in designing a professional presentation. Please describe your business model or pitch requirements to get started.", 
      sender: 'ai' 
    }
  ]);
  const [input, setInput] = useState('');
  const [mode, setMode] = useState('chat'); // 'chat' or 'ppt'
  const [isLoading, setIsLoading] = useState(false);

  const backenURL = "http://127.0.0.1:8000" || "https://maryln-dutiable-felicita.ngrok-free.dev"
  
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const extractFileUrl = (text) => {
    const match = text.match(/generated_files\/[\w-]+\.pptx/);
    if (match) {
      return `${backenURL}/${match[0]}`;
    }
    return null;
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(`${backenURL}/chat`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': '69420'
        },
        body: JSON.stringify({ user_message: userMessage.text, mode: mode })
      });

      if (!response.ok) {
        throw new Error('Failed to communicate with API');
      }

      const data = await response.json();
      
      const fileUrl = extractFileUrl(data.ai_message);
      
      const aiMessage = { 
        id: Date.now() + 1, 
        text: data.ai_message, 
        sender: 'ai',
        fileUrl: fileUrl
      };
      
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        text: "Error: Connection to the presentation engine failed. Please ensure your backend service is running.", 
        sender: 'ai' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chat-layout">
      {/* Professional Sidebar */}
      <aside className="chat-sidebar">
        <div style={{ marginBottom: '1.5rem' }}>
          <div className="sidebar-title">Workspace</div>
          <ul className="sidebar-menu">
            <li className="sidebar-item active">
              <LayoutDashboard size={14} />
              Active Project
            </li>
            <li className="sidebar-item">
              <Clock size={14} />
              History
            </li>
            <li className="sidebar-item">
              <FileDown size={14} />
              Saved Decks
            </li>
          </ul>
        </div>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <div className="sidebar-title">Settings</div>
          <ul className="sidebar-menu">
            <li className="sidebar-item">
              <Settings size={14} />
              Preferences
            </li>
          </ul>
        </div>

        <div className="sidebar-bottom">
          <div className="sidebar-item">
            <User size={14} />
            My Account
          </div>
        </div>
      </aside>

      {/* Main Interaction Area */}
      <main className="chat-main">
        {/* Header */}
        <header className="chat-header">
          <div className="chat-header-title">
            Project: <span style={{ color: 'var(--text-muted)' }}>Untitled Pitch</span>
          </div>
          <div className="mode-badge">
            {mode === 'chat' ? (
              <>
                <Zap size={12} /> Agent Ready
              </>
            ) : (
              <>
                <Sparkles size={12} /> Generator Active
              </>
            )}
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="chat-content-scroll">
          {messages.map((msg) => (
            <div key={msg.id} className={`message-wrapper ${msg.sender}`}>
              <div className="message-inner">
                <div className={`avatar ${msg.sender}`}>
                  {msg.sender === 'user' ? <User size={14} /> : <Sparkles size={14} />}
                </div>
                <div className="message-text">
                  {msg.text}
                  {msg.fileUrl && (
                    <div style={{ display: 'block' }}>
                      <a href={msg.fileUrl} target="_blank" rel="noreferrer" className="download-link-box">
                        <Download size={14} />
                        Download Presentation (.pptx)
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="message-wrapper ai">
              <div className="message-inner">
                <div className="avatar ai">
                  <Sparkles size={14} />
                </div>
                <div className="message-text">
                  <div className="typing-indicator" style={{ marginTop: '0.2rem', display: 'inline-flex' }}>
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Professional Dashboard Input Area */}
        <div className="dashboard-input-area">
          <div className="input-container-inner">
            <div className="mode-tabs">
              <button 
                className={`tab-btn ${mode === 'chat' ? 'active' : ''}`}
                onClick={() => setMode('chat')}
              >
                <MessageSquare size={14} /> Brainstorm (Chat)
              </button>
              <button 
                className={`tab-btn ${mode === 'ppt' ? 'active' : ''}`}
                onClick={() => setMode('ppt')}
              >
                <FileDown size={14} /> Generate Presentation
              </button>
            </div>
            
            <div style={{ position: 'relative' }}>
              <textarea
                className="professional-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={mode === 'chat' ? "Type your prompt here..." : "Provide presentation topic, audience, and key points to generate..."}
                rows="2"
              />
              <button 
                className="dashboard-send-btn" 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
              >
                <Send size={14} />
              </button>
            </div>
            <div style={{ textAlign: 'center', marginTop: '0.5rem', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
              PitchMaster AI can make mistakes. Verify important information before presenting.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chat;
