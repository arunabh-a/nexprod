import {create} from 'zustand';

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    createProduct: async (newproduct) => {
        if (!newproduct.name || !newproduct.price || !newproduct.image) {
            return { success: false, message: 'Please fill all fields' };
        }
        const response = await fetch('/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newproduct),
        });
        const data = await response.json();
        set((state) => ({ products: [...state.products, data.data] }));
        return { success: true, message: 'Product added successfully' };
    },

    fetchProducts: async () => {
        const response = await fetch('/api/products');
        const data = await response.json();
        set({ products: data });
    },
}));
