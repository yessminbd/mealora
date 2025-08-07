
import Header from './components/Header.jsx'
import ButtonGradient from './assets/icons/buttonGradient.jsx'
import Hero from './components/Hero.jsx'
import Benefits from './components/Benefits.jsx'
import Services from './components/Services.jsx'
import Menu from './components/Menu.jsx'
import Pricing from './components/Pricing.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  
  return (
    <>
    <div className='pt-[4.75rem] lg:[5.25rem] overflow-hidden'> 
    <Header/>
    <Hero/>
    <Benefits/>
    <Services/>
    <Menu/>
    <Pricing/>
    <Footer/>
    </div>
    <ButtonGradient/>
    </>
  )
}

export default App

