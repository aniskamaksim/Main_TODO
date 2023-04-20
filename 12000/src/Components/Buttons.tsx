import React, {FC, memo} from 'react';
import Button from "@mui/material/Button";
type ButtonsType = {
    variant: 'text' | 'outlined' | 'contained'
    size: 'small' | 'medium' | 'large'
    color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
    onClick: ()=>void
    disabled: boolean
    title: string
}
export const Buttons: FC<ButtonsType> = memo((
    {variant, title, size, disabled, color, onClick}
) => {
    return <Button variant={variant}
                   size={size}
                   color={color}
                   onClick={onClick}
                   disabled={disabled}>{title}</Button>
});