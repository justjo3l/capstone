import '../styles/Highlights.css';

import { highlights } from '../data/data.js';

import HighlightCard from './HighlightCard';

function Highlights() {
    return (
      <section id='highlights'>
        <div id='highlights-container'>
          <header id='highlights-header'>
            <h1 className='ll-display-title'>This weeks specials!</h1>
            <button className='ll-button'>Online Menu</button>
          </header>
          <section id='highlights-list'>
            {highlights.map((highlight) => {
              return <HighlightCard highlight={highlight} key={highlight.name}/>
            })}
          </section>
        </div>
      </section>
    );
}

export default Highlights;