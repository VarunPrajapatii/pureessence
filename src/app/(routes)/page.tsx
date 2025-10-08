import getCategoryBillboards from '@/actions/get-category-billboards';
import getProducts from '@/actions/get-products';
import getUpcomingProducts from '@/actions/get-upcoming-products';
import Billboard from '@/components/billboard';
import CustomerReviewSection from '@/components/customer-review-section';
import Marquee from '@/components/marquee';
import OurPurpose from '@/components/our-purpose';
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container';
import UpcomingProducts from '@/components/upcoming-products';

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboards = await getCategoryBillboards('bdfe79f2-996b-4689-b848-985df841569c');
  const upcomingProducts = await getUpcomingProducts({});

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboards} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Our Featured Products" items={products} />
        </div>
        {/* Our purpose section */}
        <OurPurpose />
        {/* Marquee */}
        <Marquee />
        {/* Upcoming Products */}
        <UpcomingProducts items={upcomingProducts} />
        {/* Customer Review Section */}
        <CustomerReviewSection />
      </div>
    </Container>
  );
};

export default HomePage;
