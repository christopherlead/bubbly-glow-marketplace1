import { create } from 'zustand';
import { supabase } from './supabase';

export interface CartItem {
  id: string;
  product_id: string;
  quantity: number;
  name: string;
  price: number;
  image: string;
}

interface CartStore {
  items: CartItem[];
  isLoading: boolean;
  addItem: (productId: string) => Promise<void>;
  removeItem: (productId: string) => Promise<void>;
  updateQuantity: (productId: string, quantity: number) => Promise<void>;
  fetchCart: () => Promise<void>;
}

export const useCart = create<CartStore>((set, get) => ({
  items: [],
  isLoading: false,

  fetchCart: async () => {
    set({ isLoading: true });
    const { data: cartItems, error } = await supabase
      .from('cart_items')
      .select(`
        id,
        product_id,
        quantity,
        products (
          name,
          price,
          image
        )
      `);

    if (error) {
      console.error('Error fetching cart:', error);
      set({ isLoading: false });
      return;
    }

    const formattedItems = cartItems.map((item: any) => ({
      id: item.id,
      product_id: item.product_id,
      quantity: item.quantity,
      name: item.products.name,
      price: item.products.price,
      image: item.products.image,
    }));

    set({ items: formattedItems, isLoading: false });
  },

  addItem: async (productId: string) => {
    const { error } = await supabase
      .from('cart_items')
      .upsert(
        { 
          product_id: productId,
          user_id: (await supabase.auth.getUser()).data.user?.id,
          quantity: 1 
        },
        { 
          onConflict: 'user_id, product_id',
          ignoreDuplicates: false 
        }
      );

    if (error) {
      console.error('Error adding item to cart:', error);
      return;
    }

    get().fetchCart();
  },

  removeItem: async (productId: string) => {
    const { error } = await supabase
      .from('cart_items')
      .delete()
      .eq('product_id', productId)
      .eq('user_id', (await supabase.auth.getUser()).data.user?.id);

    if (error) {
      console.error('Error removing item from cart:', error);
      return;
    }

    get().fetchCart();
  },

  updateQuantity: async (productId: string, quantity: number) => {
    if (quantity < 1) return;

    const { error } = await supabase
      .from('cart_items')
      .update({ quantity })
      .eq('product_id', productId)
      .eq('user_id', (await supabase.auth.getUser()).data.user?.id);

    if (error) {
      console.error('Error updating cart item quantity:', error);
      return;
    }

    get().fetchCart();
  },
}));