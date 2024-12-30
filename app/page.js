import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FocusOnDesign from '@/components/FocusOnDesign';
import About from '@/components/About';
import Services from '@/components/Services';
import BuyADomain from '@/components/BuyADomain';
import Testimonials from '@/components/Testimonials';
import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <main>
        <Navbar/>
        <Hero />
        <About />
        <FocusOnDesign />
        <BuyADomain />
        <Services />
        <Testimonials />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
}
