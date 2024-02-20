import Home from './Home.js';
import Reservations from './BookingPage.js';
import { Navigate, useNavigate, Routes, Route } from 'react-router-dom';
import { useState, useReducer } from "react";

function Main(props) {

    const initialState = {availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]}
    function updateTimes() {
        return {availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]}
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, initialState);

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