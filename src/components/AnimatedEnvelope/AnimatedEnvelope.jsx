import React from 'react';

const AnimatedEnvelope = ({ sending = false }) => {
  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      <svg viewBox="0 0 240 200" className="w-full h-auto max-w-md">
        {/* Background glow effect */}
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="envGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#282732" />
            <stop offset="100%" stopColor="#1C1C21" />
          </linearGradient>
        </defs>

        {/* Glow circle */}
        <circle
          cx="120"
          cy="100"
          r="80"
          fill="url(#glow)"
          className="animate-pulse"
        />

        {/* Envelope body */}
        <rect
          x="40"
          y="70"
          width="160"
          height="100"
          rx="8"
          fill="url(#envGradient)"
          stroke="#7C3AED"
          strokeWidth="2"
          className={sending ? 'animate-bounce' : ''}
        />

        {/* Envelope flap (back) */}
        <polygon
          points="40,70 120,130 200,70"
          fill="#1C1C21"
          stroke="#3B82F6"
          strokeWidth="2"
          opacity="0.8"
        />

        {/* Envelope flap (front) - animated */}
        <polygon
          points="40,70 120,10 200,70"
          fill="#282732"
          stroke="#7C3AED"
          strokeWidth="2"
          className={sending ? '' : 'animate-pulse'}
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 120 70"
            to="-30 120 70"
            dur="3s"
            repeatCount="indefinite"
          />
        </polygon>

        {/* Letter inside */}
        <rect
          x="60"
          y="90"
          width="120"
          height="70"
          rx="4"
          fill="#D9ECFF"
          opacity="0.9"
        />

        {/* Letter lines */}
        <line x1="70" y1="105" x2="170" y2="105" stroke="#3B82F6" strokeWidth="2" opacity="0.5" />
        <line x1="70" y1="120" x2="170" y2="120" stroke="#3B82F6" strokeWidth="2" opacity="0.5" />
        <line x1="70" y1="135" x2="140" y2="135" stroke="#3B82F6" strokeWidth="2" opacity="0.5" />

        {/* Send icon/particles (when sending) */}
        {sending && (
          <g>
            <circle cx="120" cy="50" r="3" fill="#10B981" className="animate-ping" />
            <circle cx="130" cy="45" r="2" fill="#10B981" className="animate-ping" style={{ animationDelay: '0.2s' }} />
            <circle cx="110" cy="45" r="2" fill="#10B981" className="animate-ping" style={{ animationDelay: '0.4s' }} />
          </g>
        )}

        {/* Decorative stars */}
        <g opacity="0.6">
          <path d="M 30 40 L 32 42 L 30 44 L 28 42 Z" fill="#7C3AED" className="animate-pulse" />
          <path d="M 210 150 L 212 152 L 210 154 L 208 152 Z" fill="#3B82F6" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          <path d="M 200 30 L 202 32 L 200 34 L 198 32 Z" fill="#10B981" className="animate-pulse" style={{ animationDelay: '1s' }} />
        </g>
      </svg>
    </div>
  );
};

export default AnimatedEnvelope;
