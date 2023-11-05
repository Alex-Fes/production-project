import React, {useState} from 'react';
import styles from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>button clicked {count} times</h1>
            <button className={styles.btn} onClick={() => setCount(count + 1)}>Click</button>
        </div>
    );
};

