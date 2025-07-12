import React from 'react';

export default function CreditsSection({ credits = [] }) {
  if (!credits.length) return null;

  return (
    <section
      id="credits"
      className="relative z-10 px-6 py-16 text-white font-serif bg-black/80"
    >
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Credits</h2>

        {credits.map((line, index) => {
          const [label, ...rest] = line.split(':');
          const value = rest.join(':').trim();

          return (
            <p key={index}>
              <span className="font-semibold">{label.trim()}:</span>{' '}
              {value}
            </p>
          );
        })}
      </div>
    </section>
  );
}
