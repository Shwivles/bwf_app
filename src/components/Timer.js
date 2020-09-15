import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { timerStart, timerStop, reset, updateSec, updateMin } from '../actions';
//import tickReducer from '../reducers/time_tick';

function Timer() {

    const time = useSelector(state => state.tickReducer);
    const dispatch = useDispatch();

    const tick = () => {

    }

    const handleTime = () => {
        if (time.onOff === 'off') {
            dispatch(timerStart());
        } else {
            dispatch(timerStop());
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (time.onOff === 'off') {
                tick();
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    });

    return (
        <div>
            <div>
                {time.minutes}:{time.seconds}
            </div>
            <div>
                <button>{time.ssButton}</button>
                <button>Reset</button>
            </div>
        </div>
    );
}

export default Timer;