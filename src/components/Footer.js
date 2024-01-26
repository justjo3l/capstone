import logo from '../assets/Logo.svg';

function Footer() {
    return (
        <footer>
          <div>
            <img src={logo} alt="Little Lemon Logo" />
          </div>
          <section>
            <header>
              Doormat Navigation
            </header>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Menu</a>
              </li>
              <li>
                <a href="/">Reservations</a>
              </li>
              <li>
                <a href="/">Order Online</a>
              </li>
              <li>
                <a href="/">Login</a>
              </li>
            </ul>
          </section>
          <section>
            <header>
              Contact
            </header>
            <ul>
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
            <header>
              Social Media Links
            </header>
            <ul>
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