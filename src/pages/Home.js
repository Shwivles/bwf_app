import React from 'react';
import Navi from '../components/Navi';
import Footer from '../components/Footer';
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
            <Container style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <div style={{width: "95%"}}>
                    <Button size="lg" variant="dark" block as={Link} to="/fullbody">Fullbody</Button>
                    <Button size="lg" variant="dark" block as={Link} to="/push">Push</Button>
                    <Button size="lg" variant="dark" block as={Link} to="/pull">Pull</Button>
                    <Button size="lg" variant="dark" block as={Link} to="/legs">Legs</Button>
                </div>
            </Container>
            <Footer />
        </div>
    );
}

export default Home;