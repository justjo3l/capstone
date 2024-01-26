import '../styles/TestimonialCard.css';

function TestimonialCard(props) {

  const testimonial = props.testimonial;

  return (
    <section className='testimonial-card'>
      <div className='testimonial-container'>
        <h4 className='ll-card-title testimonial-rating'>{testimonial.rating}</h4>
        <div className='testimonial-content'>
          <img className='testimonial-img' src={process.env.PUBLIC_URL + '/user.png'} alt={testimonial.name}/>
          <h4 className='testimonial-name'>{testimonial.name}</h4>
        </div>
        <p className='testimonial-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </section>
  );
}

export default TestimonialCard;