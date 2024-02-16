

function Testimonial(props) {
    return (
        <div class="testimonial_frame">
            <div class="testimonial_image"></div>
            <p>{ props.stars } stars</p>
            <p>{ props.name }</p>
            <p>{ props.text }</p>
        </div>
    )
}

export default Testimonial;