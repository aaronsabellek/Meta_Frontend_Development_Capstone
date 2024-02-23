import Home from '../pages/Home.js';
import Reservations from '../pages/BookingPage.js';
import ConfirmedBooking from '../pages/ConfirmedBooking.js';
import UnderConstruction from '../pages/UnderConstruction.js';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';
import { fetchAPI, submitAPI } from '../utils/API.js';

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

   const initialEmail = "";
   function updateEmail(state, email) {
    return email;
   }
   const [userEmail, dispatchEmail] = useReducer(updateEmail, initialEmail);

    return (

        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<UnderConstruction />} />
                <Route path="/menu" element={<UnderConstruction />} />
                <Route path="/reservations" element={<Reservations availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} dispatchEmail={dispatchEmail} />} />
                <Route path='/confirmation' element={<ConfirmedBooking userEmail={userEmail} />} />
                <Route path="/order_online" element={<UnderConstruction />} />
                <Route path="/login" element={<UnderConstruction />} />
            </Routes>
        </main>
    )
}

export default Main;