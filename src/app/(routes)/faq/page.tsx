'use client';

import { useState } from 'react';
import Container from '@/components/ui/container';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: 'About Our Products',
    question: 'What makes Pure Essence powders different from others?',
    answer: 'Our powders are 100% natural, chemical-free, and preservative-free. We source premium quality ingredients and process them using traditional methods to preserve their natural benefits. Each powder is single-ingredient—no fillers, no additives, just pure nature.',
  },
  {
    category: 'About Our Products',
    question: 'Are your products suitable for all skin types?',
    answer: 'Yes! Our natural powders like multani mitti, pink clay, and orange peel are suitable for all skin types. However, we always recommend doing a patch test before using any new product, especially if you have sensitive skin or known allergies.',
  },
  {
    category: 'Usage & Benefits',
    question: 'How do I use beetroot powder for skin?',
    answer: 'Mix 1-2 teaspoons of beetroot powder with rose water, yogurt, or honey to form a paste. Apply to clean skin and leave for 15-20 minutes. Rinse with lukewarm water. Beetroot powder naturally enhances skin glow, adds a rosy tint, and provides antioxidants.',
  },
  {
    category: 'Usage & Benefits',
    question: 'What are the benefits of multani mitti?',
    answer: 'Multani mitti (Fuller\'s Earth) is excellent for deep cleansing, oil control, removing blackheads, and treating acne. It absorbs excess sebum, unclogs pores, and leaves skin refreshed. Mix with rose water or cucumber juice for best results.',
  },
  {
    category: 'Usage & Benefits',
    question: 'How is pink clay different from other clays?',
    answer: 'Pink clay is gentler than other clays, making it perfect for sensitive and dry skin. It provides mild exfoliation, brightens skin tone, improves circulation, and helps with cell renewal—all without being harsh or drying.',
  },
  {
    category: 'Usage & Benefits',
    question: 'Can orange peel powder lighten dark spots?',
    answer: 'Yes! Orange peel powder is rich in Vitamin C and has natural brightening properties. Regular use can help reduce dark spots, tan, and pigmentation. Mix with milk or yogurt and apply 2-3 times a week for visible results.',
  },
  {
    category: 'Orders & Shipping',
    question: 'Where do you ship?',
    answer: 'We ship across India to over 20,000 pincodes. Orders can be placed with prepaid payment (card, UPI, net banking) or cash on delivery (COD) where available.',
  },
  {
    category: 'Orders & Shipping',
    question: 'How long does delivery take?',
    answer: 'We usually ship within 24 working hours after receiving an order. Once shipped, delivery takes 2-5 business days depending on your location. Metro cities typically receive orders within 2-3 days, while remote areas may take 5-7 days.',
  },
  {
    category: 'Orders & Shipping',
    question: 'Can I track my order?',
    answer: 'Yes! Once your order is shipped, you will receive a tracking number via email and SMS. You can use this to track your order status in real-time through the courier partner\'s website.',
  },
  {
    category: 'Returns & Refunds',
    question: 'What is your return policy?',
    answer: 'We offer returns/exchanges within 7 days of delivery for wrong shipments, damaged products, expired products, or quality issues. Products must be unopened with seals intact (except for defects). Please contact us at support@pureessence.com to initiate a return.',
  },
  {
    category: 'Returns & Refunds',
    question: 'Can I return an opened product?',
    answer: 'Due to hygiene and safety reasons, we cannot accept returns of opened powders unless there is a quality issue, contamination, or product defect. Please inspect your order carefully before opening the seal.',
  },
  {
    category: 'Quality & Safety',
    question: 'Do your products contain any chemicals or preservatives?',
    answer: 'No! All Pure Essence powders are 100% natural with zero chemicals, preservatives, artificial colors, or fragrances. What you see on the label is exactly what you get—pure, single-ingredient powders.',
  },
  {
    category: 'Quality & Safety',
    question: 'Are your products tested on animals?',
    answer: 'Absolutely not! We are proudly cruelty-free and vegan. None of our products or ingredients are tested on animals. We believe in ethical and compassionate beauty.',
  },
  {
    category: 'Quality & Safety',
    question: 'How should I store the powders?',
    answer: 'Store all powders in a cool, dry place away from direct sunlight and moisture. Keep containers tightly sealed after use. Proper storage ensures the powder retains its natural properties and extends its shelf life.',
  },
  {
    category: 'Quality & Safety',
    question: 'What is the shelf life of your products?',
    answer: 'Our natural powders have a shelf life of 12-24 months from the date of packaging (check individual product labels). Since they contain no preservatives, always use a clean, dry spoon and avoid introducing moisture into the container.',
  },
  {
    category: 'Payment',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit/debit cards, UPI, net banking, and cash on delivery (COD) for eligible locations. All online payments are 100% secure and encrypted.',
  },
  {
    category: 'Payment',
    question: 'Is it safe to use my credit card on your website?',
    answer: 'Yes, absolutely! All transactions are secured with industry-standard SSL encryption. We use trusted payment gateways (Razorpay) and do not store your card details on our servers.',
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container>
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our natural powders, usage tips, shipping, and policies.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 max-w-4xl">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden transition-all hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-start justify-between text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-semibold text-green-600 uppercase tracking-wide">
                      {faq.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-green-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 p-6 bg-green-50 border border-green-200 rounded-lg max-w-4xl">
          <h3 className="text-lg font-semibold text-green-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-green-800 mb-4">
            Can&apos;t find the answer you&apos;re looking for? Our team is here to help with any questions 
            about our natural powders, skincare advice, or your order.
          </p>
          <a
            href="/contact-us"
            className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </Container>
  );
};

export default FAQPage;
