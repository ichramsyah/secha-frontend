import React from 'react';

const logos = [
  { name: 'Google', src: './images/sponsor/google.png' },
  { name: 'Amazon', src: './images/sponsor/amazon.png' },
  { name: 'Microsoft', src: './images/sponsor/microsoft.png' },
  { name: 'Vercel', src: './images/sponsor/vercel.png' },
  { name: 'BCA', src: './images/sponsor/bca.png' },
  { name: 'OpenAI', src: './images/sponsor/openai.png' },
  { name: 'Adobe', src: './images/sponsor/adobe.png' },
  { name: 'Anthropic', src: './images/sponsor/anthropic.png' },
];

export default function Sponsor() {
  return (
    <section className="pt-12 pb-20">
      {/* CSS Animasi Custom */}
      <style>{`
        @keyframes colorCycle {
          0%, 100% { filter: grayscale(100%); opacity: 0.5; }
          50% { filter: grayscale(0%); opacity: 1; }
        }
        .animate-color-cycle {
          animation: colorCycle 4s infinite ease-in-out;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`
                flex items-center justify-center h-32 p-6
                border-dashed border-gray-200 border-t-0 border-l-0
                
                ${index % 2 === 0 ? 'border-r' : ''}
                ${index < logos.length - 2 ? 'border-b' : ''}
                
                md:border-r md:border-b-0
                ${(index + 1) % 4 === 0 ? 'md:border-r-0' : ''}
                ${index < 4 ? 'md:border-b' : ''}
              `}
            >
              <img src={logo.src} alt={logo.name} className="h-8 md:h-10 object-contain animate-color-cycle hover:animate-none hover:grayscale-0 hover:opacity-100 transition-all" style={{ animationDelay: `${index * 0.5}s` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
