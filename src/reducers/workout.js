const defaultState = {
    shoulderBand: {
        name: 'Shoulder Band Warmup',
        id: 'shoulderBand',
        reps: 5,
        completed: [0]
    },
    squatSky: {
        name: 'Squat Sky Reaches',
        id: 'squatSky',
        reps: 5,
        completed: [0]
    },
    gmbWrist: {
        name: 'GMB Wrist Prep',
        id: 'gmbWrist',
        reps: 10,
        completed: [0]
    },
    deadbugs: {
        name: 'Deadbugs',
        id: 'deadbugs',
        reps: 30,
        completed: [0]
    },
    archHangs: {
        name: 'Arch Hangs',
        id: 'archHangs',
        reps: 10,
        completed: [0]
    },
    supportHold: {
        name: 'Support Hold',
        id: 'supportHold',
        reps: 30,
        completed: [0]
    },
    eSquat: {
        name: 'Easier Squat Progression',
        id: 'eSquat',
        reps: 10,
        completed: [0]
    },
    eHinge: {
        name: 'Easier Hinge Progression',
        id: 'eHinge',
        reps: 10,
        completed: [0]
    }
}

const workoutReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'INCREASE_REP':
            const increaseState = {...state};
            increaseState[action.id].reps += 1;
            return increaseState;
        
        case 'DECREASE_REP':
            const decreaseState = {...state};
            decreaseState[action.id].reps -= 1;

            return decreaseState;

        default: 
            return state;

    }
}

export default workoutReducer;