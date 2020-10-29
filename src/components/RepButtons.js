import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { completeRep, deleteRep } from '../actions/workoutActions';

//@params: exercise = exerciseState.'name of exercise'
//@RETURN: <div> 
//map completed array
//determine whether button has been pressed
//if corresponding element is 1 then display rep else display open button
function RepButtons({ exercise }) {
    const dispatch = useDispatch();
    const [rep, setRep] = useState([0, 0, 0]);

    const mappedCompletedRep = exercise.completed.map((exerciseArr, idx) => {
        return (
            <div key={`${exercise.id}-${idx}`} className="rep-button"
                onClick={() => {
                    if (exerciseArr === 0) {
                        dispatch(completeRep(exercise.id, idx));
                        const newRep = [...rep];
                        newRep[idx] = exercise.reps
                        setRep(newRep);
                    } else {
                        dispatch(deleteRep(exercise.id, idx));
                    }
                }} 
            >
            
            {
                exerciseArr === 1 ?
                    <span style={{padding: "4px 4px 4px 4px"}}>
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