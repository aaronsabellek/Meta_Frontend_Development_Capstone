import { useState } from "react";

function BookingForm(props) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Table reserved!");
        clearForm();
    }

    const clearForm = () => {
        setDate("");
        setTime("");
        setGuests("");
        setOccasion("");
    }

    return (
        <form onSubmit={handleSubmit} class="resgistration_form">
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={(e) => {
                    setDate(e.target.value);
                    props.dispatch(e.target.value);
                }}
            />
            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={time}
                onChange={(e) => {
                    setTime(e.target.value)
                }}
            >
                <option value="">Select a time</option>
                {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                value={guests}
                onChange={(e) => {
                    setGuests(e.target.value)
                }}
                placeholder="1"
                min="1"
                max="10"
                id="guests"
            />
            <label htmlFor="occasion">Occasion</label>
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
            <input type="submit" disabled={!date || !guests || guests < 1 || guests > 10} value="Make Your reservation" />
        </form>
    )
}

export default BookingForm;