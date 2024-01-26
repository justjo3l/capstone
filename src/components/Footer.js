import logo from '../assets/Logo.svg';

import LinkList from './LinkList';

import '../styles/Footer.css';

function Footer() {
    return (
        <footer>
          <div id="footer-logo-container">
            <img src={logo} alt="Little Lemon Logo" id="footer-logo" />
          </div>
          <section>
            <ul className='footer-nav-list'>
              <header className='list-header'>
                Links
              </header>
              <LinkList />
            </ul>
          </section>
          <section >
            <ul className='footer-info-list'>
              <header className='list-header'>
                Contact
              </header>
              <li>
                Address
              </li>
              <li>
                Phone
              </li>
              <li>
                Email
              </li>
            </ul>
          </section>
          <section>
            <ul className='footer-info-list'>
              <header className='list-header'>
                Social Media Links
              </header>
              <li>
                Address
              </li>
              <li>
                Phone
              </li>
              <li>
                Email
              </li>
            </ul>
          </section>
        </footer>
    );
}

export default Footer;