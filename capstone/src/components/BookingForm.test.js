import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './BookingForm.js';

// set form arguments
const availableTimes = { timeSlots: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"] };
const currentDate = new Date().toISOString().split('T')[0];
const dispatchDate = jest.fn();
const dispatchEmail = jest.fn();
const submitForm = jest.fn();

test('Renders the BookingForm and checks for (in)valid user input', () => {
  render(
    <BookingForm
    availableTimes={availableTimes}
    currentDate={currentDate}
    dispatchDate={dispatchDate}
    dispatchEmail={dispatchEmail}
    submitForm={submitForm}
    />);

  // set form elements
  const dateInput = screen.getByLabelText(/Choose date/);
  const timeSelect = screen.getByLabelText(/Choose time/);
  const guestsInput = screen.getByLabelText(/Number of guests/);
  const occasionSelect = screen.getByLabelText(/Occasion/);
  const nameInput = screen.getByLabelText(/Name/);
  const emailInput = screen.getByLabelText(/Email/);
  const submitButton = screen.getByTestId(/submit_form/);

  // enter valid information
  fireEvent.change(dateInput, { target: { value: currentDate } });
  fireEvent.change(timeSelect, { target: { value: "17:00" } });
  fireEvent.change(guestsInput, { target: { value: "2" } });
  fireEvent.change(occasionSelect, { target: { value: "None" } });
  fireEvent.change(emailInput, { target: { value: "janedoe@email.com" } });
  fireEvent.change(nameInput, { target: { value:"Jane Doe" } });
  expect(submitButton).toBeEnabled();

  // submit button is disabled when user date is empty or in the past
  fireEvent.change(dateInput, { target: { value: "" } });
  expect(submitButton).toBeDisabled();

  fireEvent.change(dateInput, { target: { value: currentDate - 1 } });
  expect(submitButton).toBeDisabled();

  fireEvent.change(dateInput, { target: { value: currentDate } });

  // submit button is disabled when user time is empty or unavailable
  fireEvent.change(timeSelect, { target: { value: "" } });
  expect(submitButton).toBeDisabled();

  fireEvent.change(timeSelect, { target: { value: "17:30" } });
  expect(submitButton).toBeDisabled();

  fireEvent.change(timeSelect, { target: { value: "17:00" } });

  // submit button is disabled when guest number is empty, lower than 1 or higher than 10
  fireEvent.change(guestsInput, { target: { value: "" } });
  expect(submitButton).toBeDisabled();

  fireEvent.change(guestsInput, { target: { value: "0" } });
  expect(submitButton).toBeDisabled();

  fireEvent.change(guestsInput, { target: { value: "1" } });
  expect(submitButton).toBeEnabled();

  fireEvent.change(guestsInput, { target: { value: "11" } });
  expect(submitButton).toBeDisabled();

  fireEvent.change(guestsInput, { target: { value: "10" } });
  expect(submitButton).toBeEnabled();

  // submit button is disabled when user name is empty or more than 30 chars long
  fireEvent.change(nameInput, { target: { value:"" } });
  expect(submitButton).toBeDisabled();

  fireEvent.change(nameInput, { target: { value:"janedoejanedoejanedoejanedoejan" /*31 chars*/ } });
  expect(submitButton).toBeDisabled();

  fireEvent.change(nameInput, { target: { value:"janedoejanedoejanedoejanedoeja" /*30 chars*/ } });
  expect(submitButton).toBeEnabled();

  // submit button is disabled when user email is empty, more than 30 chars long or has no email format
  fireEvent.change(emailInput, { target: { value: "" } });
  expect(submitButton).toBeDisabled();

  fireEvent.change(emailInput, { target: { value: "janedoejanedoejanedoe@email.com" /*31 chars*/ } });
  expect(submitButton).toBeDisabled();

  fireEvent.change(emailInput, { target: { value: "janedoejanedoejanedo@email.com" /*30 chars*/ } });
  expect(submitButton).toBeEnabled();

  fireEvent.change(emailInput, { target: { value: "janedoeemail.com" } });
  expect(submitButton).toBeDisabled();

  fireEvent.change(emailInput, { target: { value: "janedoe@emailcom" } });
  expect(submitButton).toBeDisabled();

  fireEvent.change(emailInput, { target: { value: "janedoe@email.com" } });

  // form can be submitted
  fireEvent.click(submitButton);
  expect(submitForm).toHaveBeenCalled();
});