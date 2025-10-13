'use client';

import useCartSlide from '@/hooks/use-cart-slide';
import useCart from '@/hooks/use-cart';
import { useEffect, useState } from 'react';
import { X, Plus, Minus, AlertCircle, AlertTriangle } from 'lucide-react';
import Image from 'next/image';
import Currency from '@/components/ui/currency';
import Button from '@/components/ui/button';
import { Product } from '@/types';
import { useRouter } from 'next/navigation';

interface CartSlideItemProps {
  data: Product;
  quantity: number;
}

const CartSlideItem: React.FC<CartSlideItemProps> = ({ data, quantity }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  const onIncrease = () => {
    if (quantity < data.stockQuantity) {
      cart.increaseQuantity(data.id);
    }
  };

  const onDecrease = () => {
    cart.decreaseQuantity(data.id);
  };

  const hasStockIssue = quantity > data.stockQuantity;
  const canIncrease = quantity < data.stockQuantity;

  return (
    <div className={`flex py-4 border-b ${hasStockIssue ? 'bg-red-50 border-red-200' : 'border-gray-200'}`}>
      <div className="relative h-32 w-32 rounded-md overflow-hidden flex-shrink-0">
        <Image
          fill
          src={data?.images?.[0]?.url}
          alt={data.name}
          className="object-cover object-center"
        />
      </div>
      <div className="ml-4 flex-1 flex flex-col">
        <div className="flex justify-between">
          <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
              {data.name}
            </h3>
            <div className="mt-1">
              <Currency amount={data.price} />
            </div>
          </div>
          <button
            onClick={onRemove}
            className="text-gray-400 hover:text-gray-500 p-1"
          >
            <X size={16} />
          </button>
        </div>

        {/* Stock Warning */}
        {hasStockIssue && (
          <div className="flex items-center gap-2 mt-2 text-red-600 text-xs">
            <AlertCircle size={14} />
            <span className="font-semibold">
              Only {data.stockQuantity} available! Please reduce quantity.
            </span>
          </div>
        )}

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center space-x-2">
            <button
              onClick={onDecrease}
              disabled={quantity <= 1}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Minus size={14} />
            </button>
            <span className="w-8 text-center text-sm font-medium">
              {quantity}
            </span>
            <button
              onClick={onIncrease}
              disabled={!canIncrease}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              title={!canIncrease ? `Maximum stock available: ${data.stockQuantity}` : ''}
            >
              <Plus size={14} />
            </button>
          </div>
          <span className="text-xs text-gray-500">
            ({data.stockQuantity} in stock)
          </span>
        </div>
      </div>
    </div>
  );
};

const CartSlide = () => {
  const cartSlide = useCartSlide();
  const cart = useCart();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Map items with their quantities
  const itemsWithQuantity = cart.items.map(item => ({
    data: item,
    quantity: item.quantity || 1
  }));

  // Calculate total items count
  const totalItemsCount = cart.items.reduce((total, item) => {
    return total + (item.quantity || 1);
  }, 0);

  // Calculate total price
  const totalPrice = cart.items.reduce((total, item) => {
    return total + (Number(item.price) * (item.quantity || 1));
  }, 0);

  // Check for stock issues
  const stockIssues = cart.items.filter(item => {
    const requestedQty = item.quantity || 1;
    return requestedQty > item.stockQuantity;
  });

  const hasStockIssues = stockIssues.length > 0;

  const onCheckout = () => {
    if (hasStockIssues) {
      return; // Prevent checkout if there are stock issues
    }
    cartSlide.onClose();
    router.push('/checkout');
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* Backdrop */}
      {cartSlide.isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-opacity-50 z-40"
          onClick={cartSlide.onClose}
        />
      )}

      {/* Slide Panel */}
      <div
        className={`
        fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out 
        ${cartSlide.isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Your Bag ({totalItemsCount})
            </h2>
            <button
              onClick={cartSlide.onClose}
              className="text-gray-400 hover:text-gray-500 p-1"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4">
            {cart.items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64">
                <p className="text-gray-500 text-center">Your bag is empty</p>
                <p className="text-sm text-gray-400 text-center mt-1">
                  Add some products to get started
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {itemsWithQuantity.map((item, index) => (
                  <CartSlideItem
                    key={index}
                    data={item.data}
                    quantity={item.quantity}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.items.length > 0 && (
            <div className="border-t border-gray-200 p-4 space-y-4">
              {/* Stock Issues Warning */}
              {hasStockIssues && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <div className="flex gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-red-800 mb-1">
                        Insufficient Stock
                      </h3>
                      <ul className="text-xs text-red-700 space-y-1">
                        {stockIssues.map((item) => (
                          <li key={item.id}>
                            <strong>{item.name}</strong>: Requested {item.quantity || 1}, only{' '}
                            <strong>{item.stockQuantity}</strong> available.
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs text-red-600 mt-1 font-medium">
                        Please update quantities before checkout.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Estimated Total</p>
                <Currency amount={totalPrice} />
              </div>
              <p className="text-sm text-gray-500">
                Taxes and shipping are calculated at checkout.
              </p>
              <Button
                onClick={onCheckout}
                disabled={hasStockIssues}
                className="w-full bg-black hover:bg-gray-800 text-white py-3 text-base font-medium disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                {hasStockIssues ? 'Resolve Stock Issues' : 'CHECKOUT'}
              </Button>
              {hasStockIssues && (
                <p className="text-xs text-red-600 text-center">
                  Update item quantities to proceed
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSlide;
