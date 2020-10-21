import React from 'react';
import Navi from '../components/Navi';
import Timer from '../components/Timer';
import Warmup from '../components/warmup';
import Strength from '../components/Strength';

import Container from 'react-bootstrap/Container';

function Fullbody() {
    return (
        <div style={{height: "6000px"}}>
            <Navi />
            <Timer />
            <Container >
                <Warmup />
                <Strength />
            </Container>
        </div>
    );
}

export default Fullbody;