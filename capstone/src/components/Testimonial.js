

function Testimonial(props) {
    return (
        <div class="testimonial_frame">
                <img  class="testimonial_portrait" src={props.image} alt="Portrait" />
            <div class="testimonial_box">
                <p class="testimonial_name">{ props.name }</p>
                <p class="testimonial_rating">{ props.rating }/5&#9733;</p>
                <p>{ props.text }</p>
            </div>
        </div>
    )
}

export default Testimonial;