
import './App.css';
import Header from './MyComponents/Header';
import './variables.css';
import './responsive.css';
import Carousel from './MyComponents/Carousel';
import Skills from './MyComponents/Skills';
import Timeline from './MyComponents/Timeline';
import Pricing from './MyComponents/Pricing'
import NewsCards from './MyComponents/News-cards';
import Footer from './MyComponents/Footer';

function App() {
  return ( 
    <> 
    <Header/>
    <Carousel/>
    <Skills/>
    <Timeline/>
    <Pricing/>
    <NewsCards/>
    <Footer/>
    </>
  );
}

export default App;
