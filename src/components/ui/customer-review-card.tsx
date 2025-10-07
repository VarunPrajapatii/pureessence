import React from 'react'
import { Star } from 'lucide-react'

interface CustomerReviewCardProps {
  rating: number
  content: string
  customerName: string
}

const CustomerReviewCard: React.FC<CustomerReviewCardProps> = ({
  rating,
  content,
  customerName
}) => {
  return (
    <div className="flex-shrink-0 w-80 bg-white rounded-xl p-6 shadow-md border border-gray-100 mx-2">
      {/* Stars */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={16}
            className={`${
              index < rating 
                ? 'fill-yellow-400 text-yellow-400' 
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Review Content */}
      <p className="text-gray-700 leading-relaxed mb-4 min-h-[120px]">
        &ldquo;{content}&rdquo;
      </p>

      {/* Customer Name */}
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-orange-400 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
          {customerName.charAt(0).toUpperCase()}
        </div>
        <p className="font-semibold text-gray-800">
          {customerName}
        </p>
      </div>
    </div>
  )
}

export default CustomerReviewCard