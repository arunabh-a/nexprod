import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import {  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input } from "@nextui-org/react";
import { useProductStore } from '../store/product';


const EditProduct = ({ isOpen, onClose, product }) => {

    const showSuccess = () => {
        toast.success('Product Updated.', {
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
    
      // Function to show error toast
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
    

    const [updatedproduct, setUpdatedProduct] = useState(product);

    const { updateProduct } = useProductStore();
    const handleUpdateProduct = async (id, updatedProduct) => {
        const {success, message} = await updateProduct(id, updatedproduct);
        if (success) {
            showSuccess();
        }
        else if (!success) {
            showError();
        }
        onClose();
      };



  return (
        <>
          <Modal 
            isOpen={isOpen} 
            onOpenChange={onClose}
            placement="top-center"
            className='dark'>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="text-white flex flex-col gap-1 ">Create a New Product</ModalHeader>
                  <ModalBody>
                    <Input
                        autoFocus
                        isRequired
                        label="Name"
                        placeholder="Product Name"
                        value={updatedproduct.name}
                        onChange={(e) => setUpdatedProduct({ ...updatedproduct, name: e.target.value })}
                        variant="flat"/>
                    <Input
                        isRequired
                        label="Price"
                        placeholder="0.00"
                        type="number"
                        value={updatedproduct.price}
                        onChange={(e) => setUpdatedProduct({ ...updatedproduct, price: e.target.value })}
                        variant="flat"
                        startContent={<div className="pointer-events-none flex items-center">
                            <span className="text-white text-small">₹</span></div>}
                        />
                    <Input
                        isRequired
                        label="Image URL"
                        placeholder="Image Link"
                        value={updatedproduct.image}
                        onChange={(e) => setUpdatedProduct({ ...updatedproduct, image: e.target.value })}
                        variant="flat"/>
                    <Input
                        isRequired
                        label="Brand"
                        placeholder="Product Brand"
                        value={updatedproduct.brand}
                        onChange={(e) => setUpdatedProduct({ ...updatedproduct, brand: e.target.value })}
                        variant="flat"/>

                  </ModalBody>
                  <ModalFooter>
                    <Button color="success" variant='flat' onPress={() => handleUpdateProduct(product._id, updatedproduct)}>
                      Update
                    </Button>
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
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </>
      );
    }

export default EditProduct