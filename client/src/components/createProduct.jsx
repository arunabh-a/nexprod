import React from 'react'
import {  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input} from "@nextui-org/react";


const CreateProduct = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleAddProduct = (data) => {
        // Implement your product creation logic here
        // e.g., send data to your backend API for storage
        console.log('New product data:', data);
      };



  return (
        <>
        <Button onPress={onOpen}>Open Modal</Button>
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
                        variant="flat"/>
                    <Input
                        isRequired
                        label="Price"
                        placeholder="0.00"
                        type="number"
                        variant="flat"
                        startContent={<div className="pointer-events-none flex items-center">
                            <span className="text-white text-small">₹</span></div>}
                        />
                    <Input
                        isRequired
                        className='text-white'
                        label="Image"
                        labelPlacement='outside-left'
                        type='file'
                        variant="flat"/>
                    <Input
                        isRequired
                        label="Password"
                        placeholder="Enter the Brand of the Product"
                        type="password"
                        variant="flat"/>

                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="flat" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="success" variant='flat' onPress={onClose}>
                      Add
                    </Button>
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
