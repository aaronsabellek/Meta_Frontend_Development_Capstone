import BookingForm from './BookingForm.js';

function BookingPage(props) {

    return (
        <>
            <h1>Reservation</h1>
            <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} />
        </>
    )
}

export default BookingPage;