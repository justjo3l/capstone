import logo from '../assets/Logo.svg';

import '../styles/Nav.css';

import LinkList from './LinkList';

function Nav() {
    return (
        <nav id="header-nav">
          <ul id="header-nav-list">
            <img src={logo} alt="Little Lemon Logo" id="header-logo" />
            <LinkList />
          </ul>
        </nav>
    );
}

export default Nav;