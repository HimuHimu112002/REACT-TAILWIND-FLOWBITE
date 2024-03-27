import AgencyAbout from './components/AgencyAbout';
import CardItem from './components/CardItem';
import ClientSection from './components/ClientSection';
import Contact from './components/Contact';
import FooterComponents from './components/FooterComponents';
import HeroSection from './components/HeroSection';
import NavMenu from './components/NavMenu';
import PopularCourse from './components/PopularCourse';
function App() {
  return (
    <>
      <NavMenu/>
      <HeroSection/>
      <AgencyAbout/>
      <CardItem/>
      <Contact/>
      <PopularCourse/>
      <ClientSection/>
      <FooterComponents/>
    </>
  )
}

export default App
