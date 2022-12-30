import React from 'react';

type ScreenPropsType = {
    counter: number
    maxValue: number
}
export const Screen: React.FC<ScreenPropsType> = (
    {counter, maxValue}
) => {
    return (
        <div className={counter === maxValue ? 'counter-yellow' : 'counter'}>
            <div>{counter}</div>
        </div>
    )
};