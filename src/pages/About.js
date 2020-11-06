import React from 'react';
import Navi from '../components/Navi';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

//bootstrap
import Container from 'react-bootstrap/Container';

function About() {
    return (
        <div>
            <div style={{height: "800px"}}>

            <Navi />
            <Container className="about-container">
                <h2>About the Site</h2>
                <p>
                    This website was made as workout tracker for the recomended routine from Reddit's bodyweight fitness subreddit.
                    All info involving the workout can be found on Reddit's bodyweightfitness subreddit. 
                </p>
                <p>
                    <Link target="_blank" to={"//www.reddit.com/r/bodyweightfitness/wiki/index"}>Link to the subreddit wiki</Link>
                </p>
                <p>
                    This is purely a personal project to see if I could recreate a tracker similar to others that have been shown 
                    on the subreddit. The site features a all-in-one timer that can be used for breaks and timed exercises like planks.
                    Each section of the workout also has a dropdown menu to select a progression of an exercise.
                </p>
            </Container>

            </div>
            <Footer />
        </div>
    );
}

export default About;