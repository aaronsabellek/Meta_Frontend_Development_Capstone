import BookingForm from '../components/BookingForm.js';

function BookingPage({availableTimes, dispatchDate, submitForm, dispatchEmail}) {

    return (
        <div class="reservation content">
            <h1 class="green">Reservation</h1>
            <BookingForm availableTimes={availableTimes} dispatchDate={dispatchDate} submitForm={submitForm} dispatchEmail={dispatchEmail} />
        </div>
    )
}

export default BookingPage;