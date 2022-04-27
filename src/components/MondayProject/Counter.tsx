import React, {useState} from 'react';
import s from './Counter.module.css'

export const Counter = () => {
    const [count, setCount] = useState<number>(0)

    return (
        <div className={s.wrapper}>
            <div className={s.counter}>Counter: {count}</div>
            <div className={s.buttons}>
                <button onClick={() => setCount(count + 1)}>increase</button>
                <button disabled={count === 0} className={count === 0 ? s.disabled : ''}
                        onClick={() => setCount(count - 1)}>decrease
                </button>
                <button disabled={count === 0}
                    className={count === 0 ? s.disabled : ''}
                        onClick={() => setCount(0)}>reset
                </button>
            </div>

        </div>
    );
};

