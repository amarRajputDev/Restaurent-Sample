"use client"

import dynamic from 'next/dynamic'
import { useEffect } from 'react';

const FoodieLandingPage = dynamic(() => import('../components/ui/Rep'), { ssr: false })

export default function Home() {
  useEffect(() => {
    // Move Lenis initialization inside useEffect
    import('lenis').then(({ default: Lenis }) => {
      const lenis = new Lenis()

      lenis.on('scroll', (e: any) => {
        console.log(e)
      })

      function raf(time: any) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    })
  }, []);

  return (
    <div>
      <FoodieLandingPage />
    </div>
  )
}
