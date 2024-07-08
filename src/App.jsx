import './App.css'
import Doctors from './components/Doctors'
import Equipment from './components/Equipment'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Charity from './components/Charity'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Services/>
      <Doctors/>
      <Equipment/>
      <Charity/>
      <Reviews/>
      <Contact/>
      <Footer />
    </>
  )
}

export default App
