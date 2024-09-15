"use client"
import Image from "next/image";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import background from "../assests/bg1.jpg"
import { NavbarDemo } from "../components/Nav";
import { useGSAP } from "@gsap/react";
import  FoodieLandingPage  from "../components/ui/Rep";


gsap.registerPlugin(useGSAP);
// import { span } from "framer-motion/client";

export default function Home() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

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
