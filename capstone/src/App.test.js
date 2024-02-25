import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm.js';

const availableTimes = {timeSlots: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]};

test('Renders the BookingForm label', () => {
  render(<BookingForm availableTimes={availableTimes} />);
  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
})
