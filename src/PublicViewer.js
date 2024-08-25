import React, { useState, useEffect } from 'react';
import { MessageSquare, Briefcase, Building, GraduationCap, Heart, SendHorizontal, TrendingUp, Users, Award } from 'lucide-react';
import './Chatbot.css'; // Import the CSS for the chatbot

const AnimatedNumber = ({ n }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(n);
    if (start === end) return;

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, 20);

    return () => clearInterval(timer);
  }, [n]);

  return <span>{count}</span>;
};

const AnimatedBar = ({ width }) => {
  const [currentWidth, setCurrentWidth] = useState(0);

  useEffect(() => {
    setCurrentWidth(width);
  }, [width]);

  return (
    <div className="bg-gray-200 h-4 w-full rounded-full overflow-hidden">
      <div 
        className="bg-blue-500 h-full rounded-full transition-all duration-1000 ease-out" 
        style={{ width: `${currentWidth}%` }}
      />
    </div>
  );
};

const JDWithAnimatedInfographics = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false); // State for chatbot toggle

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      setMessages([...messages, { text: inputMessage, type: 'user' }]);
      setInputMessage('');
      
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { text: "Thank you for your question. I'm processing it now.", type: 'bot' }]);
      }, 500);
    }
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const SectionHeader = ({ icon: Icon, title }) => (
    <h2 className="text-2xl font-semibold mb-3 flex items-center">
      <Icon className="mr-2" size={24} />
      {title}
    </h2>
  );

  return (
    <div className="App">
      <div className="left-column bright-white-bg"> {/* Apply new background color */}
        <h1 className="text-3xl font-bold mb-6">Senior Software Engineer</h1>
        
        <section className="mb-6">
          <SectionHeader icon={Building} title="Company Overview" />
          <p className="mb-4">TechInnovate is a leading software company specializing in cutting-edge AI and machine learning solutions. Our mission is to transform industries through innovative technology.</p>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <TrendingUp className="mr-2" size={20} />
              Company Growth
            </h3>
            <p className="text-3xl font-bold mb-2">
              <AnimatedNumber n={500} />+ Employees
            </p>
            <AnimatedBar width={80} />
            <p className="text-sm mt-1">80% growth in the last 2 years</p>
          </div>
        </section>

        <section className="mb-6">
          <SectionHeader icon={Briefcase} title="Job Description" />
          <p>We are seeking a talented Senior Software Engineer to join our innovative team. In this role, you will be responsible for designing, developing, and maintaining high-performance, scalable software solutions that drive our AI and machine learning platforms.</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Lead the development of complex, scalable software solutions</li>
            <li>Collaborate with cross-functional teams to define and implement new features</li>
            <li>Architect and implement backend services and APIs</li>
            <li>Optimize application performance and scalability</li>
            <li>Mentor junior developers and conduct code reviews</li>
          </ul>
        </section>

        <section className="mb-6">
          <SectionHeader icon={GraduationCap} title="Qualifications" />
          <ul className="list-disc pl-5">
            <li>Bachelor's degree in Computer Science or related field</li>
            <li>5+ years of experience in software development</li>
            <li>Strong proficiency in JavaScript, React, and Node.js</li>
            <li>Experience with SQL and NoSQL databases</li>
            <li>Familiarity with AWS or other cloud platforms</li>
            <li>Knowledge of Agile methodologies</li>
          </ul>
        </section>

        <section className="mb-6">
          <SectionHeader icon={Heart} title="Benefits" />
          <ul className="list-disc pl-5 mb-4">
            <li>Competitive salary range: $120,000 - $180,000</li>
            <li>Health, dental, and vision insurance</li>
            <li>401(k) plan with company match</li>
            <li>Unlimited PTO policy</li>
            <li>Remote work options</li>
            <li>Professional development budget</li>
          </ul>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <Users className="mr-2" size={20} />
              Team Satisfaction
            </h3>
            <p className="text-3xl font-bold mb-2">
              <AnimatedNumber n={96} />% Approval
            </p>
            <AnimatedBar width={96} />
            <p className="text-sm mt-1">Based on our latest employee survey</p>
          </div>
        </section>

        <section className="mb-6">
          <SectionHeader icon={SendHorizontal} title="Application Process" />
          <p>To apply for this position, please submit your resume and a cover letter detailing your relevant experience and why you're excited about this role. Shortlisted candidates will be invited for a technical interview, followed by a team fit assessment.</p>
          <div className="bg-gray-100 p-4 rounded-lg mt-4">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <Award className="mr-2" size={20} />
              Project Success Rate
            </h3>
            <p className="text-3xl font-bold mb-2">
              <AnimatedNumber n={92} />%
            </p>
            <AnimatedBar width={92} />
            <p className="text-sm mt-1">Of our projects delivered on time and within budget</p>
          </div>
        </section>
      </div>

      <div className="right-column">
        {/* Chatbot HTML embedded as JSX */}
        <div id="chatbot-container">
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
      </div>
    </div>
  );
};

export default JDWithAnimatedInfographics;
