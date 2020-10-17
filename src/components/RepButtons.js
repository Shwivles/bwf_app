import React from 'react';

//@params: exercise = exerciseState.'name of exercise'
//@RETURN: <div> 
//map completed array
//determine whether button has been pressed
//if corresponding element is 1 then display rep else display open button
function RepButtons({ exercise }) {
    console.log(exercise);

    const mappedCompletedRep = exercise.completed.map((exerciseArr, idx) => {
        return (
            <div key={`${exercise.id}-${idx}`}>
            {
                exerciseArr ===  1 ?
                <p>{exercise.reps}</p>
            :
                <p>click here</p>

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