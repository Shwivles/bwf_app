import React from 'react';
import { useSelector } from 'react-redux';
import ExerciseBlock from './ExerciseBlock';

function Strength() {

    const exerciseState = useSelector(state => state.workoutReducer);

    

    return (
        <div className="exercise-container">

            <h1 style={{margin: "20px 0 20px 0"}}>Strength</h1>


            <p>First pair</p>
            <ExerciseBlock exercise={exerciseState.pullup} />
            <ExerciseBlock exercise={exerciseState.squat} />

            <p >Second pair</p>
            <ExerciseBlock exercise={exerciseState.dip} />
            <ExerciseBlock exercise={exerciseState.hinge} />
            
            <p >Third pair</p>
            <ExerciseBlock exercise={exerciseState.rows} />
            <ExerciseBlock exercise={exerciseState.pushup} />

        </div>
    );
}

export default Strength;