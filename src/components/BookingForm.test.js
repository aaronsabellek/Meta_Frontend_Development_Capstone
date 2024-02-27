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
  const date = screen.getByLabelText(/Choose date/);
  const time = screen.getByLabelText(/Choose time/);
  const guests = screen.getByLabelText(/Number of guests/);
  const occasion = screen.getByLabelText(/Occasion/);
  const name = screen.getByLabelText(/Name/);
  const email = screen.getByLabelText(/Email/);
  const submit = screen.getByTestId(/submit_form/);

  // enter valid information
  fireEvent.change(date, { target: { value: currentDate } });
  fireEvent.change(time, { target: { value: "17:00" } });
  fireEvent.change(guests, { target: { value: "2" } });
  fireEvent.change(occasion, { target: { value: "None" } });
  fireEvent.change(name, { target: { value:"Jane Doe" } });
  fireEvent.change(email, { target: { value: "janedoe@email.com" } });
  expect(submit).toBeEnabled();

  // submit button is disabled when user date is empty or in the past
  fireEvent.change(date, { target: { value: "" } });
  expect(submit).toBeDisabled();

  fireEvent.change(date, { target: { value: currentDate - 1 } });
  expect(submit).toBeDisabled();

  fireEvent.change(date, { target: { value: currentDate } });

  // submit button is disabled when user time is empty or unavailable
  fireEvent.change(time, { target: { value: "" } });
  expect(submit).toBeDisabled();

  fireEvent.change(time, { target: { value: "17:30" } });
  expect(submit).toBeDisabled();

  fireEvent.change(time, { target: { value: "17:00" } });

  // submit button is disabled when guest number is empty, lower than 1 or higher than 10
  fireEvent.change(guests, { target: { value: "" } });
  expect(submit).toBeDisabled();

  fireEvent.change(guests, { target: { value: "0" } });
  expect(submit).toBeDisabled();

  fireEvent.change(guests, { target: { value: "1" } });
  expect(submit).toBeEnabled();

  fireEvent.change(guests, { target: { value: "11" } });
  expect(submit).toBeDisabled();

  fireEvent.change(guests, { target: { value: "10" } });
  expect(submit).toBeEnabled();

  // submit button is disabled when user name is empty or more than 30 chars long
  fireEvent.change(name, { target: { value:"" } });
  expect(submit).toBeDisabled();

  fireEvent.change(name, { target: { value:"janedoejanedoejanedoejanedoejan" /*31 chars*/ } });
  expect(submit).toBeDisabled();

  fireEvent.change(name, { target: { value:"janedoejanedoejanedoejanedoeja" /*30 chars*/ } });
  expect(submit).toBeEnabled();

  // submit button is disabled when user email is empty, more than 30 chars long or has no email format
  fireEvent.change(email, { target: { value: "" } });
  expect(submit).toBeDisabled();

  fireEvent.change(email, { target: { value: "janedoejanedoejanedoe@email.com" /*31 chars*/ } });
  expect(submit).toBeDisabled();

  fireEvent.change(email, { target: { value: "janedoejanedoejanedo@email.com" /*30 chars*/ } });
  expect(submit).toBeEnabled();

  fireEvent.change(email, { target: { value: "janedoeemail.com" } });
  expect(submit).toBeDisabled();

  fireEvent.change(email, { target: { value: "janedoe@emailcom" } });
  expect(submit).toBeDisabled();

  fireEvent.change(email, { target: { value: "janedoe@email.com" } });

  // form can be submitted
  fireEvent.click(submit);
  expect(submitForm).toHaveBeenCalled();
});