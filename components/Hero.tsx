
import React from 'react';
import banner from '../assets/banner.jpeg';

declare global {
  interface Window {
    fbq: any;
  }
}

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-5 pb-6 md:pt-32 md:pb-24 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          
          {/* Main Banner Visual */}
          <div className="relative w-full max-w-4xl mb-8 group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-50"></div>
            <div className="relative rounded-2xl border border-white/10 overflow-hidden glass shadow-2xl">
              {/* Replace with actual image path when deploying: 'banner.jpeg' */}
              <img 
                src={banner}
                alt="Ars Dev Hub Banner" 
                className="w-full h-auto object-cover h-[200px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-8 text-left">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 flex items-center">
                  <span className="text-blue-400">&lt;</span>
                  <span className="gradient-text">ArsDev</span>
                  <span className="text-purple-400">&gt;</span>
                </h1>
                <h2 className="text-xl md:text-3xl font-semibold text-gray-100/90 leading-snug max-w-2xl">
                  Master AI-Driven Development & <br />
                  <span className="gradient-text">Future-Proof Your Career</span>
                </h2>
                {/* <p className="text-xl md:text-3xl font-semibold max-w-2xl text-gray-200">
                  AI won't replace developers <br/>
                  <span className="text-white">Developers using AI will</span>
                </p> */}
              </div>
            </div>
          </div>

          <div className="max-w-2xl">
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              JOIN Free Telegram Community 👇 
            </p>

            <a
              href="https://t.me/+tyDsGgq2q881OWI0"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 shadow-lg shadow-blue-500/20 hover:scale-105 active:scale-95"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <span className="relative flex items-center gap-3">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                </svg>
                Open Telegram & Join
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
            
            <p className="mt-4 text-sm text-gray-500 mono">
              t.me/ars_devv • Requires Telegram app
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
