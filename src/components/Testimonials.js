import '../styles/Testimonials.css';

import { testimonials } from '../data/data.js';

import TestimonialCard from './TestimonialCard';

function Testimonials() {
  return (
    <section className='testimonials'>
      <h1 className='ll-display-title'>Testimonials</h1>
      <section id='testimonials-list'>
        {testimonials.map((testimonial) => {
          return <TestimonialCard testimonial={testimonial} key={testimonial.name}/>
        })}
      </section>
    </section>
  );
}

export default Testimonials;