import React, { useState, useDispatch } from 'react';
import RepButtons from './repButtons';

function Strength() {

    const exerciseState = useState(state => state.workoutReducer);

    //@PARAMS: name/id
    //@RETURN: no return
    //pass in name from onclick and use to change the element of array from 0 to 1
    const handleButtonClick = (name) => {
    }

    return (
        <div>
            <h2>First pair</h2>
                <div className="exercise-block">
                    <div>
                        <button>up</button>
                        <div>display</div>
                        <button>down</button>
                    </div>
                    <div>
                        <p>Pull up progression</p>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                        {/*
                            onclick dispatch(completeRep)
                            copy current rep from name into completed array
                            if completed[0] === 1
                                then display rep
                            else
                                display click me
                        */}
                    </div>
                </div>
            <h2>Second pair</h2>

            <h2>Third pair</h2>

        </div>
    );
}

export default Strength;