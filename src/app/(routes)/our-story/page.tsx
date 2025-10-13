import Container from '@/components/ui/container';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Target, Award, Leaf, Sparkles } from 'lucide-react';

const OurStoryPage = () => {
  return (
    <Container>
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            Our Story
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            From ancient Ayurvedic wisdom to modern natural skincare, 
            discover the journey of bringing pure, organic powders to your doorstep.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-xl">
          <div className="relative w-full aspect-[21/9]">
            <Image
              src="/temp.jpeg"
              alt="Pure Essence Natural Powders"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Story Content */}
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Beginning Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How It All Began</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                Our journey started with a simple realization: the best skincare solutions have existed 
                for thousands of years in nature. Inspired by ancient Ayurvedic traditions and natural 
                beauty rituals, we set out to bring the purest, most effective organic powders to modern homes.
              </p>
              <p>
                From beetroot powder&apos;s natural glow-enhancing properties to multani mitti&apos;s deep 
                cleansing abilities, pink clay&apos;s gentle exfoliation, and orange peel&apos;s brightening 
                effects—each powder tells a story of nature&apos;s incredible healing power. We source, process, 
                and pack these treasures with utmost care to preserve their natural benefits.
              </p>
              <p>
                What started as a passion project has grown into a trusted brand, but our core values 
                remain unchanged: 100% natural, chemical-free, and cruelty-free products that actually work.
              </p>
            </div>
          </section>

          {/* Vision & Mission */}
          <section className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To provide 100% pure, natural, and organic powders that bring the goodness of nature 
                  to everyday skincare. We believe in transparency, quality, and making natural beauty 
                  accessible to everyone—without harmful chemicals, preservatives, or artificial additives.
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To become India&apos;s most trusted source for natural skincare powders, known for 
                  our commitment to purity, sustainability, and empowering people to embrace natural 
                  beauty. We envision a future where chemical-laden products are replaced by nature&apos;s 
                  own remedies.
                </p>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Purity */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">100% Pure & Natural</h3>
                <p className="text-gray-600">
                  No chemicals, no preservatives, no artificial colors. Just pure, 
                  unadulterated powders straight from nature to you.
                </p>
              </div>

              {/* Sustainability */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Eco-Friendly</h3>
                <p className="text-gray-600">
                  Sustainable sourcing, minimal packaging, and zero waste practices. 
                  We care for your skin and our planet equally.
                </p>
              </div>

              {/* Trust */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <Heart className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cruelty-Free & Vegan</h3>
                <p className="text-gray-600">
                  Never tested on animals. All our powders are 100% vegan and ethically 
                  sourced with love and respect for all beings.
                </p>
              </div>

            </div>
          </section>

          {/* Image with Text Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What Makes Us Different
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  In a market flooded with chemical-laden products, we stand out by returning to 
                  nature&apos;s wisdom and ancient Ayurvedic practices.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Leaf className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Single-Ingredient Purity:</strong> Each powder contains exactly what 
                      it says—nothing more, nothing less. No fillers or additives.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Leaf className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Traditional Processing:</strong> We use age-old methods to preserve 
                      the natural nutrients and benefits of each ingredient.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Leaf className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Quality Testing:</strong> Every batch is tested for purity and quality 
                      before reaching you, ensuring consistent results.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/temp.jpeg"
                  alt="Natural organic powders"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Journey in Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">15K+</div>
                <div className="text-gray-300 text-sm md:text-base">Happy Customers</div>
              </div>

              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">20+</div>
                <div className="text-gray-300 text-sm md:text-base">Natural Powders</div>
              </div>

              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">30K+</div>
                <div className="text-gray-300 text-sm md:text-base">Orders Delivered</div>
              </div>

              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-pink-400 mb-2">100%</div>
                <div className="text-gray-300 text-sm md:text-base">Natural & Pure</div>
              </div>

            </div>
          </section>

          {/* Commitment Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment to You</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                When you choose Pure Essence, you&apos;re not just buying a powder—you&apos;re embracing 
                a lifestyle that honors nature, tradition, and your skin&apos;s natural beauty. We promise 
                transparency in sourcing, honesty in labeling, and dedication to quality.
              </p>
              <p>
                Every jar of beetroot powder for that natural blush, every pack of multani mitti for 
                deep cleansing, every container of pink clay for gentle care—is a testament to our 
                commitment to bringing you nature&apos;s best, in its purest form.
              </p>
            </div>
          </section>

          {/* Community Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/temp.jpeg"
                alt="Pure Essence Community"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Future Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Looking Ahead</h2>
            <div className="max-w-3xl mx-auto space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                As we grow, our mission remains steadfast: to bring more natural treasures from 
                nature&apos;s pharmacy to your homes, while staying true to our principles of purity, 
                sustainability, and transparency.
              </p>
              <p>
                Thank you for being part of our journey. Together, we&apos;re rediscovering the power 
                of nature and creating a community that values natural beauty, inside and out.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-green-50 to-yellow-50 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Experience Nature&apos;s Magic</h2>
            <p className="text-xl mb-8">
              Discover the power of pure, organic powders. Your skin will thank you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-700 transition-colors text-lg"
              >
                Shop Natural Powders
              </Link>
              <Link
                href="/contact-us"
                className="inline-block bg-transparent border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-green-600 hover:text-white transition-colors text-lg"
              >
                Get in Touch
              </Link>
            </div>
          </section>

        </div>
      </div>
    </Container>
  );
};

export default OurStoryPage;
