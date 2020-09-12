import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { timerStart, timerStop, reset, updateSec, updateMin } from '../actions';

function Timer() {

    const time = useSelector(state => state.tickReducer);

    const handleTime = () => {

    }

    return (
        <div>
            <div>
                {time.minutes}:{time.seconds}
            </div>
        </div>
    );
}

export default Timer;