import '../App.css';

import Header from '../components/Header';
import Nav from '../components/Nav';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Testimonials from '../components/Testimonials';
import About from '../components/About';

function Home() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main>
        <section className='home-section'>
          <Hero />
          <Highlights />
          <Testimonials />
          <About />
        </section>
      </Main>
      <Footer />
    </>
  );
}

export default Home;
