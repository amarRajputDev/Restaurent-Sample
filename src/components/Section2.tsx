import { Clock, DollarSign, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import sec2 from '../assests/sec.jpg'

function Section2() {
  return (
    <div>
        <section className="container mx-auto py-12 flex gap-8 flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 w-full flex justify-center items-center">
            <Image 
            data-aos="fade-up"
            // data-aos-offset="200"
            // data-aos-delay="50"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            // data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            
            src={sec2} alt="Food Plate"  className="rounded-lg w-[500px] " />
          </div>
          <div className="lg:w-1/2 w-full pl-12">
            <h2 className="text-3xl text-gray-700 font-bold mb-6">Why People Choose us?</h2>
            <div className="space-y-6">
              {[
                { icon: <Clock className="w-6 h-6 text-[#FF6B6B]" />, title: "Convenient and Reliable", description: "Whether you dine in, take out, or order delivery, our service is always fast and reliable, making mealtime hassle-free." },
                { icon: <DollarSign className="w-6 h-6 text-[#FF6B6B]" />, title: "Variety of Options", description: "From hearty meals to light snacks, we offer a wide range of options to suit every taste and craving." },
                { icon: <ShoppingCart className="w-6 h-6 text-[#FF6B6B]" />, title: "Eat Burger", description: "Our burgers are grilled to perfection, with juicy patties and flavorful toppings that make every bite a delight." },
              ].map((item, index) => (
                <div key={index} className="flex min-w-[300px] items-start">
                  <div className="mr-4 bg-[#FFF0E5] p-2 rounded-full">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    </div>
  )
}

export default Section2
