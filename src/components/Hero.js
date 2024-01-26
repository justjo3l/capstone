import '../styles/Hero.css';

import heroImage from '../assets/restaurantfood.jpg';

function Hero() {
    return (
        <section className='hero-section'>
          <section className='hero-text'>
            <div>
              <h1 className='ll-display-title'>Little Lemon</h1>
              <h3 className='ll-sub-title'>Chicago</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <button className='ll-button'>Reserve a Table</button>
          </section>
          <div id='hero-image-container'>
            <img src={heroImage} id='hero-image' />
          </div>
        </section>
    );
}

export default Hero;