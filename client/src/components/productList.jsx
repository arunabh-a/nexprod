import React from 'react'
import Product from './product'

const Products = () => {
  return (
    <div className='productList'>
        {/* <Text h1 size={40} css={{textGradient: "45deg, $blue600 -20%, $pink600 50%"}}>Products</Text> */}
        <h1 className="text-center textHeader">Products</h1>
        <Product />
    </div>
  )
}

export default Products