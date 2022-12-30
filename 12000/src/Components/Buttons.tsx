import React from 'react';
import {UniversalButton} from './UniversalButton'

type ButtonPropsType = {
    increaseCounter: () => void
    resetCounter: () => void
    counter: number
    minValue: number
    maxValue: number
}

export const Buttons: React.FC<ButtonPropsType> = (
    {increaseCounter, resetCounter, maxValue, minValue, counter}) => {
    const increaseCallBackHandler = () => {
        increaseCounter()
    }
    const resetCallBackHandler = () => {
        resetCounter()
    }
    const getAddButtonVariant = counter === 0 ? "contained" : "outlined";
    const getResetButtonVariant = counter === maxValue ? "contained" : "outlined";

    return (
        <div className={'buttons_div'}>
            <UniversalButton
                name={'Increment'}
                classVariant={getAddButtonVariant}
                callBack={increaseCallBackHandler}
                disabled={counter === maxValue}
            />
            <UniversalButton
                name={'Reset'}
                classVariant={getResetButtonVariant}
                callBack={resetCallBackHandler}
                disabled={counter === minValue}
            />
        </div>
    );
};


/*
export const Buttons: React.FC <ButtonPropsType> = (
    {increaseCounter, resetCounter, maxValue, minValue, counter})=>{
    function here
    };
*/

/*
export const Buttons = (ButtonPropsType) => {
    function with props. ... here
};
*/