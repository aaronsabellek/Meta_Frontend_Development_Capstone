import Home from './Home.js';
import Reservations from './Reservations';
import { Routes, Route } from 'react-router-dom';

function Main(props) {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reservations" element={<Reservations />} />
            </Routes>
        </main>
    )
}

export default Main;