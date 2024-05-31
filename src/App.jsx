import './App.css'
import Doctors from './components/Doctors'
import Equipment from './components/Equipment'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Services/>
      <Doctors/>
      <Equipment/>
    </>
  )
}

export default App
