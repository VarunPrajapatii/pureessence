"use client"

import { useEffect, useState } from 'react'
import Button from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'
import useCart from '@/hooks/use-cart'
import useCartSlide from '@/hooks/use-cart-slide'

const NavbarAction = () => {
  // we add mount because we want to use cart and store items in the local storage so that can cause hydration error
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const cart = useCart();
  const cartSlide = useCartSlide();

  if (!isMounted) {
    return null
  }

  return (
    <div className='ml-auto flex items-center gap-x-4'>
      <Button onClick={cartSlide.onOpen} className='flex items-center rounded-full bg-black px-4 py-2'>
        <ShoppingBag
           size={20}
           color='white' 
        />
        <span className='ml-2 text-sm font-medium text-white'>
          {cart.items.length}
        </span>
      </Button>
    </div>
  )
}

export default NavbarAction