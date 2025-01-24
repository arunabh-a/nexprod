import {create} from 'zustand';
const api = 'https://nexprod-interface.onrender.com';
export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    createProduct: async (newproduct) => {
        if (!newproduct.name || !newproduct.price || !newproduct.image) {
            return { success: false, message: 'Please fill all fields' };
        }
        const response = await fetch(api +'/api/products', {
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
        const response = await fetch(api +'/api/products');
        const data = await response.json();
        set({ products: data });
    },

    deleteProduct: async (id) => {
		const res = await fetch(api +`/api/products/${id}`, {
			method: "DELETE",
		});
		const data = await res.json();
		if (!data.success) return { success: false, message: data.message };

		// update the ui immediately, without needing a refresh
		set((state) => ({ products: state.products.filter((product) => product._id !== id) }));
		return { success: true, message: data.message };
	},
	updateProduct: async (id, updatedProduct) => {
		const res = await fetch(api +`/api/products/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedProduct),
		});
		const data = await res.json();
		if (!data.success) return { success: false, message: data.message };

		// update the ui immediately, without needing a refresh
		set((state) => ({
			products: state.products.map((product) => (product._id === id ? data.data : product)),
		}));

		return { success: true, message: data.message };
	},
}));
