import restaurantfood from './images/restauranfood.jpg';

function Reservations(props) {
    return (
        <div class="bg-light_green">
            <div class="content">
                <div class="wrap_justify margin" id="introduction">
                    <div class="half_screen" id="first_block">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <button>Reserve a table!</button>
                    </div>
                    <img class="half_screen" id="chef_img" src={restaurantfood} alt="Chef presenting a meal" />
                </div>
            </div>
        </div>
    )
}

export default Reservations;