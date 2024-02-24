

function ConfirmedBooking({ userEmail }) {
    return (
        <div class="content">
            <h1>Reservation</h1>
            <div className="reg_form">
                <h2>Booking confirmed</h2>
                <p>A confirmation Email has been sent to { userEmail }</p>
            </div>
        </div>
    )
}

export default ConfirmedBooking;