import '../styles/About.css';

import image1 from '../assets/about1.jpg';
import image2 from '../assets/about2.jpg';

function About() {
    return (
      <section className='about'>
        <section id='about-content'>
          <section>
            <h1 className='ll-display-title' id='about-title'>Little Lemon</h1>
            <h3 className='ll-sub-title' id='about-subtitle'>Chicago</h3>
          </section>
          <section>
            <p className='ll-lead-text' id='about-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className='ll-lead-text' id='about-description'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </section>
        </section>
        <div>
          <img className='about-img' id='img1' src={image1}/>
          <img className='about-img' id='img2' src={image2}/>
        </div>
      </section>
    );
}

export default About;