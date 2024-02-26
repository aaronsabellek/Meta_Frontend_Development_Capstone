import BookingForm from '../components/BookingForm.js';

function BookingPage(
    {
        availableTimes,
        dispatchDate,
        dispatchEmail,
        submitForm
    }
) {
    return (
        <div className="content">
            <h1>Reservation</h1>
            <BookingForm
                availableTimes={ availableTimes }
                dispatchDate={ dispatchDate }
                dispatchEmail={ dispatchEmail }
                submitForm={ submitForm }
            />
        </div>
    )
}

export default BookingPage;