import mario_adrian_b from './images/Mario_Adrian_b.jpg';

function About(props) {
    return (
        <div class="bg-green">
            <div class="content">
                <div class="wrap_justify margin" id="about">
                    <div class="half_screen" id="first_block">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </div>
                    <img class="half_screen" id="chef_img" src={ mario_adrian_b } alt="Owners of Little Lemon" />
                </div>
            </div>
        </div>
    )
}

export default About;