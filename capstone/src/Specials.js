import Dish from './Dish.js';
import greek_salad from './images/Greek_salad.jpg';
import bruchetta from './images/Bruchetta.jpg';
import lemon_dessert from './images/lemon_dessert.jpg';

function Specials(props) {
    const data = [
        {
            image: greek_salad,
            alt: "Greek Salad",
            dish: "Greek Salad",
            price: "$16.99",
            description: "The famous greek salad of crispy lettuce, peppers, olives and Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
        },
        {
            image: bruchetta ,
            alt: "Bruchetta",
            dish: "Bruchetta",
            price: "$5.99",
            description: "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
        },
        {
            image: lemon_dessert,
            alt: "Lemon Dessert",
            dish: "Lemon Dessert",
            price: "$5.00",
            description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        },
    ];

    return (
        <div class="bg-white">
                <div class="content margin">
                    <div class="split">
                        <h1 id="specials_header">This weeks specials!</h1>
                        <button id="specials_button">Online Menu</button>
                    </div>
                    <div class="dishes">
                        {data.map((dish) => (
                            <Dish
                                src={dish.image}
                                alt={dish.alt}
                                dish={dish.dish}
                                price={dish.price}
                                description={dish.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
    )
}

export default Specials;