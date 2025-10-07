import getBillboards from '@/actions/get-billboards';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/billboard';
import CustomerReviewSection from '@/components/customer-review-section';
import Marquee from '@/components/marquee';
import OurPurpose from '@/components/our-purpose';
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container';

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboards('4a075499-b2ee-48d4-b8bd-c0541c832cb3');

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Our Featured Products" items={products} />
        </div>
        {/* Our purpose section */}
        <OurPurpose />
        {/* Marquee */}
        <Marquee />
        {/* Customer Review Section */}
        <CustomerReviewSection />
      </div>
    </Container>
  );
};

export default HomePage;
