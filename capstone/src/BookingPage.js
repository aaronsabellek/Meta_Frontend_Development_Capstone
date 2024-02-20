import BookingForm from './BookingForm.js';

function BookingPage({availableTimes, dispatch}) {

    return (
        <>
            <h1>Reservation</h1>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </>
    )
}

export default BookingPage;