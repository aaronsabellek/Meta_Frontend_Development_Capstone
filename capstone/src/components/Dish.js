import bike_icon from '../images/bike_icon.jpg';

function Dish(props) {
    return (
        <div>
            <img
                id="dish_img"
                src={ props.src }
                alt={ props.alt }
            />
            <div id="dish_text">
                <div className="dish_wrap">
                    <h5>{ props.dish }</h5>
                    <h5 id="price">{ props.price }</h5>
                </div>
                <p>{ props.description }</p>
                <a href="order_online" className="dish_wrap">
                    <h5>Order a delivery</h5>
                    <img src={bike_icon} alt="Bike icon" width="25px" height="25px" />
                </a>
            </div>
        </div>
    )
}

export default Dish;