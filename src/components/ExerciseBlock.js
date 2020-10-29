import React from 'react';
import { useDispatch } from 'react-redux';
import RepButtons from './RepButtons';
import ExerciseSelect from './ExerciseSelect';
import { increaseRep, decreaseRep } from '../actions/workoutActions';
import { BsFillCaretUpFill, BsFillCaretDownFill } from 'react-icons/bs';

/**
 * 
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



    return (
        <div className="exercise-block">
            <div>
                <button onClick={() => dispatch(increaseRep(exercise.id))}>
                    <BsFillCaretUpFill />
                </button>
                <div>{exercise.reps}</div>
                <button onClick={() => dispatch(decreaseRep(exercise.id))}>
                    <BsFillCaretDownFill />
                </button>
            </div>

            <ExerciseSelect exercise={exercise} />

            <RepButtons exercise={exercise} />
            
        </div>
    );
}

export default ExerciseBlock;