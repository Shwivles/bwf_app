import React from 'react';
import { useSelector } from 'react-redux';
import ExerciseBlock from './ExerciseBlock';

//bootstrap
import Form from 'react-bootstrap/Form';


function Warmup() {
    const exerciseState = useSelector(state => state.workoutReducer);

    return (
        <div className="exercise-container">
            <h1 style={{margin: "20px 0 20px 0"}}>Warm up section</h1>
            
            <ExerciseBlock exercise={exerciseState.shoulderBand} />

            <ExerciseBlock exercise={exerciseState.squatSky} />

            <ExerciseBlock exercise={exerciseState.gmbWrist} />

            <ExerciseBlock exercise={exerciseState.deadbugs} />

            <ExerciseBlock exercise={exerciseState.archHangs} />

            <ExerciseBlock exercise={exerciseState.supportHold} />

            <ExerciseBlock exercise={exerciseState.eSquat} />

            <ExerciseBlock exercise={exerciseState.eHinge} />

        </div>
    );
   
}

export default Warmup;