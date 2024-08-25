import React, { useState } from 'react';
import './Chatbot.css'; // We'll move the styles to this CSS file

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div id="chatbot-tab" onClick={toggleChatbot}>
        Chat
      </div>

      <div id="chatbot-container" style={{ right: isOpen ? '0px' : '-33%' }}>
        <div id="chatbot-header">
          SooCrates
        </div>
        <div className="orb-avatar" id="orb-avatar"></div>
        <div id="chatbot-content">
          <div className="chatbot-message">
            <div className="sc-avatar">SC</div>
            <p>Hello! I'm here to help you with your tasks. How can I assist you today?</p>
          </div>
          <div className="user-message">
            <p>Can you guide me through creating a new job description?</p>
          </div>
          <div className="chatbot-message">
            <div className="sc-avatar">SC</div>
            <p>Of course! Let's start by discussing the key responsibilities of the role you're hiring for.</p>
          </div>
          <div className="user-message">
            <p>The role is for a Senior Software Engineer. They need to lead a team and work on backend development.</p>
          </div>
          <div className="chatbot-message">
            <div className="sc-avatar">SC</div>
            <p>Great! Would you like me to suggest specific technical skills and qualifications for this position?</p>
          </div>
        </div>
        <div className="chat-input">
          <input type="text" placeholder="Type your message..." />
          <button>Send</button>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
