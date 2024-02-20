import Home from './Home.js';
import Reservations from './BookingPage.js';
import { Routes, Route } from 'react-router-dom';
import { useState, useReducer } from "react";

function Main(props) {
    const [availableTimes, setAvailableTimes] = useState(
        [
            {slot: "17:00"},
            {slot: "18:00"},
            {slot: "19:00"},
            {slot: "20:00"},
            {slot: "21:00"},
            {slot: "22:00"}
        ]
    )

    function updateTimes(time) {
        return time;
    }

    function initializeTimes() {
        return (
            [
                {slot: "17:00"},
                {slot: "18:00"},
                {slot: "19:00"},
                {slot: "20:00"},
                {slot: "21:00"},
                {slot: "22:00"}
            ]
        )
    }

    const [status, dispatch] = useReducer(updateTimes, initializeTimes);

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