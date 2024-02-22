import Home from './Home.js';
import Reservations from './BookingPage.js';
import ConfirmedBooking from './ConfirmedBooking.js';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';
import { fetchAPI, submitAPI } from './API.js';

function Main() {
    const initialState = {timeSlots: fetchAPI(new Date())};

    function updateTimes(state, date) {
        return {timeSlots: fetchAPI(new Date(date))};
    };

    const [availableTimes, dispatch] = useReducer(updateTimes, initialState);

    const navigate = useNavigate();
    function submitForm(formData) {
        if (submitAPI(formData)) {
            navigate('/confirmation');
        }
    };

    return (

        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reservations" element={<Reservations availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
                <Route path='/confirmation' element={<ConfirmedBooking />} />
            </Routes>
        </main>
    )
}

export default Main;