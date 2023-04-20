import React, {KeyboardEvent, ChangeEvent, FC, useState, memo, useCallback} from 'react';
import TextField from "@mui/material/TextField";

type EditableSpanType = {
    callBack: (newTitle: string) => void
    oldTitle: string
}
export const EditableSpan: FC<EditableSpanType> = memo((
    {oldTitle, callBack}
) => {

    const [title, setTitle] = useState<string>(oldTitle);
    const [editMode, setEditMode] = useState<boolean>(false);

    const editModeSwitcher = () => {
        editMode ? setEditMode(false) : setEditMode(true)
    }
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const callBackHandler = useCallback(() => {
        callBack(title);
        editModeSwitcher();
    }, [callBack, editModeSwitcher])
    const onKeyDownHandler = (event: KeyboardEvent) => {
        if (event.key === "Enter") {
            callBackHandler();
        }
    }

    return (
        <>
            {
                editMode ?
                    <TextField variant={"outlined"}
                               value={title}
                               onKeyDown={onKeyDownHandler}
                               onChange={onChangeHandler}
                               size={"small"}
                               color={"success"}
                               type={"text"}
                               onBlur={callBackHandler}
                               autoFocus={true}

                    />
                    : <span onDoubleClick={editModeSwitcher}>{oldTitle}</span>
            }
        </>
    );
});