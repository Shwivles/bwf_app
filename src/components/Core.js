import React from 'react';
import { useSelector } from 'react-redux';
import ExerciseBlock from './ExerciseBlock';


function Core() {
    const exerciseState = useSelector(state => state.workoutReducer);

    return (
        <div className="exercise-container">
            <h1 style={{margin: "0 0 20px 0"}}>Core</h1>

            <p style={{marginTop: "0px"}}>Anti-extension</p>
            <ExerciseBlock exercise={exerciseState.antiExt} />

            <p style={{marginTop: "0px"}}>Anti-Rotation</p>            
            <ExerciseBlock exercise={exerciseState.antiRot} />

            <p style={{marginTop: "0px"}}>Extension</p>
            <ExerciseBlock exercise={exerciseState.extension} />

        </div>
    );
}

export default Core;
