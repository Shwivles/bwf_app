const defaultState = {
    shoulderBand: {
        reps: 5,
        completed: 0
    },
    squatSky: {
        reps: 5,
        completed: 0
    },
    gmbWrist: {
        reps: 10,
        completed: 0
    },
    deadbugs: {
        reps: 30,
        completed: 0
    },
    archHangs: {
        reps: 10,
        completed: 0
    },
    supportHold: {
        reps: 30,
        completed: 0
    },
    eSquat: {
        reps: 10,
        completed: 0
    },
    eHinge: {
        reps: 10,
        completed: 0
    }
}

const workoutReducer = (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default workoutReducer;