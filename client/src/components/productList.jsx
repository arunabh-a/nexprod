import React, { useEffect } from 'react'
import Product from './product'
import { useProductStore } from '../store/product';

const Products = () => {
    const { fetchProducts,  products}  = useProductStore();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);


  return (
    <div className='productList'>
        {products.map((product) => (
            <Product key={product._id} product={product} />
        ))}

        {/* <Product /> */}
    </div>
  )
}

export default Products