
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-black">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-blue-400 font-mono">&lt;</span>
            <span className="font-bold tracking-tight">Ars Dev</span>
            <span className="text-purple-400 font-mono">&gt;</span>
        </div>
        <p className="text-gray-500 text-sm mb-6">
          Built by dev for devs
        </p>
        {/* <div className="flex justify-center gap-8 text-gray-400 text-sm">
          <a href="https://t.me/ars_devv" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Telegram</a>
          <a href="#" className="hover:text-white transition-colors">Community</a>
          <a href="#" className="hover:text-white transition-colors">Resources</a>
        </div> */}
        <div className="mt-8 text-[10px] text-gray-700 uppercase tracking-widest mono">
          © {new Date().getFullYear()} ARS DEV HUB • ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
};
