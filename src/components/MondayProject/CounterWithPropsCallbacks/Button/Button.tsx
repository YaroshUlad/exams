import React from 'react';

type ButtonPropsType = {
    name: string
    disabled?: boolean
    callBack: ()=>void
    className?: string
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button className={props.className} onClick={props.callBack} disabled={props.disabled}>
            {props.name}
        </button>
    );
};
