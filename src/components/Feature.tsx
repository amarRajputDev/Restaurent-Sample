import Image from 'next/image'
import React from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import food from '../assests/qualityfood.png'
import delivery from '../assests/fastdev.png'
import cash from '../assests/cbh.png'
import checkout from '../assests/checkout.webp'

function Feature() {
  return (
    <div>
      <section className="container mx-auto py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Image src={food} alt="Quality Food" width={50} height={50} />, title: "Quality Food" },
              { icon: <Image src={delivery} alt="Fast Delivery" width={50} height={50} />, title: "Fast Delivery" },
              { icon: <Image src={cash} alt="Cash by Hand" width={50} height={50} />, title: "Cash by Hand" },
              { icon: <Image src={checkout} alt="Check out" width={50} height={50} />, title: "Check out" },
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">{item.icon}</div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                  <Button variant="link" className="mt-4 text-[#FF6B6B]">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
    </div>
  )
}

export default Feature
