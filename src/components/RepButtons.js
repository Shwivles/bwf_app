import React from 'react';
import { useDispatch } from 'react-redux';
import { completeRep, deleteRep } from '../actions/workoutActions';

//@params: exercise = exerciseState.'name of exercise'
//@RETURN: <div> 
//map completed array
//determine whether button has been pressed
//if corresponding element is 1 then display rep else display open button
function RepButtons({ exercise }) {
    const dispatch = useDispatch();
    console.log(exercise);

    const mappedCompletedRep = exercise.completed.map((exerciseArr, idx) => {
        return (
            <div key={`${exercise.id}-${idx}`}>
            {
                exerciseArr ===  1 ?
                <span onClick={() => dispatch(deleteRep(exercise.id, idx))}>{exercise.reps}</span>
            :
                <span onClick={() => dispatch(completeRep(exercise.id, idx))}>O</span>

            }
            </div>
        );
       
    });

       return (
       <div>
           {mappedCompletedRep}
       </div>
   ); 
}

export default RepButtons;