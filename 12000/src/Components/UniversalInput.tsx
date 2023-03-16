import React, {KeyboardEvent, ChangeEvent, FC, useState} from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

type UniversalInputType = {
    callBack: (title: string) => void
}
export const UniversalInput: FC<UniversalInputType> = (
    {callBack}
) => {
    const [text, setText] = useState<string>("");
    const [error, setError] = useState<boolean>(false)
    const correctTitle = text.trim().length > 0;
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.currentTarget.value);
        setError(false);
    }
    const onClickHandler = () => {
        if (correctTitle) {
            callBack(text);
        } else {
            setError(true);
        }
        setText("");
    }
    const onKeyDownHandler = (event: KeyboardEvent) => {
        event.key === "Enter" && onClickHandler();
    }
    return (
        <>
            {
                error ?
                    <div className={"errorDiv"}>Title is required</div>
                    : ""
            }
            <div className={"input_button"}>
                <TextField variant={"outlined"}
                           value={text}
                           onKeyDown={onKeyDownHandler}
                           onChange={onChangeHandler}
                           size={"small"}
                           color={error ? "warning" : "secondary"}
                           placeholder={"Enter title here"}
                           type={"text"}

                />
                <Button variant={"contained"}
                        onClick={onClickHandler}
                        disabled={!correctTitle || error}
                        color={"secondary"}
                >Add</Button>
            </div>
        </>
    );
};