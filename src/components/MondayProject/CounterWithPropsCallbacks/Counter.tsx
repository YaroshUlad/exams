import React, {FC} from 'react';
import s from './CounterContr.module.css'
import {Screen} from "./Screen/Screen";
import {Button} from "./Button/Button";

type CounterContrPropsType = {
    count: number
    increaseCount: ()=>void
    decreaseCount: ()=>void
    resetCount: ()=>void

}

export const CounterContr: FC<CounterContrPropsType> = ({count,increaseCount, decreaseCount, resetCount}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.screenWrapper}>
                <Screen count={count} className={s.screen}/>
            </div>
            <div className={s.buttonArea}>
                <Button name={'Increase'} callBack={increaseCount} className={s.button}/>
                <Button name={'Decrease'} disabled={count===0} callBack={decreaseCount}
                        className={count===0 ? s.disabledButton :s.button}/>
                <Button name={'Reset'} disabled={count===0} callBack={resetCount}
                        className={count===0 ? s.disabledButton :s.button}/>
            </div>

        </div>
    );
};
