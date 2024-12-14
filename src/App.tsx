import React from 'react';
import { Globe, Lock, Bug } from 'lucide-react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TopicCard } from './components/TopicCard';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-50 dark:from-gray-900 dark:to-purple-900/20 transition-colors duration-300">
        <Navbar />
        <Hero />
        
        <div className="absolute left-1/2 -translate-x-1/2 bottom-32 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TopicCard
              icon={Globe}
              title="Network Security"
              description="Learn about firewalls, VPNs, and network protocols"
              delay={0.2}
            />
            <TopicCard
              icon={Lock}
              title="Ethical Hacking"
              description="Master penetration testing and vulnerability assessment"
              delay={0.4}
            />
            <TopicCard
              icon={Bug}
              title="Malware Analysis"
              description="Understand and analyze malicious software"
              delay={0.6}
            />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;