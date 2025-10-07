'use client';

import React, { useEffect, useRef } from 'react'

const Marquee = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    if (marqueeElement) {
      // Start animation after component mounts
      marqueeElement.style.animationPlayState = 'running';
    }
  }, []);

  const marqueeItems = [
    "100% Natural",
    "Chemical-Free",
    "Organic Certified", 
    "Ayurvedic Heritage",
    "Pure & Fresh",
    "Lab Tested",
    "Traditionally Sourced",
    "Eco-Friendly"
  ];

  return (
    <section className="overflow-hidden border-t border-b  to-orange-50">
      <div 
        ref={marqueeRef}
        className="flex whitespace-nowrap animate-marquee"
        style={{
          animationDuration: '40s',
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          animationPlayState: 'paused'
        }}
      >
        {/* Original items */}
        <div className="flex flex-shrink-0">
          {marqueeItems.map((item, index) => (
            <div 
              key={`original-${index}`}
              className="flex items-center justify-center px-6 lg:px-8 py-8 lg:py-12 relative"
            >
              {/* Checkmark icon */}
              <div className="mr-6 flex-shrink-0">
                <svg 
                  width="15" 
                  height="12" 
                  viewBox="0 0 15 12" 
                  fill="none" 
                  className="text-green-600"
                >
                  <path 
                    d="M13.5 2L5.25 10L1.5 6.36364" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="square"
                  />
                </svg>
              </div>
              
              {/* Text */}
              <strong className="text-lg lg:text-2xl font-bold text-gray-800">
                {item}
              </strong>
            </div>
          ))}
        </div>

        {/* Cloned items for seamless loop */}
        <div className="flex flex-shrink-0" aria-hidden="true">
          {marqueeItems.map((item, index) => (
            <div 
              key={`clone-${index}`}
              className="flex items-center justify-center px-6 lg:px-8 py-8 lg:py-12 relative"
            >
              {/* Checkmark icon */}
              <div className="mr-6 flex-shrink-0">
                <svg 
                  width="15" 
                  height="12" 
                  viewBox="0 0 15 12" 
                  fill="none" 
                  className="text-green-600"
                >
                  <path 
                    d="M13.5 2L5.25 10L1.5 6.36364" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="square"
                  />
                </svg>
              </div>
              
              {/* Text */}
              <strong className="text-lg lg:text-2xl font-bold text-gray-800">
                {item}
              </strong>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        
        .animate-marquee {
          animation-name: marquee;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation-play-state: paused !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Marquee