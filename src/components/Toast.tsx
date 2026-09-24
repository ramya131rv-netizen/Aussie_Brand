import React from 'react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#0A0A0A] text-[#F7F4EF] px-5 py-2.5 rounded-full text-xs font-medium tracking-wide shadow-2xl border border-white/10 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <span className="w-2 h-2 rounded-full bg-[#3F7A4E]" />
      <span>{message}</span>
    </div>
  );
};
