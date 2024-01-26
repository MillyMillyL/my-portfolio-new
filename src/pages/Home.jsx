import About from '../components/About';
import BackToTop from '../components/BackToTop';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../layout/Header';
import Projects from '../layout/Projects';

function Home() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Contact />
      <BackToTop />
      <Footer />
    </div>
  );
}

export default Home;
