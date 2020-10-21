import React from 'react';
import { useDispatch } from 'react-redux';
import RepButtons from './RepButtons';
import ExerciseSelect from './ExerciseSelect';
import { increaseRep, decreaseRep } from '../actions/workoutActions';

/**
 * 
 * @param {exercise} object
 * @return {div} jsx element
 * pass in workoutReducer state as props and display content in object
 */
function ExerciseBlock({ exercise }) {
    const dispatch = useDispatch();



    return (
        <div className="exercise-block">
            <div>
                <button onClick={() => dispatch(increaseRep(exercise.id))}>up</button>
                <div>{exercise.reps}</div>
                <button onClick={() => dispatch(decreaseRep(exercise.id))}>down</button>
            </div>

            <ExerciseSelect exercise={exercise} />

            <RepButtons exercise={exercise} />
            
        </div>
    );
}

export default ExerciseBlock;