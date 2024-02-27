

function Testimonial(props) {
    return (
        <div id="testi_frame">
            <img
                id="testi_portrait"
                src={ props.image }
                alt="Portrait"
            />
            <p id="testi_name">{ props.name }</p>
            <p id="testi_rating">{ props.rating }/5&#9733;</p>
            <p>{ props.text }</p>
        </div>
    )
}

export default Testimonial;