import Container from '@/components/ui/container';
import { PackageCheck, RefreshCw, ShieldCheck, Clock } from 'lucide-react';

const ReturnPolicyPage = () => {
  return (
    <Container>
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Return & Exchange Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="max-w-4xl space-y-12">
          {/* Icons Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-3">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-sm font-semibold text-gray-700">7 Days Return</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-3">
                <RefreshCw className="h-8 w-8 text-orange-600" />
              </div>
              <p className="text-sm font-semibold text-gray-700">Easy Process</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-3">
                <PackageCheck className="h-8 w-8 text-yellow-600" />
              </div>
              <p className="text-sm font-semibold text-gray-700">Quality Assured</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-3">
                <ShieldCheck className="h-8 w-8 text-pink-600" />
              </div>
              <p className="text-sm font-semibold text-gray-700">100% Secure</p>
            </div>
          </div>

          {/* Policy Content */}
          <div className="prose prose-gray max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Pure Essence, we are committed to delivering 100% natural and pure organic powders. 
                We want you to be completely satisfied with your purchase. If for any reason you are not, 
                we offer a straightforward return and exchange policy. Please read the following terms carefully 
                to understand your rights and obligations.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Return Eligibility</h2>
              <p className="text-gray-700 mb-4">
                You may request a return or replacement for the following reasons:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Wrong Product Shipped:</strong> If you received a different powder than what you ordered (e.g., ordered multani mitti but received beetroot powder).</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Damaged Product:</strong> If the product was damaged during transit, the packaging is torn, or powder has leaked.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Expired Product:</strong> If the product received is past its expiration date or best-before date.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Missing Items:</strong> If any items from your order are missing upon delivery.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Quality Issues:</strong> If the powder appears contaminated, has unusual color/odor, or doesn&apos;t match the expected natural characteristics.</span>
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Return Window</h2>
              <p className="text-gray-700 leading-relaxed">
                Returns must be requested within <strong>7 days</strong> of receiving your order. 
                Return requests made after this period will not be eligible for refunds or replacements. 
                Please inspect your order immediately upon delivery.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Request a Return</h2>
              <p className="text-gray-700 mb-4">
                To initiate a return, please follow these steps:
              </p>
              <ol className="space-y-3 text-gray-700 list-decimal list-inside">
                <li>Contact our customer support team via email at <a href="mailto:support@pureessence.com" className="text-green-600 hover:underline">support@pureessence.com</a></li>
                <li>Provide your order number, product name, and details about the issue</li>
                <li>Include clear photos of:
                  <ul className="ml-8 mt-2 space-y-1 list-disc list-inside">
                    <li>The product packaging (showing seals intact)</li>
                    <li>The product itself (if damaged or wrong item)</li>
                    <li>The shipping label and package condition</li>
                  </ul>
                </li>
                <li>Our team will review your request within 24-48 hours</li>
                <li>Once approved, we will arrange for pickup or provide return instructions</li>
              </ol>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Return Conditions</h2>
              <p className="text-gray-700 mb-4">
                To be eligible for a return, the product must meet the following conditions:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Unopened & Unused:</strong> The product seal must be intact. Once opened, the powder cannot be returned (except in cases of damage, contamination, or quality issues).</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Original Packaging:</strong> The product must be in its original packaging with all labels, seals, and information cards intact.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Same Condition:</strong> The product must be in the same condition as received, without any signs of use or tampering.</span>
                </li>
              </ul>
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-900">
                  <strong>Important Note:</strong> Due to hygiene and safety reasons, we cannot accept returns of 
                  opened organic powders unless there is a quality issue, contamination, or product defect. 
                  Please inspect your order carefully before opening the seal.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Process</h2>
              <p className="text-gray-700 mb-4">
                Once your return is received and inspected by our quality team, we will notify you of the 
                approval or rejection of your refund.
              </p>
              <p className="text-gray-700 mb-4">
                If approved, your refund will be processed as follows:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Prepaid Orders:</strong> Refund will be credited to your original payment method within 5-7 business days after approval.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Cash on Delivery Orders:</strong> Refund will be processed via bank transfer (NEFT/IMPS) to your provided account details within 7-10 business days.</span>
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Replacements & Exchanges</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you received a damaged, defective, or wrong product, we will send you a replacement at no 
                additional cost. Replacement shipments are typically processed within 2-4 business days after 
                the return is approved.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Exchange for Different Product:</strong> If you&apos;d like to exchange for a different powder 
                (e.g., received pink clay but want multani mitti instead), please:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Contact us with your order number and exchange request</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Return the unopened product in original condition</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>We&apos;ll ship the desired product once we receive the returned item</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Please note that replacements are subject to product availability. If the product is out of stock, 
                we will offer a full refund or suggest an alternative natural powder.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Non-Returnable Items</h2>
              <p className="text-gray-700 mb-4">
                Certain products are not eligible for return or refund:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Opened Powders:</strong> Once the seal is broken and the powder is used, it cannot be returned (unless defective).</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Custom/Bulk Orders:</strong> Specially prepared or bulk orders are non-returnable unless defective.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Combo Packs:</strong> Combo/gift sets cannot be partially returned; the entire set must be returned.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Sale Items:</strong> Products purchased during clearance or special promotions may not be eligible for return (check product page).</span>
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Shipping Costs</h2>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Our Fault:</strong> For returns due to our error (wrong item, damaged product, quality issues), 
                  we will cover the return shipping costs and arrange free pickup.</span>
                </p>
                <p className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Change of Mind:</strong> If you simply changed your mind (and product is unopened), 
                  you may return it, but return shipping costs will be your responsibility.</span>
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Quality Assurance</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All our organic powders undergo strict quality checks before shipping. Each batch is tested for:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Purity (100% natural, no additives or fillers)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Texture and color consistency</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Freshness and proper storage</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Proper sealing and packaging</span>
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about our Return & Exchange Policy, please contact us:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> <a href="mailto:support@pureessence.com" className="text-green-600 hover:underline">support@pureessence.com</a>
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong> <a href="tel:+911234567890" className="text-green-600 hover:underline">+91 123 456 7890</a>
                </p>
                <p className="text-gray-700">
                  <strong>Support Hours:</strong> Monday - Saturday, 9:00 AM - 7:00 PM IST
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ReturnPolicyPage;
