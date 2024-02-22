import { useState } from "react";

function BookingForm({availableTimes, dispatch, submitForm}) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm(e);
    }

    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1);

    return (
        <form onSubmit={handleSubmit} className="resgistration_form">
            <label
                htmlFor="res-date"
                class="required"
                aria-label="On Click"
            >
                Choose date
            </label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={(e) => {
                    setDate(e.target.value);
                    dispatch(e.target.value);
                }}
                required
                min={new Date().toISOString().split('T')[0]}
            />
            <label
                htmlFor="res-time"
                class="required"
                aria-label="On Click"
            >
                Choose time
            </label>
            <select
                id="res-time"
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
                class="required"
                aria-label="On Click"
            >
                Number of guests
            </label>
            <input
                type="number"
                value={guests}
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
            >
                Occasion
            </label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => {
                    setOccasion(e.target.value)
                }}
            >
                <option value="none">None</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
            <p>Fields with <em class="red">*</em> are required</p>
        </form>
    )
}

export default BookingForm;