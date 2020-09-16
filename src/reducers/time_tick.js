const defaultState = {
    minutes: 1,
    seconds: 30,
    onOff: 'off',
    ssButton: 'Start'
};

const tickReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'UPDATE_SEC':
            return {
                ...state,
                seconds: state.seconds - 1
            };
        case 'UPDATE_MIN':
            return {
                ...state,
                minutes: state.minutes - 1,
                seconds: 59
            };
        case 'TIME_END':
            return {
                ...state,
                onOff: 'off',
            };
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
                minutes: action.newTime.minutes,
                seconds: action.newTime.seconds,
                onOff: 'off',
                ssButton: 'Start'
            };
        case 'INCREASE_MIN':
            return {
                ...state,
                minutes: state.minutes + 1
            };
        case 'DECREASE_MIN':
            if (state.minutes === 0) {
                return {
                    ...state
                };
            } 
            return {
                ...state,
                minutes: state.minutes - 1
            };
        case 'INCREASE_SEC':
            return {
                ...state,
                seconds: (state.seconds + 10) % 60
            };
        case 'DECREASE_SEC':
            if (state.seconds === 0) {
                return {...state};
            }
            return {
                ...state,
                seconds: state.seconds - 10
            };
        default:
            return state;
    }
}

export default tickReducer;