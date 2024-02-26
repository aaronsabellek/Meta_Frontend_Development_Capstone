import Home from '../pages/Home.js';
import Reservations from '../pages/BookingPage.js';
import ConfirmedBooking from '../pages/ConfirmedBooking.js';
import UnderConstruction from '../pages/UnderConstruction.js';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';
import { fetchAPI, submitAPI } from '../utils/API.js';

function Main() {

    // set initial times for user date
    const initializeTimes = { timeSlots: fetchAPI(new Date()) };

    // update available times from user date
    function updateTimes(state, date) {
        return { timeSlots: fetchAPI(new Date(date)) };
    };

    // set available times from user date as state
    const [availableTimes, dispatchDate] = useReducer(updateTimes, initializeTimes);

    // navigate to confirmation page after successful form submission
    const navigate = useNavigate();
    function submitForm(formData) {
        if (submitAPI(formData)) {
            navigate('/confirmation');
        }
    };

    // set and update user email as state
    const initializeEmail = "";
    function updateEmail(state, email) {
        return email;
    }
    const [userEmail, dispatchEmail] = useReducer(updateEmail, initializeEmail);

    return (

        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<UnderConstruction />} />
                <Route path="/menu" element={<UnderConstruction />} />
                <Route
                    path="/reservations"
                    element={
                        <Reservations
                            availableTimes={availableTimes}
                            dispatchDate={dispatchDate}
                            dispatchEmail={dispatchEmail}
                            submitForm={submitForm}
                        />
                    }
                />
                <Route
                    path='/confirmation'
                    element={
                        <ConfirmedBooking userEmail={userEmail} />
                    }
                />
                <Route path="/order_online" element={<UnderConstruction />} />
                <Route path="/login" element={<UnderConstruction />} />
            </Routes>
        </main>
    )
}

export default Main;