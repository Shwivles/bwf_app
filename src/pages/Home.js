import React from 'react';
import Navi from '../components/Navi';
import { Link } from 'react-router-dom';

//bootstrap
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


function Home() {
    return (
        <div>
            <Navi />
            <Jumbotron>
                <h1>Bodyweight Fitness App</h1>
                <p>Workouts featuring Reddit's r/bodyweightfitness recomended routine.</p>
                <Button size="lg" variant="secondary" as={Link} to="/about">Learn more</Button>
            </Jumbotron>
            <Container>
                <div>
                    <Button size="lg" variant="dark" block as={Link} to="/fullbody">Fullbody</Button>
                    <Button size="lg" variant="dark" block>Push</Button>
                    <Button size="lg" variant="dark" block>Pull</Button>
                    <Button size="lg" variant="dark" block>Legs</Button>
                </div>
            </Container>
        </div>
    );
}

export default Home;