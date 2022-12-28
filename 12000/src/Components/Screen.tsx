import React, {useState} from 'react';
type ScreenPropsType = {
    counter: number
}
export const Screen: React.FC<ScreenPropsType> = ({counter}) => {
    return (
        <div className={'counter'}>
        <div>{counter}</div>
        </div>
    )
};
