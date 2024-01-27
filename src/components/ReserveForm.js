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

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [formData, setFormData] = useState({
    date: tomorrow.toISOString().slice(0, 10),
    time: '17:00',
    guests: 1,
    occasion: 'Birthday'
  });

  const navigate = useNavigate();

  const validateDate = (date) => {
    const today = new Date();
    const dateObj = new Date(date);
    if (dateObj < today) {
      return false;
    }
    return true;
  };

  const validateGuests = (guests) => {
    if (guests < 1 || guests > 10) {
      return false;
    }
    return true;
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (validateDate(formData.date) && validateGuests(formData.guests)) {
      if (props.submitForm(formData)) {
        navigate('/confirmed-reservation');
      }
    }
  }

  return (
    <main>
      <form id="reserve-form" onSubmit={onFormSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" role="res-date" className={validateDate(formData.date) ? "" : "error-state"} defaultValue={formData.date} onChange={(e) => {
          setFormData({...formData, date: e.target.value})
          dispatch({date: e.target.value});
          }}/>
        {!validateDate(formData.date) && <p className='error'>Invalid Date</p>}
        <label htmlFor="res-time">Choose time</label>
        <div>
          <span>Available times:</span>
          <ul className='time-table'>
            {availableTimes && availableTimes.map((time, index) => (
              <li key={'time-label-' + index.toString()}>{time}</li>
            ))}
          </ul>
        </div>
        <select id="res-time" defaultValue={formData.time} onChange={(e) => {setFormData({...formData, time: e.target.value})}}>
          {availableTimes && availableTimes.map((time, index) => (
            <option key={'time-' + index.toString()}>{time}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" role="res-guests" className={validateGuests(formData.guests) ? "" : "error-state"} defaultValue={formData.guests} onChange={(e) => setFormData({...formData, guests: e.target.value})}/>
        {!validateGuests(formData.guests) && <p className='error'>Invalid Number of Guests</p>}
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" defaultValue={formData.occasion} onChange={(e) => {setFormData({...formData, occasion: e.target.value})}}>
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