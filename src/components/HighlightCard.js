import '../styles/HighlightCard.css';

function HighlightCard(props) {

  const highlight = props.highlight;

  return (
    <section className='highlight-card'>
      <div>
        <img className='highlight-img' src={highlight.img} />
      </div>
      <section className="highlight-content">
        <section className='highlight-text-header'>
          <p className='ll-card-title'>{highlight.name}</p>
          <p className='ll-highlight-text price'>${highlight.price}</p>
        </section>
        <p className='ll-paragraph-text description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
        <a href="/order-online" className='ll-a-button-text link'>Order a delivery</a>
      </section>
    </section>
  );
}

export default HighlightCard;