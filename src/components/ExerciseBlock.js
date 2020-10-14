import React from 'react';
import RepButtons from './RepButtons';

/**
 * 
 * @param {exercise} object
 * @return {div} jsx element
 * pass in workoutReducer state as props and display content in object
 */
function ExerciseBlock({ exercise }) {
    return (
        <div className="exercise-block">
            <div>
                <button>up</button>
                <div>{exercise.reps}</div>
                <button>down</button>
            </div>
            <div>
                <p>{exercise.name}</p>
            </div>

            <RepButtons exercise={exercise} />
            
        </div>
    );
}

export default ExerciseBlock;