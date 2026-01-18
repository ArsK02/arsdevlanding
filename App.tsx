
import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Ensuring everything is correctly tracked on mount
    console.log("Ars Dev Landing Initialized");
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-purple-500/30">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full"></div>
      </div>

      <main className="flex-grow">
        <Hero />
        <Features />
      </main>

      <Footer />
    </div>
  );
};

export default App;
