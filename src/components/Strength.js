import React from 'react';
import { useSelector } from 'react-redux';
import RepButtons from './RepButtons';
import ExerciseBlock from './ExerciseBlock';
import ExerciseSelect from './ExerciseSelect';

function Strength() {

    const exerciseState = useSelector(state => state.workoutReducer);

    

    return (
        <div className="exercise-container">

            <h1 style={{margin: "20px 0 20px 0"}}>Strength</h1>

            <div className="exercise-container">

                <h4 style={{margin: "0px 0 20px 0"}}>First pair</h4>


            </div>

        </div>
    );
}

export default Strength;