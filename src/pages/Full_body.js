import React from 'react';
import Navi from '../components/Navi';
import Timer from '../components/Timer';
import Warmup from '../components/warmup';
import Strength from '../components/Strength';
import Core from '../components/Core';

import Container from 'react-bootstrap/Container';

function Fullbody() {
    return (
        <div> 
        
            <Navi />
            <Timer />
            <Container >
                <Warmup />
                <Strength />
                <Core />
            </Container>
        </div>
    );
}

export default Fullbody;