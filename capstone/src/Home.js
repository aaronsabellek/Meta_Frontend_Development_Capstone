import Introduction from './Introduction.js';
import Specials from './Specials.js';
import Testimonials from './Testimonials.js';
import About from './About.js';

function Home(props) {
    return (
        <>
            <Introduction />
            <Specials />
            <Testimonials />
            <About />
        </>
    )
}

export default Home;