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
              <a onClick={() => {navigate(link.url);}} className='link'>{link.label}</a>
            </li>
          )
        })
      }
    </>
  );
}

export default LinkList;