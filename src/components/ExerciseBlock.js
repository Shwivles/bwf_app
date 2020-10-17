import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RepButtons from './RepButtons';
import { increaseRep, decreaseRep } from '../actions/workoutActions';

/**
 * 
 * @param {exercise} object
 * @return {div} jsx element
 * pass in workoutReducer state as props and display content in object
 */
function ExerciseBlock({ exercise }) {
    const exerciseState = useSelector(state => state.workoutReducer);
    const dispatch = useDispatch();



    return (
        <div className="exercise-block">
            <div>
                <button onClick={() => dispatch(increaseRep(exercise.id))}>up</button>
                <div key={exercise.reps}>{exercise.reps}</div>
                <button onClick={() => dispatch(decreaseRep(exercise.id))}>down</button>
            </div>
            <div>
                <p>{exercise.name}</p>
            </div>

            <RepButtons exercise={exercise} />
            
        </div>
    );
}

export default ExerciseBlock;