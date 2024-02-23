

function ConfirmedBooking({userEmail}) {
    return (
        <div class="bg-white">
            <div class="reservation content">
                <h1 class="green">Reservation</h1>
                <div className="registration_form">
                    <h2>Booking confirmed</h2>
                    <p>A confirmation Email has been sent to {userEmail}</p>
                </div>
            </div>
        </div>
    )
}

export default ConfirmedBooking;