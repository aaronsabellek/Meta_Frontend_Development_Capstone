import restaurantfood from './images/restauranfood.jpg';

function Main(props) {
    return (
        <main>
            <div class="content">
                <div id="first_block">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button>Reserve a table!</button>
                </div>
                <img src={restaurantfood} alt="Chef presenting a meal" />
            </div>
        </main>
    )
}

export default Main;