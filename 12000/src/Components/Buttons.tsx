import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import {Button} from "@mui/material";
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>
type ButtonsPropsType = DefaultButtonPropsType & {
    callBack: ()=>void
    name: string
    counter?: number
    disabled?: string
}

export const Buttons = (props: ButtonsPropsType) => {
    const callBackHandler = () => {
        props.callBack()
    }

    return (
        <div>
            <Button
                variant={props.counter === 0 ? "outlined" : "contained"}
                onClick={callBackHandler}
                disabled={props.counter === 0}
                size={"small"}>
                {props.name}
            </Button>
        </div>
    );
};