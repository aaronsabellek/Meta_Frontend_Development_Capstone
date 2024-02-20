import Home from './Home.js';
import Reservations from './BookingPage.js';
import { Navigate, useNavigate, Routes, Route } from 'react-router-dom';
import { useState, useReducer } from "react";

function Main(props) {
    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date.getDate());

        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };
    const submitAPI = function(formData) {
        return true;
    };

    const initialState = {availableTimes:  fetchAPI(new Date())}
    const [availableTimes, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date) {
        return {availableTimes: fetchAPI(new Date(date))}
    }
    const navigate = useNavigate();
    function submitForm (formData) {
        if (submitAPI(formData)) {
            navigate("/confirmed")
        }
    }

    return (

        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reservations" element={<Reservations availableTimes={availableTimes} dispatch={dispatch} />} />
            </Routes>
        </main>
    )
}

export default Main;