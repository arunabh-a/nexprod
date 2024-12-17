import React from 'react'
import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';

const Product = () => {
  return (
    <Card className="w-fit py-3 px-3 bg-secondary ">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-xl text-primary font-bold">BlackShark V2 Pro</p>
            <small className="text-500">Razer</small>
            <h4 className="font-bold text-large">12999</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
            <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://nextui.org/images/hero-card-complete.jpeg"
            width={270}
            />
        </CardBody>
    </Card>
  )
}

export default Product