import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';

type ButtonDefaultPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = {
    buttonTitle?: string
    callBack: () => void
}
type FullButtonPropsType = ButtonPropsType & ButtonDefaultPropsType

export const Button: React.FC<FullButtonPropsType> = ({buttonTitle, callBack, ...restProps}) => {

    return (
        <button onClick={callBack} {...restProps}>{buttonTitle}</button>
    );
};