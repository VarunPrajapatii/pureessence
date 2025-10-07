'use client';

import { Billboard as BillboardType } from '@/types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface BillboardProps {
  data: BillboardType[];
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate billboards every 3 seconds
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

  const currentBillboard = data[currentIndex];

  return (
    <div className="flex justify-center relative">
      <div
        className="p-4 sm:p-6 lg:p-8 text-center w-full h-full justify-center overflow-hidden bg-cover transition-all duration-500"
        style={{ backgroundImage: `url(${currentBillboard?.imageUrl})` }}
      >
        <div className="rounded-xl relative aspect-square md:aspect-[2.4/1] bg-cover overflow-hidden">
          <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
            {/* Optional: Uncomment to show billboard label */}
            {/* <div className='font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-sm text-white drop-shadow-lg'>
              {currentBillboard.label}
            </div> */}
          </div>

          {/* Navigation Buttons - Only show if more than 1 billboard */}
          {data.length > 1 && (
            <>
              {/* Previous Button */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Previous billboard"
              >
                <ChevronLeft size={24} className="text-gray-800" />
              </button>

              {/* Next Button */}
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Next billboard"
              >
                <ChevronRight size={24} className="text-gray-800" />
              </button>

              {/* Indicator Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {data.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-white w-8' 
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
    </div>
  );
};

export default Billboard;