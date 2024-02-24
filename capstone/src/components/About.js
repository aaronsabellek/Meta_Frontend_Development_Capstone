import mario_adrian_b from '../images/Mario_Adrian_b.jpg';

function About() {
    return (
        <div className="bg-green">
            <div className="content">
                <div className="wrap_justify comp_margin">
                    <img className="half_screen half_img" src={ mario_adrian_b } alt="Owners of Little Lemon" />
                    <div class="half_screen">
                        <h1 className="high">Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;