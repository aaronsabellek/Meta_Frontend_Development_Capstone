import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm.js';

const availableTimes = {timeSlots: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]};
const submitData = jest.fn();

test('Renders the BookingForm label', () => {
  render(
    <BookingForm
      availableTimes={ availableTimes }
      submitData={ submitData }
    />);
  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();

  const dateInput = screen.getByLabelText(/Choose date/);
  const timeSelect = screen.getByLabelText(/Choose time/);
  const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
  const occasionSelect = screen.getByLabelText(/Occasion/);
  const submitButton = screen.getByTestId('submit_form');

  expect(dateInput).toBeInTheDocument();
  expect(timeSelect).toBeInTheDocument();
  expect(numberOfGuestsInput).toBeInTheDocument();
  expect(occasionSelect).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
})