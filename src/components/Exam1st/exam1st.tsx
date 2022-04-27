import React, {useState} from 'react';
import s from './style.module.css'
import {Button} from "./Button/Button";

type PropsType = {
    max: number
    min: number
}

export const Exam1St: React.FC<PropsType> = ({max, min}) => {
    const [count, setCount] = useState<number>(min)

    const increase = () => {
        if (count < max) {
            setCount(count + 1)
        }
    }

    const reset = () => {
        setCount(min)
    }

    const decrease = () => {
        if (count > min) {
            setCount(count - 1)
        }

    }

    return (
        <div className={s.wrapper}>
            <div className={s.countWrapper}>
                <div className={`${s.screen} ${count === max ? s.error : ''}`}>
                    {count}
                </div>
                {count === max && <span className={s.errorMessage}>{max} is max value</span>}
            </div>
            <div className={s.buttonWrapper}>
                <Button disabled={count === max} buttonTitle={'increase'} callBack={increase}/>
                <Button disabled={count === min} buttonTitle={'decrease'} callBack={decrease}/>
                <Button disabled={count === min} buttonTitle={'reset'} callBack={reset}/>
            </div>
        </div>
    );
};