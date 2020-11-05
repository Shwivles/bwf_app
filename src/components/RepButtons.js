import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { completeRep, deleteRep } from '../actions/workoutActions';

//@params: exercise = exerciseState.'name of exercise'
//@RETURN: <div> 
//map completed array
//determine whether button has been pressed
//if corresponding element is 1 then display rep else display open button
function RepButtons({ exercise, isTime }) {
    const dispatch = useDispatch();
    const [rep, setRep] = useState([0, 0, 0]);

    const mappedCompletedRep = exercise.completed.map((exerciseArr, idx) => {
        return (
            <div key={`${exercise.id}-${idx}`} className="rep-button"
                onClick={() => {
                    const newRep = [...rep];
                    if (exerciseArr === 0 && !isTime) {
                        dispatch(completeRep(exercise.id, idx));
                        newRep[idx] = exercise.reps
                        setRep(newRep);
                    } else if (exerciseArr === 0 && isTime) {
                        dispatch(completeRep(exercise.id, idx));
                        newRep[idx] = exercise.time;
                        setRep(newRep);    
                    } else {
                        dispatch(deleteRep(exercise.id, idx));
                    }
                }} 
            >
            
            {
                exerciseArr === 1 ?
                    <span>
                        {rep[idx]}
                    </span>
                :
                    <span></span>
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