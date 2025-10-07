import Container from '@/components/ui/container';
import Link from 'next/link';
import MainNav from '@/components/main-nav';
import getCategories from '@/actions/get-categories';
import NavbarAction from '@/components/navbar-actions';
import Image from 'next/image';

// what this does is that it never caches this page
// meaning it will always fetch the latest data from the server
// instead of using the cached version
// this is useful for dynamic data that changes frequently
// like categories, products, etc.
export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="fixed bg-white w-full z-20">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          {/* Left spacer to balance the cart button */}
          <div className="flex items-center">
            {/* This div takes up the same space as the cart button for centering */}
            <div className="w-[72px]"></div>
          </div>
          
          {/* Centered Logo */}
          <Link href="/" className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image
              src={"/pslogo.png"}
              alt="Logo"
              width={150}
              height={100}
              className=''
            />
          </Link>
          
          {/* Right side - Cart */}
          <NavbarAction /> 
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
