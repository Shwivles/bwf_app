export const timerStart = () => ({
    type: 'START_TIMER'
});

export const timerStop = () => ({
    type: 'STOP_TIMER'
});

export const reset = () => ({
    type: 'RESET_TIMER',
    newTime: {
        minutes: 1,
        seconds: 30
    }
});

export const updateSec = () => ({
    type: 'UPDATE_SEC'
});

export const updateMin = () => ({
    type: 'UPDATE_MIN'
});

export const timerEnd = () => ({
    type: 'TIMER_END'
});

export const increaseMin = () => ({
    type: 'INCREASE_MIN'
});

export const decreaseMin = () => ({
    type: 'DECREASE_MIN'
});

export const increaseSec = () => ({
    type: 'INCREASE_SEC'
});

export const decreaseSec = () => ({
    type: 'DECREASE_SEC'
});
