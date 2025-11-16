import Header from "./components/Hero";
import Section from "./components/Section"; 
import NewSection from "./components/NewSection";
import Gallery from "./components/Gallery";
import New from "./components/New";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App bg-gray-900 min-h-screen text-white">
      <Header />
      <Section />
      <NewSection />
      <Gallery />
      <New />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;