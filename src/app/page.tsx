"use client"

import { useEffect} from "react";
import Lenis from "lenis";
import gsap from "gsap";

import { useGSAP } from "@gsap/react";
import  FoodieLandingPage  from "../components/ui/Rep";


gsap.registerPlugin(useGSAP);
// import { span } from "framer-motion/client";

export default function Home() {


  useEffect(() => {
    // Lenis smooth scroll setup
    const lenis = new Lenis({
      duration: 0.9,
      smoothWheel: true,
    })

    lenis.on('scroll', (e) => {
      console.log(e)
    })

    function raf(time: number) {
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
