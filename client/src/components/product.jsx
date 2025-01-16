import React from 'react'
import { Card, CardHeader, CardBody, Image, CardFooter, Button, ButtonGroup } from '@nextui-org/react';
import { DeleteIcon, Edit2Icon, Trash2Icon } from 'lucide-react';

const Product = ({ product }) => {
  return (
    <Card
    isPressable
    shadow="md"
    radius="lg"
    className='w-auto py-3 px-3 bg-secondary'>
    <CardHeader className="py-2 px-4 flex-col items-center">
      <Image
        src={product.image}
        alt={product.name}
        className='product-image'
      />
    </CardHeader>

    <CardBody className="py-2">
      <h1 className="product-title font-bold">
        {product.name}
      </h1>
      <h4 className="product-brand">
        {product.brand}
      </h4>
      <h4 className="product-price">
      ₹{product.price}
      </h4>
    </CardBody>
    <CardFooter>
    <ButtonGroup>
        <Button color="primary" size='md' radius='xl' variant="light" className="bg-background">
            <Edit2Icon size={20}/>
        </Button>
        <Button color="primary" size='md' radius='xl' variant="light" className="bg-background">
            <Trash2Icon size={20}/>
        </Button>
    </ButtonGroup>
    </CardFooter>

  </Card>
    
  )
}

export default Product