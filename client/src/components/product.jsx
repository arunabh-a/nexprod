import React, { useState } from 'react'
import { Card, CardHeader, CardBody, Image, CardFooter, Button, ButtonGroup } from '@nextui-org/react';
import { Edit2Icon, Trash2Icon } from 'lucide-react';
import { useProductStore } from '../store/product';
import toast, { Toaster } from 'react-hot-toast';
import EditProduct from './editProduct';

const Product = ({ product }) => {

    const showSuccess = () => {
        toast.success('Product created Successfully.', {
        style: {
            background: 'green',
            color: 'white',
            padding: '16px',
            borderRadius: '8px',
        },
        iconTheme: {
            primary: 'white',
            secondary: 'green',
        },
        });
    };
    const showError = () => {
        toast.error('Something went wrong.', {
        style: {
            background: 'red',
            color: 'white',
            padding: '16px',
            borderRadius: '8px',
        },
        iconTheme: {
            primary: 'white',
            secondary: 'red',
        },
        });
    };
    
    const [isOpen, setIsOpen] = useState(false);
    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);

    const { deleteProduct } = useProductStore();

    const handleDeleteProduct = async () => {
        const {success, message} =  await deleteProduct(product._id);
        if (success) {
            showSuccess();
        }
        else {
            showError();
        }
    }

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
        <Button color="primary" size='md' radius='xl' onClick={onOpen} variant="light" className="bg-background">
            <Edit2Icon size={20}/>
        </Button>
        <Button color="primary" size='md' onClick={handleDeleteProduct} radius='xl' variant="light" className="bg-background">
            <Trash2Icon size={20}/>
        </Button>
    </ButtonGroup>
    </CardFooter>
    <Toaster
        position="bottom-center"
        reverseOrder={true}
        toastOptions={{
        success: {
            style: {
            background: 'green',
            color: 'white',
            borderRadius: '8px',
            },
        },
        error: {
            style: {
            background: 'red',
            color: 'white',
            borderRadius: '8px',
            },
        },
        }}
    />
    <EditProduct isOpen={isOpen} onClose={onClose} product={product} />

  </Card>
  
    
  )
}

export default Product