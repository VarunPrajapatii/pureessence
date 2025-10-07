import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Twitter, Youtube, Facebook } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-green-50 to-orange-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          
          {/* Logo Section */}
          <div className="mb-12 lg:mb-16">
            <Link href="/" className="inline-block">
              <Image
                src="/pureessencelogo.png"
                alt="Pure Essence Logo"
                width={200}
                height={60}
                className="h-12 lg:h-24 w-auto"
              />
            </Link>
          </div>

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Left Side - Company Description & Social Media */}
            <div className="lg:col-span-2">
              {/* Company Description */}
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed text-base lg:text-lg max-w-lg">
                  Pure Essence&apos;s natural wellness solutions are shaping the future of organic health, merging traditional Ayurvedic wisdom with pure plant-based powders for long-term vitality and natural beauty.
                </p>
              </div>

              {/* Social Media */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
                <div className="flex flex-col space-y-3">
                  <Link 
                    href="https://instagram.com/pureessence" 
                    className="flex items-center space-x-3 text-gray-600 hover:text-green-600 transition-colors group"
                    aria-label="Follow Pure Essence on Instagram"
                  >
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                      <Instagram size={20} />
                    </div>
                    <span className="font-medium">Instagram</span>
                  </Link>

                  <Link 
                    href="https://facebook.com/pureessence" 
                    className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors group"
                    aria-label="Follow Pure Essence on Facebook"
                  >
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                      <Facebook size={20} />
                    </div>
                    <span className="font-medium">Facebook</span>
                  </Link>

                  <Link 
                    href="https://youtube.com/pureessence" 
                    className="flex items-center space-x-3 text-gray-600 hover:text-red-600 transition-colors group"
                    aria-label="Follow Pure Essence on YouTube"
                  >
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                      <Youtube size={20} />
                    </div>
                    <span className="font-medium">YouTube</span>
                  </Link>

                  <Link 
                    href="https://twitter.com/pureessence" 
                    className="flex items-center space-x-3 text-gray-600 hover:text-blue-400 transition-colors group"
                    aria-label="Follow Pure Essence on Twitter"
                  >
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                      <Twitter size={20} />
                    </div>
                    <span className="font-medium">Twitter</span>
                  </Link>

                  <Link 
                    href="https://meesho.com/pureessence" 
                    className="flex items-center space-x-3 text-gray-600 hover:text-purple-600 transition-colors group"
                    aria-label="Shop Pure Essence on Meesho"
                  >
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                      <span className="text-sm font-bold">M</span>
                    </div>
                    <span className="font-medium">Meesho</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* About Us Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6">About Us</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/about/our-story" className="text-gray-600 hover:text-green-600 transition-colors">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/reviews" className="text-gray-600 hover:text-green-600 transition-colors">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link href="/science" className="text-gray-600 hover:text-green-600 transition-colors">
                    Science
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-600 hover:text-green-600 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-600 hover:text-green-600 transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Help & Support Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Help &amp; Support</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/returns-exchanges" className="text-gray-600 hover:text-green-600 transition-colors">
                    Returns &amp; Exchanges
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-600 hover:text-green-600 transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-use" className="text-gray-600 hover:text-green-600 transition-colors">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-gray-600 hover:text-green-600 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="text-gray-600 hover:text-green-600 transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-300 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <p className="text-sm text-gray-600">
              © Copyright 2025 Pure Essence - All Rights Reserved
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="/terms-of-use" className="text-gray-600 hover:text-green-600 transition-colors">
                Terms of Use
              </Link>
              <Link href="/privacy-policy" className="text-gray-600 hover:text-green-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/web-accessibility" className="text-gray-600 hover:text-green-600 transition-colors">
                Web Accessibility
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer