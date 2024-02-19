import Testimonial from './Testimonial.js';

function Testimonials(props) {
    const data = [
        {
            name: "Hanna",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
        },
        {
            name: "Justus",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
        },
        {
            name: "Julia",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
        },
        {
            name: "Max",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
        },
    ];

    return (
        <div class="bg-light_green">
            <div class="content">
                <div class="dishes margin">
                    {data.map((testimonial) => (
                        <Testimonial
                            name={testimonial.name}
                            text={testimonial.text}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonials;