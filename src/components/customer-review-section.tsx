'use client';

import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import CustomerReviewCard from '@/components/ui/customer-review-card'

const CustomerReviewSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320 // Card width + gap
      const currentScroll = scrollContainerRef.current.scrollLeft
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount

      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      })
    }
  }

  // Sample review data for organic powder products
  const reviews = [
    {
      rating: 5,
      content: "Amazing beetroot powder! The quality is exceptional and you can really taste the difference. My skin has improved dramatically since I started using it daily.",
      customerName: "Priya Sharma"
    },
    {
      rating: 5,
      content: "Best sandalwood powder I've ever used. Pure, authentic, and the fragrance is divine. Perfect for my daily skincare routine. Highly recommended!",
      customerName: "Arjun Patel"
    },
    {
      rating: 5,
      content: "The multani mitti is so pure and effective! My oily skin has never felt better. Great packaging and fast delivery too.",
      customerName: "Kavitha Reddy"
    },
    {
      rating: 4,
      content: "Orange peel powder works wonders for my face masks. Natural glow is visible after just a few uses. Will definitely order again.",
      customerName: "Rohit Kumar"
    },
    {
      rating: 5,
      content: "Excellent quality turmeric powder. Chemical-free and organic as promised. My grandmother approved of the authenticity!",
      customerName: "Meera Joshi"
    },
    {
      rating: 5,
      content: "Love the neem powder! Perfect for treating skin issues naturally. The powder is finely ground and mixes well with other ingredients.",
      customerName: "Vikram Singh"
    },
    {
      rating: 4,
      content: "Great rose petal powder. The color and fragrance are natural and beautiful. Perfect for DIY face packs and natural beauty treatments.",
      customerName: "Ananya Das"
    },
    {
      rating: 5,
      content: "Pure Essence lives up to its name! The hibiscus powder is of premium quality. My hair feels stronger and looks shinier.",
      customerName: "Raghav Menon"
    },
    {
      rating: 5,
      content: "Fantastic ashwagandha powder! Completely natural and effective. Has helped me manage stress better. Fast shipping and great customer service.",
      customerName: "Deepika Iyer"
    },
    {
      rating: 4,
      content: "The amla powder is excellent for hair care. Pure, organic, and very effective. Will continue using and recommending to friends.",
      customerName: "Suresh Gupta"
    }
  ]

  return (
    <section className="py-12 lg:py-16 ">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why thousands of customers trust Pure Essence for their natural wellness journey
          </p>
        </div>

        {/* Reviews Container */}
        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            aria-label="Previous reviews"
          >
            <ChevronLeft size={20} className="text-gray-600" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            aria-label="Next reviews"
          >
            <ChevronRight size={20} className="text-gray-600" />
          </button>

          {/* Scrollable Reviews */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-hidden pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-4 px-12">
              {reviews.map((review, index) => (
                <CustomerReviewCard
                  key={index}
                  rating={review.rating}
                  content={review.content}
                  customerName={review.customerName}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default CustomerReviewSection