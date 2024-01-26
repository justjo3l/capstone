import '../styles/Hero.css';

import heroImage from '../assets/restaurantfood.jpg';

import { useNavigate } from 'react-router-dom';

function Hero() {

  const navigate = useNavigate();

  const onClick = () => {
    navigate('/reserve-a-table');
  }

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
          <button className='ll-button' onClick={onClick}>Reserve a Table</button>
        </section>
        <div id='hero-image-container'>
          <img src={heroImage} id='hero-image' alt="A display of Little Lemon's Food"/>
        </div>
      </section>
  );
}

export default Hero;