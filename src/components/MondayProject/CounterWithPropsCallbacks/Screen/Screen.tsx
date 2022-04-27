import React from 'react';

type ScreenPropsType = {
    count: number
    className?: string
}

export const Screen = (props: ScreenPropsType) => {
    return (
        <div className={props.className}>
            COUNTER: {props.count}
        </div>
    );
};

