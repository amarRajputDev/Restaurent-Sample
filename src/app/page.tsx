"use client"

import dynamic from 'next/dynamic'

const FoodieLandingPage = dynamic(() => import('../components/ui/Rep'), { ssr: false })

export default function Home() {
  return (
    <div>
      <FoodieLandingPage />
    </div>
  )
}
