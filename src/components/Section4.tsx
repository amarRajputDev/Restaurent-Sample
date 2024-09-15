import Image from 'next/image'
import React from 'react'
import profile from '../assests/edit.jpg'
import chef from '../assests/chef.jpg'

function Section4() {
  return (
    <div>
       <section className="container mx-auto lg:py-12 py-8 px-5 flex lg:flex-row flex-col-reverse items-center bg-white rounded-lg shadow-lg">
          <div className="lg:w-1/2 w-full p-8">
            <h2 className="text-3xl text-gray-700 font-bold mb-4">Customer Feedback</h2>
            <p className="mb-6 text-gray-600">
              I recently dined at your restaurant and wanted to share my experience. The food was absolutely delicious, and I was impressed by the freshness of the ingredients. Each dish bursted with flavor, and the portion sizes were perfect. The service was quick and efficient, and the staff was incredibly friendly and welcoming.
            </p>
            <div className="flex items-center">
              <Image src={profile} alt="Tayyab Sohail" width={50} height={50} className="rounded-full mr-4" />
              <div>
                <p className="font-semibold text-gray-700 ">Amar Lodhi</p>
                <p className="text-sm text-gray-600">UX/UI Designer</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full flex justify-center items-center">
            <Image src={chef} alt="Chef" className="rounded-lg w-[400px] " />
          </div>
        </section>
    </div>
  )
}

export default Section4
