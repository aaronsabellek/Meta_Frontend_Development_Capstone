import BookingForm from '../components/BookingForm.js';

function BookingPage({availableTimes, dispatch, submitForm, dispatchEmail}) {

    return (
        <div class="bg-white">
            <div class="reservation content">
                <h1 class="green">Reservation</h1>
                <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} dispatchEmail={dispatchEmail} />
            </div>
        </div>
    )
}

export default BookingPage;