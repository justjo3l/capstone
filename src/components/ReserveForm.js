import '../styles/ReserveForm.css';

import { availableOccasions } from '../data/data';

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

function ReserveForm(props) {

  let availableTimes = undefined;
  let dispatch = undefined;

  if (props && props.availableTimesState) {
    [availableTimes, dispatch] = props.availableTimesState;
  }

  const [formData, setFormData] = useState({});

  const navigate = useNavigate();

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    props.submitForm(formData);
    if (true) {
      navigate('/confirmed-reservation');
    }
  }

  return (
    <main>
      <form id="reserve-form" onSubmit={onFormSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" onChange={(e) => {
          setFormData({...formData, date: e.target.value})
          dispatch({date: e.target.value});
          }}/>
        <label htmlFor="res-time">Choose time</label>
        <div>
          <span>Available times:</span>
          <ul className='time-table'>
            {availableTimes && availableTimes.map((time, index) => (
              <li key={'time-label-' + index.toString()}>{time}</li>
            ))}
          </ul>
        </div>
        <select id="res-time" onChange={(e) => {setFormData({...formData, time: e.target.value})}}>
          {availableTimes && availableTimes.map((time, index) => (
            <option key={'time-' + index.toString()}>{time}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={(e) => setFormData({...formData, guests: e.target.value})}/>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" onChange={(e) => {setFormData({...formData, occasion: e.target.value})}}>
          {availableOccasions.map((occasion, index) => (
            <option key={'occasion-' + index.toString()}>{occasion.occasion}</option>
          ))}
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </main>
  );
}

export default ReserveForm;