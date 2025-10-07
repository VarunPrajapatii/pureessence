import React from 'react'
import Image from 'next/image'

const OurPurpose = () => {
  return (
    <section className="w-full  py-8 lg:py-16">
      <div className="flex flex-col lg:flex-row min-h-[500px]">
        {/* Left side - Main image with overlay text */}
        <div className="relative w-full rounded-r-3xl lg:w-1/2 min-h-[400px] lg:min-h-[600px]">
          <Image
            src="/temp.jpeg"
            alt="Pure Essence organic powders"
            fill
            className="object-cover"
            style={{ objectPosition: '19.2908% 63.3115%' }}
          />
          
          {/* Overlay content */}
          <div className="absolute inset-0  bg-opacity-30 flex flex-col  justify-end p-6 sm:p-8 lg:p-16">
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Our<br />
              Purpose
            </h2>
            <p className="text-white text-base sm:text-lg max-w-md leading-relaxed">
              When it comes to natural wellness, we think pure and clean. Our organic, chemical-free powder solutions harness the power of nature to nourish and sustain your health — through every stage of life.
            </p>
          </div>
        </div>

        {/* Right side - Content blocks */}
        <div className="w-full lg:w-1/2 bg-white p-6 sm:p-8 lg:p-16">
          <div className="space-y-8">
            
            {/* Block 1 - Pure & Natural */}
            <div className="flex gap-4 lg:gap-8 pb-6 sm:pb-8 border-b border-gray-200">
              <div className="flex-shrink-0">
                <Image
                  src="/temp.jpeg"
                  alt="Pure and natural ingredients"
                  width={190}
                  height={124}
                  className="w-[100px] sm:w-[120px] lg:w-[190px] h-auto object-cover rounded-lg"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  Pure & Natural Heritage
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Sourced from organic farms and processed without chemicals to preserve the natural essence and potency of each powder.
                </p>
              </div>
            </div>

            {/* Block 2 - Traditional Wisdom */}
            <div className="flex gap-4 lg:gap-8 pb-6 sm:pb-8 border-b border-gray-200">
              <div className="flex-shrink-0">
                <Image
                  src="/temp.jpeg"
                  alt="Traditional wellness wisdom"
                  width={190}
                  height={124}
                  className="w-[100px] sm:w-[120px] lg:w-[190px] h-auto object-cover rounded-lg"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  Traditional Wellness Wisdom
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Leveraging centuries-old Ayurvedic knowledge to bring you time-tested natural remedies for modern wellness needs.
                </p>
              </div>
            </div>

            {/* Block 3 - Quality Assurance */}
            <div className="flex gap-4 lg:gap-8 pb-6 sm:pb-8 border-b border-gray-200">
              <div className="flex-shrink-0">
                <Image
                  src="/temp.jpeg"
                  alt="Quality testing and assurance"
                  width={190}
                  height={124}
                  className="w-[100px] sm:w-[120px] lg:w-[190px] h-auto object-cover rounded-lg"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  Rigorous Quality Standards
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Every batch is carefully tested for purity and potency, ensuring you receive only the finest organic powders free from harmful additives.
                </p>
              </div>
            </div>

            {/* Block 4 - Sustainable Sourcing */}
            <div className="flex gap-4 lg:gap-8 pb-6 sm:pb-8 border-b border-gray-200">
              <div className="flex-shrink-0">
                <Image
                  src="/temp.jpeg"
                  alt="Sustainable and ethical sourcing"
                  width={190}
                  height={124}
                  className="w-[100px] sm:w-[120px] lg:w-[190px] h-auto object-cover rounded-lg"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  Sustainable & Ethical Sourcing
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Partnering with local farmers who practice sustainable agriculture, supporting communities while protecting our environment.
                </p>
              </div>
            </div>

            {/* Block 5 - Wellness Connection */}
            <div className="flex gap-4 lg:gap-8">
              <div className="flex-shrink-0">
                <Image
                  src="/temp.jpeg"
                  alt="Holistic wellness and beauty"
                  width={190}
                  height={124}
                  className="w-[100px] sm:w-[120px] lg:w-[190px] h-auto object-cover rounded-lg"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  The Wellness Connection
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Understanding that true beauty and health come from within — our powders nourish your body naturally, supporting your journey to holistic wellness.
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