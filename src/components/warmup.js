import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

//bootstrap
import Container from 'react-bootstrap';

function useNewExercise(exercise) {
    const exerciseSelection = Object.keys(exercise).map((exerciseIdx) => {
        return (
            <div>
                <div>
                    <button>up</button>
                    <div>{exercise[exerciseIdx].reps}</div>
                    <button>down</button>
                </div>
                <div>
                    <p>{exercise[exerciseIdx].name}</p>
                </div>
                <div>
                    <p>0</p>
                </div>
            </div>
        );   
    });
    return exerciseSelection;
    /*
    return (
        <div>
            {exerciseSelection}
        </div>
    );
    */
}

function Warmup() {
    const exercise = useSelector(state => state.workoutReducer);
    //const warmupStates = {}
    //const warmupEle = useNewExercise(warmupstates);

    return (
        <div id="warmup">
            <div>
                <div>
                    <button>up</button>
                    <div>display</div>
                    <button>down</button>
                </div>
                <div>
                    <p>Shoulder band warmups</p>
                </div>
                <div>
                    <p>O</p>
                </div>
            </div>

        </div>
    );
   /*
    return (
        <div>
            <h2>Warm ups</h2>
            {warmupEle}
        </div>
    )
    */
}

export default Warmup;