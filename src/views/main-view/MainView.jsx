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
          <Route path='/cf-portfolio' element={<HomeView />} />
          <Route path='/cf-portfolio/about' element={<AboutView />} />
          <Route path='/cf-portfolio/work' element={<WorkView />} />
          <Route path='/cf-portfolio/contact' element={<ContactView />} />
        </Routes>
        <Footer />
      </AppContainer>
    </BrowserRouter>
  )
}

export default MainView