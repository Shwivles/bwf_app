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
        time: 30,
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
        time: 30,
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
        time: 30,
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
    hinge: {
        name: ['Romanian Deadlift', 'Single Legged Deadlift', 'Banded Nordic Curl Negatives', 'Banded Nordic Curls', 'Nordic Curls'],
        id: 'hinge',
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
    },
    antiExt: {
        name: ['Plank', 'Kneeling Ab Wheel Rollouts', 'Standing Ab Wheel Rollouts', 'Ring Ab Rollouts'],
        id: 'antiExt',
        time: 30,
        reps: 8,
        completed: [0, 0, 0]
    },
    antiRot: {
        name: ['Assisted Knee Copenhagen Plank', 'Knee Copenhagen Plank', 'Assisted Copenhagen Plank', 'Copenhagen Plank', 'Copenhagen Plank with Movement', 'Ring Pallof Press'],
        id: 'antiRot',
        time: 30,
        reps: 8,
        completed: [0, 0, 0]
    },
    extension: {
        name: ['Arch Raises', 'Arch Body Hold', 'Arch Body Rocks', 'Hyper Extension', 'Reverse Hyper Extension'],
        id: 'extension',
        time: 30,
        reps: 8,
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
            if (decreaseState[action.id].reps !== 0)
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

        case 'INCREASE_TIME_REP': 
            const incTimeState = {...state};
            incTimeState[action.id].time += 10;
            return incTimeState;

        case 'DECREASE_TIME_REP':
            const decTimeState = {...state};
            if (decTimeState[action.id].time !== 0)
                decTimeState[action.id].time -= 10;
            return decTimeState;

        default: 
            return state;

    }
}

export default workoutReducer;