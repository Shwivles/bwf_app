import React from 'react';
import Navi from '../components/Navi';
import Timer from '../components/Timer';
import Warmup from '../components/warmup';

import Container from 'react-bootstrap/Container';

function Fullbody() {
    return (
        <div style={{height: "3000px"}}>
            <Navi />
            <Timer />
            <Container>
                <Warmup />
            </Container>
        </div>
    );
}

export default Fullbody;