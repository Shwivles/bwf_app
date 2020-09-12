const defaultState = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    onOff: 'off',
    ssButton: 'Start'
};

const tickReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'UPDATE_SEC':
            return {
                ...state,
                seconds: state.seconds + 1
            };
        case 'UPDATE_MIN':
            return {
                ...state,
                minutes: state.minutes + 1,
                seconds: 0
            };
        /*
        case 'UPDATE_HOUR':
            return {
                hours: state.hours + 1,
                minutes: 0,
                seconds: 0
            };
        */
        case 'START_TIMER':
            return {
                ...state,
                onOff: 'on',
                ssButton: 'Stop'
            };
        case 'STOP_TIMER':
            return {
                ...state,
                onOff: 'off',
                ssButton: 'Start'
            };
        case 'RESET_TIMER':
            return {
                //hours: action.newTime.hours,
                minutes: action.newTime.minutes,
                seconds: action.newTime.seconds,
                onOff: 'off',
                ssButton: 'Start'
            };
        default:
            return state;
    }
}

export default tickReducer;