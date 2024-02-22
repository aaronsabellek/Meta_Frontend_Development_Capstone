import BookingForm from './BookingForm.js';

function BookingPage({availableTimes, dispatch, submitForm}) {

    return (
        <>
            <h1>Reservation</h1>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
        </>
    )
}

export default BookingPage;