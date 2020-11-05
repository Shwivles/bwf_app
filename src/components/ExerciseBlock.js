import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import RepButtons from './RepButtons';
import ExerciseSelect from './ExerciseSelect';
import { increaseRep, decreaseRep, incTimeRep, decTimeRep } from '../actions/workoutActions';
import { BsFillCaretUpFill, BsFillCaretDownFill, BsToggleOn, BsToggleOff } from 'react-icons/bs';

//bootstrap
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

/**
 * @param {exercise} object
 * @return {div} jsx element
 * pass in workoutReducer state as props and display content in object
 */
function ExerciseBlock({ exercise }) {
    const dispatch = useDispatch();
    /**
     * const [isTime, setisState] = useState(false);
     * if button is pressed and exercise.timeRep exist
     *  change exercise.reps into exercise.timeRep
     * else 
     *  keep as exercise.reps
     *  display a pop-up tag that says exercise is not timed exercise
     */
    const [isTime, setIsTime]  = useState(false);
    const [show, setShow] = useState(false);
    const [test, setTest] = useState(true);     //delete later
    const target = useRef(null);



    return (
        <div className="exercise-block">
            
            {!isTime ? 
                <div className="exercise-button-group">
            
                    <div style={{textAlign: "center"}}>
                        <button onClick={() => dispatch(increaseRep(exercise.id))}>
                            <BsFillCaretUpFill />
                        </button>
                        <div>{exercise.reps}</div>
                        <button onClick={() => dispatch(decreaseRep(exercise.id))}>
                            <BsFillCaretDownFill />
                        </button>
                    </div>
                    <button  ref={target} onClick={() => {
                        //if (exercise.time) {}
                        if (exercise.time) 
                            setIsTime(true);
                        else 
                            setShow(!show);
                    }}>
                        <BsToggleOff />
                    </button>
                    <Overlay target={target.current} show={show} placement="bottom">
                        <Tooltip>
                            Exercise is not a timed exercise!
                        </Tooltip>
                    </Overlay>
                </div>
            :
                <div className="exercise-button-group">
                    <div style={{textAlign: "center"}}>
                        <button onClick={() => dispatch(incTimeRep(exercise.id))}>
                            <BsFillCaretUpFill />
                        </button>
                        <div>{exercise.time}</div>
                        <button onClick={() => dispatch(decTimeRep(exercise.id))}>
                            <BsFillCaretDownFill />
                        </button>
                    </div>
                    <button onClick={() => setIsTime(false)}>
                        <BsToggleOn />
                    </button>
                </div>

            }

                                                

            <ExerciseSelect exercise={exercise} />

            <RepButtons exercise={exercise} isTime={isTime} />
            
        </div>
    );
}

export default ExerciseBlock;