import { useState } from "react";

function BookingForm({ availableTimes, dispatchDate, submitForm, dispatchEmail }) {

    // set states for form
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    // submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm(e);
    }

    // set current date to compare with user date
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1);

    return (
        <form
            onSubmit={ handleSubmit }
            className="reg_form"
        >
            <h2 className="block">Reservation details</h2>
            <label
                htmlFor="res-date"
                className="required reg_block"
                aria-label="On Click"
            >
                Choose date
            </label>
            <input
                type="date"
                id="res-date"
                className="reg_block input"
                value={date}
                onChange={(e) => {
                    setDate(e.target.value);
                    dispatchDate(e.target.value);
                }}
                required
                min={new Date().toISOString().split('T')[0]}
            />
            <label
                htmlFor="res-time"
                className="required reg_block"
                aria-label="On Click"
            >
                Choose time
            </label>
            <select
                id="res-time"
                className="reg_block select"
                value={time}
                onChange={(e) => {
                    setTime(e.target.value)
                }}
                required
            >
                <option value="">Select a time</option>
                {availableTimes.timeSlots.map(time => {
                    return (
                        <option id="res-time" key={time}>
                            {time}
                        </option>
                    )
                })}
            </select>
            <label
                htmlFor="guests"
                className="required reg_block"
                aria-label="On Click"
            >
                Number of guests
            </label>
            <input
                type="number"
                value={guests}
                className="reg_block input"
                onChange={(e) => {
                    setGuests(e.target.value)
                }}
                placeholder="2"
                min="1"
                max="10"
                id="guests"
                required
            />
            <label
                htmlFor="occasion"
                aria-label="On Click"
                className="reg_block"
            >
                Occasion
            </label>
            <select
                id="occasion"
                className="reg_block select"
                value={occasion}
                onChange={(e) => {
                    setOccasion(e.target.value)
                }}
            >
                <option value="none">None</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
            </select>
            <h2 className="reg_block">Contact details</h2>
            <label
                htmlFor="name"
                aria-label="On Click"
                className="reg_block required"
            >
                Name
            </label>
            <input
                type="text"
                value={name}
                className="reg_block input"
                onChange={(e) => {
                    setName(e.target.value)
                }}
                placeholder="Name"
                min="2"
                max="30"
                id="name"
                required
            />
            <label
                htmlFor="email"
                aria-label="On Click"
                className="reg_block required"
            >
                Email
            </label>
            <input
                type="email"
                value={email}
                className="reg_block input"
                onChange={(e) => {
                    setEmail(e.target.value)
                    dispatchEmail(e.target.value);
                }}
                placeholder="Email"
                id="email"
                required
            />
            <p className="reg_block input">Fields with <em className="yellow">*</em> are required</p>
            <input
                id="submit_form"
                data-testid="submit_form"
                type="submit"
                className="reg_block button"
                value="Make Your reservation"
            />
        </form>
    )
}

export default BookingForm;