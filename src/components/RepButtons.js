import React from 'react';

//@params: exercise = exerciseState.'name of exercise'
//@RETURN: <div> 
//map completed array
//determine whether button has been pressed
//if corresponding element is 1 then display rep else display open button
function RepButtons({ exercise }) {
    console.log(exercise);

    const test = exercise.completed.map((exerciseArr, idx) => {
        return (
            <div key={idx}>
            {
                exerciseArr ===  1 ?
                <p>{exercise.reps}</p>
            :
                <p>click here</p>

            }
            </div>
        );
       /*
        if (exerciseArr === 1) {
            return(
                <div>{exercise.reps}</div>
            );
        } else {
            return (
                <div>click here</div>
            );
        }
        */
    });

    /**
     * ALTERNATE THINKING:
     * pass through name of exercise as props
     * useSelector for workoutReducer
     * match name of exercise to corresponding state in workout reduer
     * map the completed 
     */
    
   return (
       <div>
           {test}
       </div>
   ); 
}

export default RepButtons;