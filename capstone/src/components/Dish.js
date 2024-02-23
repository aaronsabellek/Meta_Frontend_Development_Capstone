import bike_icon from '../images/bike_icon.jpg';

function Dish(props) {
    return (
        <div>
            <img
                class="dish_img"
                src={ props.src }
                alt={ props.alt }
            />
            <div class="dish_text">
                <div class="dish_text_wrap">
                    <h5>{ props.dish }</h5>
                    <h5 class="price">{ props.price }</h5>
                </div>
                <p>{ props.description }</p>
                <div class="order_online">
                    <a href="order_online" class="order_online">
                    <h5>Order a delivery</h5>
                    <img src={bike_icon} alt="Bike icon" width="25px" height="25px" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Dish;