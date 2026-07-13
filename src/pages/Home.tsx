import { Navbar } from "../components/Navbar"
import { Hero } from "../components/Hero"
import { Pricing } from "../components/Pricing"
import { About } from "../components/About"
import { Contact } from "../components/Contact"

export const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Pricing />
    <About />
    <Contact />

    </>
  )
}
