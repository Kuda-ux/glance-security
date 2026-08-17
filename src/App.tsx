import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import TrustBar from './sections/TrustBar'
import About from './sections/About'
import Services from './sections/Services'
import VisualGrid from './sections/VisualGrid'
import WhyGSS from './sections/WhyGSS'
import Industries from './sections/Industries'
import FeatureBanner from './sections/FeatureBanner'
import CTA from './sections/CTA'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gss-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <VisualGrid />
        <WhyGSS />
        <Industries />
        <FeatureBanner />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
