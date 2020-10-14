const defaultState = {
    shoulderBand: {
        name: 'Shoulder Band Warmup',
        reps: 5,
        completed: [0]
    },
    squatSky: {
        name: 'Squat Sky Reaches',
        reps: 5,
        completed: [0]
    },
    gmbWrist: {
        name: 'GMB Wrist Prep',
        reps: 10,
        completed: [0]
    },
    deadbugs: {
        name: 'Deadbugs',
        reps: 30,
        completed: [0]
    },
    archHangs: {
        name: 'Arch Hangs',
        reps: 10,
        completed: [0]
    },
    supportHold: {
        name: 'Support Hold',
        reps: 30,
        completed: [0]
    },
    eSquat: {
        name: 'Easier Squat Progression',
        reps: 10,
        completed: [0]
    },
    eHinge: {
        name: 'Easier Hinge Progression',
        reps: 10,
        completed: [0]
    }
}

const workoutReducer = (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default workoutReducer;