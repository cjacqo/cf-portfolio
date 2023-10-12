import './styles.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AppContainer } from "../../components/container/Container"
import Navbar from "../../components/navbar/Navbar"
import Footer from '../../components/footer/Footer'
import HomeView from '../home-view/HomeView'
import AboutView from '../about-view/AboutView'
import WorkView from '../work-view/WorkView'
import ContactView from '../contact-view/ContactView'

const MainView = () => {
  return (
    <BrowserRouter>
      <AppContainer>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomeView />} />
          <Route path='/about' element={<AboutView />} />
          <Route path='/work' element={<WorkView />} />
          <Route path='/contact' element={<ContactView />} />
        </Routes>
        <Footer />
      </AppContainer>
    </BrowserRouter>
  )
}

export default MainView