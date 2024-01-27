import Reserve, { initializeTimes, updateTimes } from '../pages/Reserve';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';

test('tests initializeTimes function', () => {
    const times = initializeTimes();
    expect(times).not.toBeNull();
});

test('tests updateTimes function', () => {
    const times = initializeTimes();
    const action = { date: '2021-07-01' };
    const updatedTimes = updateTimes(times, action);
    expect(updatedTimes).not.toStrictEqual(times);
});

test('renders ReserveForm component with date error', () => {
    render(
        <Router>
            <Reserve />
        </Router>
    );
    let dateInput = screen.getByRole('res-date');
    userEvent.type(dateInput, '2020-01-01');
    let dateError = screen.getByText('Invalid Date');
    expect(dateError).toBeInTheDocument();
});

test('renders ReserveForm component with no error', () => {
    render(
        <Router>
            <Reserve />
        </Router>
    );
    let dateInput = screen.getByRole('res-date');
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    userEvent.type(dateInput, tomorrow.toISOString().slice(0, 10));
    let dateError = screen.queryByText('Invalid Date');
    expect(dateError).toBeNull();
    let guestsError = screen.getByRole('res-guests');
    userEvent.type(guestsError, 5);
    guestsError = screen.queryByText('Invalid Number of Guests');
    expect(guestsError).toBeNull();
});

test('renders ReserveForm component with guests error', () => {
    render(
        <Router>
            <Reserve />
        </Router>
    );
    let guestsInput = screen.getByRole('res-guests');
    userEvent.type(guestsInput, '11');
    let guestsError = screen.getByText('Invalid Number of Guests');
    expect(guestsError).toBeInTheDocument();
});