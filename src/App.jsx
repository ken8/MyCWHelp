import React, { useState, useEffect } from 'react';

    function App() {
      const [messages, setMessages] = useState([]);
      const [input, setInput] = useState('');
      const [showChat, setShowChat] = useState(true);

      useEffect(() => {
        const chatWidget = document.getElementById('vectorshift-chat-widget');
        if (chatWidget) {
          setShowChat(false);
        }
      }, []);

      const handleSendMessage = () => {
        if (input.trim() === '') return;

        const newUserMessage = { text: input, sender: 'user' };
        setMessages([...messages, newUserMessage]);

        // Simulate bot response
        setTimeout(() => {
          const botResponse = getBotResponse(input);
          const newBotMessage = { text: botResponse, sender: 'bot' };
          setMessages([...messages, newUserMessage, newBotMessage]);
        }, 500);

        setInput('');
      };

      const getBotResponse = (userInput) => {
        const lowerInput = userInput.toLowerCase();
        if (lowerInput.includes('work order')) {
          return "To create a work order, go to the 'Work Orders' section and click 'Create New'.";
        } else if (lowerInput.includes('asset')) {
          return "To view assets, navigate to the 'Assets' module and select 'View Assets'.";
        } else if (lowerInput.includes('report')) {
          return "To generate a report, go to the 'Reports' section and choose the desired report type.";
        } else {
          return "I'm sorry, I don't have information on that topic. Please try another query.";
        }
      };

      return (
        <div className="help-container">
          <div className="help-content">
            <h1>Cityworks Help</h1>
            <p>Welcome to the Cityworks help page. Here you can find information about using the system.</p>
            <h2>Common Tasks</h2>
            <ul>
              <li>How to create a work order</li>
              <li>How to view assets</li>
              <li>How to generate reports</li>
            </ul>
            <h2>Troubleshooting</h2>
            <p>If you encounter any issues, please refer to the documentation or contact support.</p>
          </div>
          {showChat && (
            <div className="chat-container">
              <div className="chat-messages">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
                  >
                    {message.text}
                  </div>
                ))}
              </div>
              <div className="chat-input">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your question..."
                />
                <button onClick={handleSendMessage}>Send</button>
              </div>
            </div>
          )}
        </div>
      );
    }

    export default App;
