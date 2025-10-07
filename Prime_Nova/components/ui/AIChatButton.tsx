'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  isTyping?: boolean;
}

export function AIChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Primenova's AI assistant. I can help you with information about our services, pricing, or answer any questions about our digital solutions. What would you like to know?",
      isBot: true,
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const websiteKnowledge = {
    company: {
      name: "Primenova",
      mission: "Delivering cutting-edge technology solutions and consulting services to help businesses thrive in the digital age",
      founded: "2014",
      team: "50+ members",
      experience: "10+ years",
      projects: "500+ completed",
      clients: "200+ happy clients"
    },
    services: {
      webDevelopment: {
        name: "Web Development",
        description: "Modern, responsive websites and web applications built with React, Next.js, and cutting-edge technologies",
        features: ["React & Next.js", "Responsive Design", "Performance Optimization", "SEO Ready"],
        price: "From $5,000"
      },
      graphicDesign: {
        name: "Graphic Design", 
        description: "Stunning visual identities, logos, branding, and digital graphics that make your brand stand out",
        features: ["Logo Design", "Brand Identity", "Print Materials", "Digital Graphics"],
        price: "From $2,000"
      },
      mobileApps: {
        name: "Mobile Applications",
        description: "Native iOS and Android apps, plus cross-platform solutions using React Native and Flutter",
        features: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"],
        price: "From $10,000"
      },
      digitalMarketing: {
        name: "Digital Marketing",
        description: "SEO, social media marketing, PPC campaigns, and content strategy to grow your online presence",
        features: ["SEO & SEM", "Social Media", "Content Marketing", "Analytics"],
        price: "From $3,000"
      },
      cloudSolutions: {
        name: "Cloud Solutions",
        description: "AWS, Azure, and Google Cloud infrastructure setup, migration, and optimization services",
        features: ["AWS & Azure", "Migration Services", "DevOps", "Monitoring"],
        price: "From $8,000"
      },
      ecommerce: {
        name: "E-commerce Solutions",
        description: "Complete online stores with payment integration, inventory management, and customer portals",
        features: ["Payment Integration", "Inventory Management", "Customer Portal", "Analytics"],
        price: "From $7,000"
      }
    },
    pricing: {
      starter: {
        name: "Starter",
        price: "$2,500/month",
        description: "Perfect for small businesses and startups",
        features: ["Basic website design", "Up to 5 pages", "Mobile responsive", "Basic SEO", "Email support", "3 months maintenance"]
      },
      professional: {
        name: "Professional", 
        price: "$5,000/month",
        description: "Ideal for growing businesses",
        features: ["Custom web application", "Up to 15 pages", "Advanced SEO", "Analytics integration", "Priority support", "6 months maintenance", "Content management"]
      },
      enterprise: {
        name: "Enterprise",
        price: "Custom",
        description: "Complete digital transformation",
        features: ["Full-stack development", "Unlimited pages", "Custom integrations", "Advanced analytics", "Dedicated support", "12 months maintenance", "Cloud hosting", "Security audit"]
      }
    },
    contact: {
      email: "hello@primenova.com",
      phone: "+1 (555) 123-4567",
      address: "123 Innovation Street, Tech City, TC 12345, United States",
      hours: "Monday-Friday: 9:00 AM - 6:00 PM, Saturday: 10:00 AM - 4:00 PM, Sunday: Closed"
    },
    process: [
      "Discovery & Planning - Understanding your business goals and requirements",
      "Design & Prototyping - Creating wireframes, prototypes, and visual designs", 
      "Development & Testing - Building with cutting-edge technologies and rigorous testing",
      "Launch & Support - Deploying your solution with ongoing support"
    ]
  };

  const aiResponses = {
    greeting: [
      `Hello! I'm Primenova's AI assistant. I have comprehensive knowledge about our company, services, and processes. I can help you with information about our ${Object.keys(websiteKnowledge.services).length} digital services, pricing plans, our ${websiteKnowledge.company.experience} of experience, or answer any questions about our ${websiteKnowledge.company.projects} completed projects. What would you like to know?`,
      `Hi there! Welcome to Primenova. I'm here to help you explore our digital solutions. We're a team of ${websiteKnowledge.company.team} with ${websiteKnowledge.company.experience} of experience, having completed ${websiteKnowledge.company.projects} projects for ${websiteKnowledge.company.clients}. How can I assist you today?`,
      `Welcome to Primenova! I'm your AI assistant with complete knowledge of our services, pricing, and company information. We specialize in transforming businesses through cutting-edge digital solutions. What specific area would you like to learn about?`
    ],
    services: [
      `We offer ${Object.keys(websiteKnowledge.services).length} comprehensive digital services: ${Object.values(websiteKnowledge.services).map(s => s.name).join(', ')}. Each service is designed to help businesses thrive in the digital landscape. Which service interests you most?`,
      `Our services cover the complete digital spectrum: ${Object.entries(websiteKnowledge.services).map(([key, service]) => `${service.name} (${service.price})`).join(', ')}. We use modern technologies like React, Next.js, React Native, Flutter, and cloud platforms. What would you like to learn more about?`,
      `Primenova provides end-to-end digital solutions. Our ${Object.keys(websiteKnowledge.services).length} services include everything from modern web development with React/Next.js to complete e-commerce platforms. Each service includes ongoing support and maintenance. Which area would you like to explore?`
    ],
    pricing: [
      `We offer three main pricing tiers: ${Object.values(websiteKnowledge.pricing).map(p => `${p.name} (${p.price})`).join(', ')}. Our Starter plan is perfect for small businesses, Professional for growing companies, and Enterprise for large organizations. All plans include ongoing support and maintenance. Which tier interests you?`,
      `Our pricing is competitive and transparent. ${Object.entries(websiteKnowledge.pricing).map(([key, plan]) => `The ${plan.name} plan at ${plan.price} includes ${plan.features.length} features: ${plan.features.slice(0, 3).join(', ')}${plan.features.length > 3 ? ' and more' : ''}`).join('. ')}. Would you like details about any specific plan?`,
      `We have flexible pricing options: ${Object.values(websiteKnowledge.pricing).map(p => `${p.name} starting at ${p.price}`).join(', ')}. Each plan is designed for different business needs and includes comprehensive features. Our Enterprise solutions are custom-quoted based on your specific requirements. Which plan would work best for your business?`
    ],
    contact: [
      `You can reach us at ${websiteKnowledge.contact.email} or call ${websiteKnowledge.contact.phone}. We're located at ${websiteKnowledge.contact.address}. Our business hours are ${websiteKnowledge.contact.hours}. Would you like me to help you schedule a consultation?`,
      `Contact us via email at ${websiteKnowledge.contact.email}, phone at ${websiteKnowledge.contact.phone}, or visit our contact page. We typically respond within 24 hours and offer free consultations to discuss your project needs. Is there something specific you'd like to discuss?`,
      `Get in touch with us at ${websiteKnowledge.contact.email} or ${websiteKnowledge.contact.phone}. We're available ${websiteKnowledge.contact.hours} and offer free consultations. Our team of ${websiteKnowledge.company.team} is ready to help transform your business. What would you like to discuss?`
    ],
    company: [
      `Primenova was founded in ${websiteKnowledge.company.founded} with a mission to deliver cutting-edge technology solutions. We're a team of ${websiteKnowledge.company.team} with ${websiteKnowledge.company.experience} of experience, having completed ${websiteKnowledge.company.projects} projects for ${websiteKnowledge.company.clients}. Our mission is: "${websiteKnowledge.company.mission}".`,
      `We're Primenova, established in ${websiteKnowledge.company.founded}. Our team of ${websiteKnowledge.company.team} professionals has ${websiteKnowledge.company.experience} of experience in digital transformation. We've successfully completed ${websiteKnowledge.company.projects} projects and have ${websiteKnowledge.company.clients} satisfied clients. We specialize in helping businesses thrive in the digital age.`,
      `Primenova is a digital solutions company founded in ${websiteKnowledge.company.founded}. With ${websiteKnowledge.company.team} team members and ${websiteKnowledge.company.experience} of experience, we've completed ${websiteKnowledge.company.projects} projects for ${websiteKnowledge.company.clients} clients. We're passionate about transforming businesses through innovative digital solutions.`
    ],
    process: [
      `Our proven ${websiteKnowledge.process.length}-step process ensures successful project delivery: ${websiteKnowledge.process.map((step, index) => `${index + 1}. ${step}`).join(' ')}. This methodology has helped us deliver ${websiteKnowledge.company.projects} successful projects.`,
      `We follow a structured ${websiteKnowledge.process.length}-step approach: ${websiteKnowledge.process.join(' → ')}. This process ensures quality delivery and client satisfaction, which is why we have ${websiteKnowledge.company.clients} happy clients.`,
      `Our development process includes ${websiteKnowledge.process.length} key phases: ${websiteKnowledge.process.map((step, index) => `Phase ${index + 1}: ${step}`).join(', ')}. This methodology has been refined over ${websiteKnowledge.company.experience} and ensures successful project outcomes.`
    ],
    default: [
      "That's a great question! I have comprehensive knowledge about Primenova's services, pricing, company history, and processes. Could you be more specific about what you'd like to know? I can help with information about our services, pricing plans, company background, or our development process.",
      "I'd be happy to assist you with that! I know all about Primenova's ${Object.keys(websiteKnowledge.services).length} services, ${Object.keys(websiteKnowledge.pricing).length} pricing tiers, our ${websiteKnowledge.company.experience} of experience, and our ${websiteKnowledge.process.length}-step development process. What specific information would be most helpful?",
      "Thanks for asking! I have detailed knowledge about Primenova's offerings, including our ${Object.keys(websiteKnowledge.services).length} digital services, pricing starting from $2,000, our team of ${websiteKnowledge.company.team}, and ${websiteKnowledge.company.projects} completed projects. What would you like to explore?"
    ]
  };

  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Greeting patterns
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('good morning') || message.includes('good afternoon')) {
      return aiResponses.greeting[Math.floor(Math.random() * aiResponses.greeting.length)];
    }
    
    // Company information patterns
    if (message.includes('about') || message.includes('company') || message.includes('who are you') || message.includes('tell me about primenova') || message.includes('founded') || message.includes('team') || message.includes('experience')) {
      return aiResponses.company[Math.floor(Math.random() * aiResponses.company.length)];
    }
    
    // Services patterns
    if (message.includes('service') || message.includes('what do you do') || message.includes('offer') || message.includes('web development') || message.includes('graphic design') || message.includes('mobile app') || message.includes('digital marketing') || message.includes('cloud') || message.includes('ecommerce') || message.includes('e-commerce')) {
      return aiResponses.services[Math.floor(Math.random() * aiResponses.services.length)];
    }
    
    // Pricing patterns
    if (message.includes('price') || message.includes('cost') || message.includes('how much') || message.includes('budget') || message.includes('afford') || message.includes('expensive') || message.includes('cheap') || message.includes('starter') || message.includes('professional') || message.includes('enterprise')) {
      return aiResponses.pricing[Math.floor(Math.random() * aiResponses.pricing.length)];
    }
    
    // Contact patterns
    if (message.includes('contact') || message.includes('reach') || message.includes('phone') || message.includes('email') || message.includes('address') || message.includes('location') || message.includes('hours') || message.includes('available') || message.includes('consultation')) {
      return aiResponses.contact[Math.floor(Math.random() * aiResponses.contact.length)];
    }
    
    // Process patterns
    if (message.includes('process') || message.includes('how do you work') || message.includes('methodology') || message.includes('approach') || message.includes('steps') || message.includes('workflow') || message.includes('development process')) {
      return aiResponses.process[Math.floor(Math.random() * aiResponses.process.length)];
    }
    
    // Specific service questions
    if (message.includes('react') || message.includes('next.js') || message.includes('javascript')) {
      return `We specialize in modern web development using React and Next.js. Our web development service starts at $5,000 and includes responsive design, performance optimization, and SEO readiness. We've built ${websiteKnowledge.company.projects} projects using these cutting-edge technologies. Would you like to know more about our web development capabilities?`;
    }
    
    if (message.includes('logo') || message.includes('branding') || message.includes('design')) {
      return `Our graphic design service includes logo design, brand identity, and digital graphics. We create stunning visual identities that make brands stand out. Our graphic design service starts at $2,000 and includes comprehensive branding solutions. We've helped ${websiteKnowledge.company.clients} clients establish their visual identity. What type of design project are you considering?`;
    }
    
    if (message.includes('mobile') || message.includes('app') || message.includes('ios') || message.includes('android')) {
      return `We develop native iOS and Android apps, plus cross-platform solutions using React Native and Flutter. Our mobile app development starts at $10,000 and includes app store optimization. We've created mobile applications for various industries. Are you looking to build a mobile app for your business?`;
    }
    
    if (message.includes('seo') || message.includes('marketing') || message.includes('social media')) {
      return `Our digital marketing service includes SEO, social media marketing, PPC campaigns, and content strategy. We help businesses grow their online presence and reach their target audience. Our digital marketing service starts at $3,000. We've helped ${websiteKnowledge.company.clients} clients improve their online visibility. What marketing goals are you trying to achieve?`;
    }
    
    if (message.includes('cloud') || message.includes('aws') || message.includes('azure') || message.includes('hosting')) {
      return `We provide cloud solutions including AWS, Azure, and Google Cloud infrastructure setup, migration, and optimization. Our cloud solutions start at $8,000 and include DevOps and monitoring services. We've helped businesses migrate to the cloud and optimize their infrastructure. Are you looking to move to the cloud or optimize your current setup?`;
    }
    
    if (message.includes('ecommerce') || message.includes('e-commerce') || message.includes('online store') || message.includes('shop')) {
      return `We build complete e-commerce solutions with payment integration, inventory management, and customer portals. Our e-commerce service starts at $7,000 and includes analytics and customer management. We've created online stores for various businesses. Are you looking to start selling online?`;
    }
    
    // Default intelligent response
    return aiResponses.default[Math.floor(Math.random() * aiResponses.default.length)];
  };

  const simulateTyping = (response: string, callback: () => void) => {
    setIsTyping(true);
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < response.length) {
        index++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
        callback();
      }
    }, 30);
  };

  const handleSendMessage = () => {
    if (!message.trim() || isTyping) return;

    const userMessage = message.trim();
    const newMessage: Message = {
      id: messages.length + 1,
      text: userMessage,
      isBot: false,
    };

    setMessages(prev => [...prev, newMessage]);
    setMessage('');

    // Add typing indicator
    const typingMessage: Message = {
      id: messages.length + 2,
      text: '',
      isBot: true,
      isTyping: true,
    };
    setMessages(prev => [...prev, typingMessage]);

    // Get AI response and simulate typing
    const aiResponse = getAIResponse(userMessage);
    
    setTimeout(() => {
      setMessages(prev => {
        const updated = prev.filter(msg => !msg.isTyping);
        return [...updated, {
          id: messages.length + 2,
          text: aiResponse,
          isBot: true,
        }];
      });
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating AI Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="Open AI Chat"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4 sm:p-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md h-[500px] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">AI Assistant</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Primenova Support</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${msg.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'}`}>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      msg.isBot 
                        ? 'bg-gradient-to-r from-primary-500 to-accent-500' 
                        : 'bg-gray-500'
                    }`}>
                      {msg.isBot ? (
                        <Bot className="h-4 w-4 text-white" />
                      ) : (
                        <User className="h-4 w-4 text-white" />
                      )}
                    </div>
                    <div
                      className={`p-3 rounded-lg ${
                        msg.isBot
                          ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                          : 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                      }`}
                    >
                      {msg.isTyping ? (
                        <div className="flex items-center space-x-1">
                          <Loader className="h-4 w-4 animate-spin" />
                          <span className="text-sm">AI is typing...</span>
                        </div>
                      ) : (
                        <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!message.trim() || isTyping}
                  className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-all duration-300"
                >
                  {isTyping ? (
                    <Loader className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
