import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

function Section5() {
  return (
    <div>
      <section className="container mx-auto py-12">
          <h2 className="text-3xl text-gray-700 font-bold mb-6 text-center">Join Our Newsletter</h2>
          <p className="text-center mb-8 text-gray-600">To stay up-to-date with our latest updates, exclusive offers, and more.</p>
          <div className="flex w-full justify-center">
            <div className="lg:w-1/2 w-full flex">
              <Input type="email" placeholder="Enter your email" className="rounded-r-none" />
              <Button className="bg-[#FF6B6B] hover:bg-[#FF5252] rounded-l-none">Subscribe</Button>
            </div>
          </div>
            </section>
    </div>
  )
}

export default Section5
