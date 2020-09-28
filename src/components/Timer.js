import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { timerStart, timerStop, reset, updateSec, updateMin, timerEnd, increaseMin, increaseSec, decreaseMin, decreaseSec } from '../actions';

function Timer() {

    const time = useSelector(state => state.tickReducer);
    const dispatch = useDispatch();

    const tick = () => {
        if (time.seconds === 0 && time.minutes === 0) {
            dispatch(timerEnd());
        } else if (time.seconds === 0) {
            dispatch(updateMin());
        } else {
            dispatch(updateSec());
        }
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
            if (time.onOff === 'on') {
                tick();
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    });

    let minutes = time.minutes;
        if (time.minutes < 10) {
            minutes = '0' + time.minutes;
        }
    let seconds = time.seconds;
        if (time.seconds < 10) {
            seconds = '0' + time.seconds;
        }

    return (
        <div className="sticky">
        <div className="time-container">
            <div className="timer ">
                <div>
                    <button onClick={() => dispatch(increaseMin())}>Increase</button>
                    <div style={{textAlign: "center"}}>
                        {minutes}
                    </div>
                    <button onClick={() => dispatch(decreaseMin())}>Decrease</button>
                </div>
                <div>:</div>
                <div>
                    <button onClick={() => dispatch(increaseSec())}>Increase</button>
                    <div style={{textAlign: "center"}}>{seconds}</div>
                    <button onClick={() => dispatch(decreaseSec())}>Decrease</button>
                </div>
            </div>
            <div className="time-buttons">
                <button onClick={handleTime}>{time.ssButton}</button>
                <button onClick={() => dispatch(reset())}>Reset</button>
            </div>
        </div>
        </div>
    );
}

export default Timer;