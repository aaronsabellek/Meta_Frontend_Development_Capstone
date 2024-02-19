import Testimonial from './Testimonial.js';
import portrait_1 from './images/Portrait_1.jpg';
import portrait_2 from './images/Portrait_2.jpg';
import portrait_3 from './images/Portrait_3.jpg';
import portrait_4 from './images/Portrait_4.jpg';

function Testimonials(props) {
    const data = [
        {
            image: portrait_1,
            name: "Hanna",
            rating: "4.5",
            text: "'Amazing food, amazing service, amazing restaurant!'",
        },
        {
            image: portrait_2,
            name: "Justus",
            rating: "5",
            text: "'Great food at reasonable prices. Great service and the owners are terrific.'",
        },
        {
            image: portrait_3,
            name: "Julia",
            rating: "4",
            text: "'Do yourself a favor and treat yourself here, you won't be sorry.'",
        },
        {
            image: portrait_4,
            name: "Max",
            rating: "5",
            text: "'Best bruchetta in town. You always feel welcome and the ambiance is relaxing.'",
        },
    ];

    return (
        <div class="bg-light_green">
            <div class="content">
                <div class="dishes margin">
                    {data.map((testimonial) => (
                        <Testimonial
                            image={testimonial.image}
                            name={testimonial.name}
                            rating={testimonial.rating}
                            text={testimonial.text}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonials;