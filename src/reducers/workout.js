const defaultState = {
    shoulderBand: {
        name: ['Shoulder Band Warmup', 'test bitch'],
        id: 'shoulderBand',
        reps: 5,
        completed: [0]
    },
    squatSky: {
        name: ['Squat Sky Reaches'],
        id: 'squatSky',
        reps: 5,
        completed: [0]
    },
    gmbWrist: {
        name: ['GMB Wrist Prep'],
        id: 'gmbWrist',
        reps: 10,
        completed: [0]
    },
    deadbugs: {
        name: ['Deadbugs'],
        id: 'deadbugs',
        reps: 30,
        completed: [0]
    },
    archHangs: {
        name: ['Arch Hangs'],
        id: 'archHangs',
        reps: 10,
        completed: [0]
    },
    supportHold: {
        name: ['Support Hold'],
        id: 'supportHold',
        reps: 30,
        completed: [0]
    },
    eSquat: {
        name: ['Easier Squat Progression'],
        id: 'eSquat',
        reps: 10,
        completed: [0]
    },
    eHinge: {
        name: ['Easier Hinge Progression'],
        id: 'eHinge',
        reps: 10,
        completed: [0]
    },
    pullup: {
        name: ['Scapular Pulls', 'Arch Hangs', "Pull-up Negatives", 'Pull-ups'],
        id: 'pullup',
        reps: '5',
        completed: [0, 0, 0]
    },
    squat: {
        name: ['Asisted Squat', 'Squat', 'Split Squat', 'Bulgarian Split Squat', 'Beginner Shrimp Squat', 'Intermediate Shrimp Squat', 'Advanced Shrimp Squats'],
        id: 'squat',
        reps: 5,
        completed: [0, 0, 0]
    },
    dip: {
        name: ['Parrallel Bar Hold', 'Negative Dips', 'Parralel Bar Dips'],
        id: 'dip',
        reps: 5,
        completed: [0, 0, 0]
    },
    rows: {
        name: ['Vertical Rows', 'Incline Rows', 'Horizontal Rows', 'Wide Rows', 'Weighted Inverted Rows'],
        id: 'rows',
        reps: 5,
        completed: [0, 0, 0]
    },
    pushup: {
        name: ['Vertical Pushup', 'Incline Pushup', 'Full Pushup', 'Diamond Pushup', 'Pseudo Planche Pushups'],
        id: 'pushup',
        reps: 5,
        completed: [0, 0, 0]
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

        case 'COMPLETE_REP':
            const completedState = {...state};
            completedState[action.id].completed[action.idx] = 1;

            return completedState;

        case 'DELETE_REP':
            const deletedState = {...state};
            deletedState[action.id].completed[action.idx] = 0;
            return deletedState;

        default: 
            return state;

    }
}

export default workoutReducer;