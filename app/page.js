import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SubBrands from '@/components/SubBrands'
import FoodsBeverages from '@/components/FoodsBeverages'
import MinesMinerals from '@/components/MinesMinerals'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SubBrands />
      <FoodsBeverages />
      <MinesMinerals />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
