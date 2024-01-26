import '../App.css';

import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Main from '../components/Main';
import ReserveForm from '../components/ReserveForm';
import { fetchAPI, submitAPI } from '../data/fakeAPI';

import { useReducer } from 'react';

export const initializeTimes = () => {
  return fetchAPI(new Date());
}

export const updateTimes = (state, action) => {
  return fetchAPI(new Date(action.date));
};

function Reserve() {

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main>
        <ReserveForm availableTimesState={[availableTimes, dispatch]} submitForm={submitAPI}/>
      </Main>
      <Footer />
    </>
  );
}

export default Reserve;
