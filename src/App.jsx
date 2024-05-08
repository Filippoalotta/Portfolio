import Header from './assets/components/Header'
import Banner from './assets/components/Banner'
import Services from './assets/components/Services'
import Projects from './assets/components/Projects'
//import Pricing from './assets/components/Pricing'
import Assistance from './assets/components/Assistance'
import Contacts from './assets/components/Contacts'
import Footer from './assets/components/Footer'
import './assets/scss/App.scss'

function App() {

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
      <Projects></Projects>
      {/* <Pricing></Pricing> */}
      <Assistance></Assistance>
      <Contacts></Contacts>
      <Footer></Footer>
    </>
  )
}

export default App
