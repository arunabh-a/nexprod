import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import {  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input } from "@nextui-org/react";
import { useProductStore } from '../store/product';


const CreateProduct = ({ isOpen, onClose }) => {

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

    const [newproduct, setNewProduct] = React.useState({
        name: '',
        price: '',
        image: '',
        brand: '',

    });

    const { createProduct } = useProductStore();
    const handleAddProduct = async () => {
        const {success, message} = await createProduct(newproduct);
        if (success) {
            showSuccess();
        }
        else if (!success) {
            showError();
        }
        setNewProduct({
            name: '',
            price: '',
            image: '',
            brand: '',
        });
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
                        value={newproduct.name}
                        onChange={(e) => setNewProduct({ ...newproduct, name: e.target.value })}
                        variant="flat"/>
                    <Input
                        isRequired
                        label="Price"
                        placeholder="0.00"
                        type="number"
                        value={newproduct.price}
                        onChange={(e) => setNewProduct({ ...newproduct, price: e.target.value })}
                        variant="flat"
                        startContent={<div className="pointer-events-none flex items-center">
                            <span className="text-white text-small">₹</span></div>}
                        />
                    <Input
                        isRequired
                        label="Image URL"
                        placeholder="Image Link"
                        value={newproduct.image}
                        onChange={(e) => setNewProduct({ ...newproduct, image: e.target.value })}
                        variant="flat"/>
                    <Input
                        isRequired
                        label="Brand"
                        placeholder="Product Brand"
                        value={newproduct.brand}
                        onChange={(e) => setNewProduct({ ...newproduct, brand: e.target.value })}
                        variant="flat"/>

                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="flat" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="success" variant='flat' onPress={handleAddProduct}>
                      Add
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

export default CreateProduct




// "name":"Blackshark V2 Pro",
// 	"price":"12999",
// 	"image":"example.com/image",
// 	"brand":"Razer"
