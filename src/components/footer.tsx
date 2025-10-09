import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Twitter, Youtube, Facebook } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#d4a373]">
      <div className="max-w-[95vw] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-10">
          
          {/* Logo Section */}
          <div className="mb-8 lg:mb-12">
            <Link href="/" className="inline-block">
              <Image
                src="/pureessencelogo.png"
                alt="Pure Essence Logo"
                width={400}
                height={120}
                className="h-12 lg:h-32 w-auto"
              />
            </Link>
          </div>

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left Side - Company Description */}
            <div className="lg:col-span-1">
              <p className="text-black leading-relaxed font-medium text-base lg:text-lg max-w-2/3">
                Pure Essence&apos;s natural wellness solutions are shaping the future of organic health, merging traditional Ayurvedic wisdom with pure plant-based powders for long-term vitality and natural beauty.
              </p>
            </div>
            <div className='lg:col-span-1 grid grid-cols-2 gap-8'>
              {/* About Us Section */}
              <div>
                <h3 className="text-xl font-bold text-black mb-6">About Us</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/about/our-story" className="text-black hover:font-semibold transition-all">
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-black hover:font-semibold transition-all">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Help & Support Section */}
              <div>
                <h3 className="text-xl font-bold text-black mb-6">Help &amp; Support</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/returns-exchanges" className="text-black hover:font-semibold transition-all">
                      Returns &amp; Exchanges
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="text-black hover:font-semibold transition-all">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-of-use" className="text-black hover:font-semibold transition-all">
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us" className="text-black hover:font-semibold transition-all">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Social Media Icons - Horizontal */}
          <div className="mt-8 pt-5 ">
            <h3 className="text-lg font-bold text-black mb-4 text-center lg:text-left">Follow Us</h3>
            <div className="flex justify-center lg:justify-start items-center gap-4">
              <Link 
                href="#" 
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all group"
                aria-label="Follow Pure Essence on Instagram"
              >
                <Instagram size={22} className="text-gray-800 group-hover:text-pink-600" />
              </Link>

              <Link 
                href="#" 
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all group"
                aria-label="Follow Pure Essence on Facebook"
              >
                <Facebook size={22} className="text-gray-800 group-hover:text-blue-600" />
              </Link>

              <Link 
                href="#" 
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all group"
                aria-label="Follow Pure Essence on YouTube"
              >
                <Youtube size={22} className="text-gray-800 group-hover:text-red-600" />
              </Link>

              <Link 
                href="#" 
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all group"
                aria-label="Follow Pure Essence on Twitter"
              >
                <Twitter size={22} className="text-gray-800 group-hover:text-blue-400" />
              </Link>

              <Link 
                href="#" 
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all group"
                aria-label="Shop Pure Essence on Meesho"
              >
                <span className="text-lg font-bold text-gray-800 group-hover:text-purple-600">M</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-600 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <p className="text-sm font-light text-black text-center lg:text-left">
              © Copyright 2025 Pure Essence - All Rights Reserved
            </p>
            <div className="flex flex-wrap justify-center lg:justify-end gap-6 text-sm">
              <Link href="/terms-of-use" className="text-black hover:underline transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer