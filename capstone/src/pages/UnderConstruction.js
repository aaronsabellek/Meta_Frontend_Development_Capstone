import icon from '../images/under_construction.png';
import { Link } from 'react-router-dom';

function underConstruction() {
    return (
        <div class="bg-light_green">
            <div class="content construction">
                <h1>Under construction</h1>
                <div className="center">
                <img id="construction" src={icon} alt="Icon of construction worker" />
                <p>Completed sections:</p>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/reservations">Reservations</Link></li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default underConstruction;