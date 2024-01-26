import links from '../data/data.js';

import '../styles/LinkList.css';

function LinkList() {
  return (
    <>
      {
        links.map((link) => {
          return (
            <li key={link.label}>
              <a href={link.url} className='link'>{link.label}</a>
            </li>
          )
        })
      }
    </>
  );
}

export default LinkList;