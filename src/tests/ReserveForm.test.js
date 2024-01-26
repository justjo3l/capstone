import { render, screen } from '@testing-library/react';
import ReserveForm from '../components/ReserveForm';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

test('renders ReserveForm component', () => {
    render(
        <Router>
            <ReserveForm />
        </Router>
    );
    const formElement = screen.getByText('Choose date');
    expect(formElement).toBeInTheDocument();
});