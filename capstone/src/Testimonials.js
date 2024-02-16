import Testimonial from './Testimonial.js';

function Testimonials(props) {
    return (
        <div class="bg-white">
            <div class="content">
                <h1 id="specials_header">Testimonials</h1>
                <div id="dishes">
                    <Testimonial stars="5" name="Hanna" text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor." />
                    <Testimonial stars="4" name="Justus" text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor." />
                    <Testimonial stars="5" name="Julia" text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor." />
                    <Testimonial stars="5" name="Max" text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor." />
                </div>
            </div>
        </div>
    )
}

export default Testimonials;