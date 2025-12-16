import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import WhyChooseUs from './pages/WhyChooseUs';
import ServicesParent from './pages/Services/ServicesParent';
import FramingSiding from './pages/Services/FramingSiding';
import DoorsWindows from './pages/Services/DoorsWindows';
import ElectricalPlumbing from './pages/Services/ElectricalPlumbing';
import HVAC from './pages/Services/HVAC';
import FlooringDrywall from './pages/Services/FlooringDrywall';
import Painting from './pages/Services/Painting';
import Roofing from './pages/Services/Roofing';
import DecksCarports from './pages/Services/DecksCarports';
import ConcreteMasonry from './pages/Services/ConcreteMasonry';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/services" element={<ServicesParent />} />
            <Route path="/services/framing-siding" element={<FramingSiding />} />
            <Route path="/services/doors-windows" element={<DoorsWindows />} />
            <Route path="/services/electrical-plumbing" element={<ElectricalPlumbing />} />
            <Route path="/services/hvac" element={<HVAC />} />
            <Route path="/services/flooring-drywall" element={<FlooringDrywall />} />
            <Route path="/services/painting" element={<Painting />} />
            <Route path="/services/roofing" element={<Roofing />} />
            <Route path="/services/decks-carports" element={<DecksCarports />} />
            <Route path="/services/concrete-masonry" element={<ConcreteMasonry />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

