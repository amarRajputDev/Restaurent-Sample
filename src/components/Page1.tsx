import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import background from "../assests/bg1.jpg"

import Image from 'next/image';
import { Button } from './ui/button';
import { Clock, MapPin, Star } from 'lucide-react';

AOS.init();

function Page1() {
  return (
    <div >
       <section className="container mx-auto py-12 flex md:flex-col-reverse flex-col gap-20 lg:flex-row  items-center">
          <div className="w-full lg:w-1/2">
            <h1 className="text-5xl text-gray-700 font-bold mb-4">
              Desire <span className="bg-[#FFA41B] text-white px-2 rounded">Food</span><br />
              for Your Taste
            </h1>
            <p className="mb-6 text-gray-600">
              Food is what we eat to stay alive and healthy. It comes in many different forms and flavors, from fruits and vegetables to meats and grains.
            </p>
            <Button className="bg-[#FF6B6B] hover:bg-[#FF5252]">Order Now</Button>
            <div className="flex items-center mt-6">
              <Image src={background} alt="User" width={50} height={50} className="rounded-full mr-4" />
              <div>
                <p className="font-semibold text-gray-700">Ali Ahmad</p>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">4.9 | 1.5k reviews</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 ml-20  relative">
            <Image
            data-aos="fade-up"
            // data-aos-offset="200"
            // data-aos-delay="50"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            // data-aos-mirror="true"
            // data-aos-once="false"
            data-aos-anchor-placement="top-center"
            src={background} alt="Food" width={600} height={600} className="rounded-lg hidden md:block " />
            <div className="absolute bottom-4 right-4 bg-[#FFA41B] text-white p-2 rounded-lg flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>Delivery in 30 min</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-2 rounded-lg shadow-lg flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-[#FF6B6B]" />
              <span className='text-gray-600'>Location: 2.5 km</span>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Page1
