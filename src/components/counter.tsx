import React, {useState} from 'react';
import classes from './counter.module.scss'
const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div className={classes.btn}>
            <div>{count} </div>
            <button onClick={() => setCount(count + 1)}>increment</button>
        </div>
    );
};

export default Counter;