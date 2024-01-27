import links from '../data/data.js';

import '../styles/LinkList.css';

import { useNavigate } from 'react-router-dom';

function LinkList() {

  const navigate = useNavigate();

  return (
    <>
      {
        links.map((link) => {
          return (
            <li key={link.label}>
              <button aria-label="On Click" onClick={() => {navigate(link.url);}} className='link'>{link.label}</button>
            </li>
          )
        })
      }
    </>
  );
}

export default LinkList;