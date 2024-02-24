import restaurantfood from '../images/restauranfood.jpg';
import { Link } from 'react-router-dom';

function Introduction() {
    return (
        <div class="bg-green">
            <div class="content">
                <div class="wrap_justify comp_margin">
                    <div class="half_screen">
                        <h1 className="high">Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <div className="button_div">
                            <Link
                                to="/reservations"
                                className="button"
                            >
                                Reserve a table!
                            </Link>
                        </div>
                    </div>
                    <img
                        className="half_screen half_img"
                        src={ restaurantfood }
                        alt="Chef presenting a meal"
                    />
                </div>
            </div>
        </div>
    )
}

export default Introduction;