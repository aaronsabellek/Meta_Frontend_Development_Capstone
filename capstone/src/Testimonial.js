

function Testimonial(props) {
    return (
        <div class="testimonial_frame">
            <div class="testimonial_image"></div>
            <div class="testimonial_box">
                <p>{ props.name }</p>
                <p>{ props.text }</p>
            </div>
        </div>
    )
}

export default Testimonial;