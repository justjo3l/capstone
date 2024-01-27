import '../App.css';

import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Main from '../components/Main';

import '../styles/ConfirmedReserve.css';

import { useNavigate } from 'react-router-dom';

function ConfirmedReserve() {

  const navigate = useNavigate();

  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main>
        <div id='confirmation-text-container'>
          <h1 id='confirmation-text'>Your reservation has been confirmed!</h1>
          <button className='ll-button' aria-label="On Click" onClick={() => navigate('/')}>Home</button>
        </div>
      </Main>
      <Footer />
    </>
  );
}

export default ConfirmedReserve;
