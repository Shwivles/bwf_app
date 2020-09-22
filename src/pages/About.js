import React from 'react';
import Navi from '../components/Navi';

//bootstrap
import Container from 'react-bootstrap/Container';

function About() {
    return (
        <div>
            <Navi />
            <Container>
                <h2>About the Site</h2>
                <p>
                    This website was made as another workout tracker for the recomended routine from Reddit's bodyweight fitness subreddit.
                    All info involving the workout can be found on Reddit's bodyweightfitness subreddit. 
                </p>
            </Container>
        </div>
    );
}

export default About;