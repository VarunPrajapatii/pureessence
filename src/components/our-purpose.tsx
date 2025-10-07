import React from 'react'
import Image from 'next/image'

const OurPurpose = () => {
  return (
    <section className="w-full  py-8 lg:py-16">
      <div className="flex flex-col lg:flex-row min-h-[500px]">
        {/* Left side - Main image with overlay text */}
        <div className="relative  w-full rounded-r-3xl lg:w-1/2 min-h-[400px] lg:min-h-[600px]">
          <Image
            src="/our-purpose2.png"
            alt="Pure Essence organic powders"
            fill
            className="object-cover brightness-75 rounded-r-xl"
            style={{ objectPosition: '19.2908% 63.3115%' }}
          />
          
          {/* Overlay content */}
          <div className="absolute  inset-0 bg-opacity-30 flex flex-col  justify-center items-center p-6 sm:p-8 lg:p-16">
            <div>
              <h2 className="text-white  text-3xl sm:text-4xl lg:text-7xl font-bold leading-tight mb-4">
                Our
                Purpose
              </h2>
              <p className="text-white text-base sm:text-xl max-w-md leading-relaxed">
                When it comes to natural wellness, we think pure and clean. Our organic, chemical-free powder solutions harness the power of nature to nourish and sustain your health — through every stage of life.
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Content blocks */}
        <div className="w-full lg:w-1/2  p-6 sm:p-8 lg:p-16">
          <div className="space-y-8">
            
            {/* Block 1 - Pure & Natural */}
            <div className="flex  gap-4 lg:gap-8 pb-6 sm:pb-8 border-b border-gray-200">
              <div className="flex-shrink-0">
                <Image
                  src="/pure-ingredients.png"
                  alt="Pure Ingredients, Honest Beauty"
                  width={190}
                  height={124}
                  className="sm:w-[120px] sm:h-[110px] md:w-[160px] md:h-[150px] lg:w-[192px] lg:h-[180px] h-auto object-cover rounded-lg"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 mb-2">
                  Pure Ingredients, Honest Beauty
                </h3>
                <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">
                  Delivering 100% natural powders with no chemicals, just the purity your skin deserves.
                </p>
              </div>
            </div>

            {/* Block 2 - Traditional Wisdom */}
            <div className="flex gap-4 lg:gap-8 pb-6 sm:pb-8 border-b border-gray-200">
              <div className="flex-shrink-0">
                <Image
                  src="/target-skin-wellness.png"
                  alt="Targetes Skin Wellness"
                  width={192}
                  height={108}
                  className="sm:w-[120px] sm:h-[110px] md:w-[160px] md:h-[150px] lg:w-[192px] lg:h-[180px] h-auto object-cover rounded-lg"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 mb-2">
                  Targetes Skin Wellness
                </h3>
                <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">
                  These products are designed to detoxify, brighten, and balance for truly healthy, radiant skin.
                </p>
              </div>
            </div>

            {/* Block 3 - Quality Assurance */}
            <div className="flex gap-4 lg:gap-8 pb-6 sm:pb-8 border-b border-gray-200">
              <div className="flex-shrink-0">
                <Image
                  src="/quality-standards.png"
                  alt="Rigorous Quality Standards"
                  width={190}
                  height={124}
                  className="sm:w-[120px] sm:h-[110px] md:w-[160px] md:h-[150px] lg:w-[192px] lg:h-[180px] h-auto object-cover rounded-lg"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 mb-2">
                  Rigorous Quality Standards
                </h3>
                <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">
                  Every batch is carefully tested for purity and potency, ensuring you receive only the finest organic powders free from harmful additives.
                </p>
              </div>
            </div>

            {/* Block 4 - Sustainable Sourcing */}
            <div className="flex gap-4 lg:gap-8 pb-6 sm:pb-8 border-b border-gray-200">
              <div className="flex-shrink-0">
                <Image
                  src="/earth-to-essence.png"
                  alt="From Earth to Essence"
                  width={190}
                  height={124}
                  className="sm:w-[120px] sm:h-[110px] md:w-[160px] md:h-[150px] lg:w-[192px] lg:h-[180px] h-auto object-cover rounded-lg"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 mb-2">
                  From Earth to Essence
                </h3>
                <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">
                  Sustainably sourced from nature and refined to preserve every bit of goodness.
                </p>
              </div>
            </div>

            {/* Block 5 - Wellness Connection */}
            <div className="flex gap-4 lg:gap-8">
              <div className="flex-shrink-0">
                <Image
                  src="/glow-with-confidence.png"
                  alt="Glow with Confidence"
                  width={190}
                  height={124}
                  className="sm:w-[120px] sm:h-[110px] md:w-[160px] md:h-[150px] lg:w-[192px] lg:h-[180px] h-auto object-cover rounded-lg"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 mb-2">
                  Glow with Confidence
                </h3>
                <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">
                  Empowering you to feel beautiful in your natural, nourished skin every day. Our powders nourish your body naturally, supporting your journey to holistic wellness.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default OurPurpose