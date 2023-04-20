import React, {FC, memo, useCallback} from 'react';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import {EditableSpan} from "./EditableSpan";
import {ChangeTaskStatusAC, ChangeTaskTitleAC, RemoveTaskAC} from "../state/tasks-reducers";
import {useDispatch} from "react-redux";

type TasksComponentType = {
    todoListId: string,
    taskId: string,
    title: string,
    taskStatus: boolean,
}
export const TasksComponent: FC<TasksComponentType> = memo((
    {
        todoListId,
        taskId,
        title,
        taskStatus,
    }
) => {
    const dispatch = useDispatch();
    const removeTask = useCallback(() => {
        dispatch(RemoveTaskAC(todoListId, taskId));
    }, [dispatch, todoListId, taskId])
    const changeTaskStatus = useCallback(() => {
        dispatch(ChangeTaskStatusAC(todoListId, taskId));
    }, [dispatch, todoListId, taskId])
    const changeTaskTitle = useCallback((newTaskTitle: string) => {
        dispatch(ChangeTaskTitleAC(todoListId, taskId, newTaskTitle));
    }, [dispatch, todoListId, taskId])
    return (
        <li className={"tasksDiv"}>
            <div className="checkBox_title">
                <input type="checkbox"
                       checked={taskStatus}
                       onChange={changeTaskStatus}
                />
                <div className={taskStatus ? "doneTaskStatus" : "tasksFont"}>
                    <EditableSpan oldTitle={title}
                                  callBack={changeTaskTitle}
                    /></div>
            </div>
            <IconButton aria-label="delete"
                        size="small"
                        onClick={removeTask}
            >
                <DeleteIcon fontSize="small"/>
            </IconButton>
        </li>
    );
});