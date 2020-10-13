import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RepButtons from './RepButtons';

//bootstrap
import Form from 'react-bootstrap/Form';

/*
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
    return (
        <div>
            {exerciseSelection}
        </div>
    );
}
*/

function Warmup() {
    const exerciseState = useSelector(state => state.workoutReducer);

    return (
        <div className="exercise-container">
            <h1>Warm up section</h1>
            <div className="exercise-block">
                <div>
                    <button>up</button>
                    <div>display</div>
                    <button>down</button>
                </div>
                <div>
                    <p>Shoulder band warmups</p>
                </div>
                
                <RepButtons exercise={exerciseState.shoulderBand} />
                    
            </div>
            <div className="exercise-block">
                <div>
                    <button>up</button>
                    <div>display</div>
                    <button>down</button>
                </div>
                <div>
                    <p>Squat sky reaches</p>
                </div>
                <div>
                    <Form.Check 
                        style={{position: "static"}}
                        inline
                        label="1"
                        type="checkbox"
                    />
                    
                </div>
            </div>
            <div className="exercise-block">
                <div>
                    <button>up</button>
                    <div>display</div>
                    <button>down</button>
                </div>
                <div>
                    <p>GMB wrist prep</p>
                </div>
                <div>
                    <div></div>
                    {/*
                        onclick dispatch(completeRep)
                        copy current rep from name into completed array
                        if completed[0] === 1
                            then display rep
                        else
                            display blank
                    */}
                </div>
            </div>
            <div className="exercise-block">
                <div>
                    <button>up</button>
                    <div>display</div>
                    <button>down</button>
                </div>
                <div>
                    <p>Deadbugs</p>
                </div>
                <div>
                    <p>O</p>
                </div>
            </div>
            <div className="exercise-block">
                <div>
                    <button>up</button>
                    <div>display</div>
                    <button>down</button>
                </div>
                <div>
                    <p>Arch hangs</p>
                </div>
                <div>
                    <p>O</p>
                </div>
            </div>
            <div className="exercise-block">
                <div>
                    <button>up</button>
                    <div>display</div>
                    <button>down</button>
                </div>
                <div>
                    <p>Support hold</p>
                </div>
                <div>
                    <p>O</p>
                </div>
            </div>
            <div className="exercise-block">
                <div>
                    <button>up</button>
                    <div>display</div>
                    <button>down</button>
                </div>
                <div>
                    <p>Squat progression easy</p>
                </div>
                <div>
                    <p>O</p>
                </div>
            </div>
            <div className="exercise-block">
                <div>
                    <button>up</button>
                    <div>display</div>
                    <button>down</button>
                </div>
                <div>
                    <p>Hinge progression easy</p>
                </div>
                <div>
                    <p>O</p>
                </div>
            </div>
        </div>
    );
   
}

export default Warmup;