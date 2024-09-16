"use client"

import dynamic from 'next/dynamic'
import Lenis from 'lenis';
import { useEffect } from 'react';


const FoodieLandingPage = dynamic(() => import('../components/ui/Rep'), { ssr: false })



export default function Home() {
  const lenis = new Lenis()
useEffect(() => {

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time: any) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
}, []);
  return (
    <div>
      <FoodieLandingPage />
    </div>
  )
}
