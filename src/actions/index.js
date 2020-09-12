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