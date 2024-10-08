

import AOS from 'aos';
import 'aos/dist/aos.css';
import Nav from '../Nav'
import Page1 from '../Page1'
import Feature from '../Feature'
import Section2 from '../Section2'
import Section3 from '../Section3'
import Section4 from '../Section4'
import Section5 from '../Section5'
import Footer from '../Footer'
AOS.init();

export default function FoodieLandingPage() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
   
    <div className="bg-[#FFF8F0] px-5 md:px-10 lg:px-20 min-h-screen">
     <Nav/>

      <main>
        <Page1/>
        <Feature/>

        

      <Section2/>

    <Section3/>

       <Section4 />

        <Section5 />
      </main>

     
    </div>
    <Footer/>
    </>
  )
}