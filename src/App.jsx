import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import SocialProof from "./components/SocialProof"


function App() {

  return (
    <main className="flex flex-col">
      <Header />
      <Hero />
      <Services />
      <SocialProof />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
