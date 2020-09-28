import React from 'react';
import Navi from '../components/Navi';
import Timer from '../components/Timer';
import Warmup from '../components/warmup';

function Fullbody() {
    return (
        <div style={{height: "3000px"}}>
            <Navi />
            <Timer />
            <Warmup />
        </div>
    );
}

export default Fullbody;