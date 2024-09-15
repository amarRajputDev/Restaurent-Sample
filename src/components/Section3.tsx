import React from 'react'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { Button } from './ui/button'
import bf from '../assests/bf.png'
import bf2 from '../assests/bf2.png'
import hf from '../assests/hf.png'
import cookies from '../assests/cookies.png'
import laddu from '../assests/laddu.png'
import cake from '../assests/cake.png'

function Section3() {
  return (
    <div>
          <section className="container mx-auto py-12">
          <h2 className="text-3xl text-gray-700 font-bold mb-6 text-center">Our best Seller Dishes🔥🔥</h2>
          <p className="text-center mb-8 text-gray-600">Our fresh garden salad is a light and refreshing option. It features a mix of crisp lettuce, juicy tomatoes all tossed in your choice of dressing.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { image: bf, title: "Breakfast Food", price: "$230" },
              { image: hf, title: "Health Breakfast", price: "$230" },
              { image: bf2, title: "Breakfast Food", price: "$230" },
              { image: cookies, title: "Cookies", price: "$230" },
              { image: laddu, title: "Laddu", price: "$230" },
              { image: cake, title: "Cake", price: "$230" },
            ].map((item, index) => (
              <Card key={index}
              data-aos="fade-up"
              // data-aos-offset="200"
              // data-aos-delay="50"
              data-aos-duration="500"
              // data-aos-easing="ease-in-out"
              // data-aos-mirror="true"
              // data-aos-once="false"
              // data-aos-anchor-placement="top-center"
              >
                <CardContent className="p-4 h-full" >
                  <div className='flex justify-center items-center h-[75%] '>
                  <Image src={item.image} alt={item.title} width={200} height={200} className="rounded-lg mb-4" />
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{item.title}</h3>
                    <span className="font-bold text-[#FF6B6B]">{item.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <Button size="sm" className="bg-[#FF6B6B] hover:bg-[#FF5252]">Buy Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
    </div>
  )
}

export default Section3
