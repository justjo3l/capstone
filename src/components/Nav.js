import logo from '../assets/Logo.svg';

import '../styles/Nav.css';

import LinkList from './LinkList';

import { useNavigate } from 'react-router-dom';

function Nav() {

  const navigate = useNavigate();

  const onClick = () => {
    navigate('/');
  }

  return (
    <nav id="header-nav">
      <ul id="header-nav-list">
        <img src={logo} alt="Little Lemon Logo" id="header-logo" onClick={onClick}/>
        <LinkList />
      </ul>
    </nav>
  );
}

export default Nav;