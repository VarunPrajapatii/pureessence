'use client';

import { create } from 'zustand';

interface CartSlideStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useCartSlide = create<CartSlideStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useCartSlide;