import Carousel from './components/carousel/carousel'
import Navbar from './components/Header/navbar'
import Content from './components/content/content'
import Summary from './components/summary/summary'
import Specification from './components/Specifications/specifications'
import Footer from './components/Footer/Footer'
import Email from './components/email/email'
function App() {
  return (
    <div>
      <Navbar/>
      <Summary/>
      <Content/>
      <Carousel/>
      <Specification/>
      <Email/>
      <Footer/>
    </div>
  );
}

export default App;
