import BookingForm from '../components/BookingForm.js';

function BookingPage({ availableTimes, dispatchDate, submitForm, dispatchEmail }) {
    return (
        <div className="content">
            <h1>Reservation</h1>
            <BookingForm
                availableTimes={ availableTimes }
                dispatchDate={ dispatchDate }
                submitForm={ submitForm }
                dispatchEmail={ dispatchEmail }
            />
        </div>
    )
}

export default BookingPage;