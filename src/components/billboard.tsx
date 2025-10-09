'use client';

import { Billboard as BillboardType } from '@/types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface BillboardProps {
  data: BillboardType[];
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate billboards every 4 seconds
  useEffect(() => {
    if (data.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [data.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full">
      {/* Carousel wrapper */}
      <div className="relative aspect-[16/9] md:aspect-[2/1]  overflow-hidden ">
        {/* Render all billboards with fade transition */}
        {data.map((billboard, index) => (
          <div
            key={billboard.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="w-full h-full bg-cover "
              style={{ backgroundImage: `url(${billboard.imageUrl})` }}
            >
              <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                {/* Optional: Uncomment to show billboard label */}
                {/* <div className='font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-sm text-white drop-shadow-lg'>
                  {billboard.label}
                </div> */}
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Buttons - Only show if more than 1 billboard */}
        {data.length > 1 && (
          <>
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Previous billboard"
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6 text-gray-800" />
            </button>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Next billboard"
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6 text-gray-800" />
            </button>

            {/* Indicator Dots */}
            <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {data.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-white w-6 sm:w-8' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to billboard ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Billboard;