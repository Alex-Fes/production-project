import React, {useState} from 'react';
import './Counter.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>button clicked {count} times</h1>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    );
};

