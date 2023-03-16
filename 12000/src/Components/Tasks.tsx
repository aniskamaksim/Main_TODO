import React, {FC} from 'react';
import {TasksType} from "../App";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import {EditableSpan} from "./EditableSpan";

type TasksComponentType = {
    todoListId: string,
    tasks: TasksType[],
    taskId: string,
    title: string,
    taskStatus: boolean,
    removeTask: (todoListId: string, taskId: string) => void,
    changeTaskStatus: (todoListId: string, taskId: string) => void,
    changeTaskTitle: (todoListId: string, taskId: string, newTaskTitle: string) => void
}
export const TasksComponent: FC<TasksComponentType> = (
    {
        todoListId,
        tasks,
        taskId,
        title,
        taskStatus,
        removeTask,
        changeTaskStatus,
        changeTaskTitle
    }
) => {
    const removeTaskHandler = () => {
        removeTask(todoListId, taskId);
    }
    const changeTaskStatusHandler = () => {
        changeTaskStatus(todoListId, taskId);
    }
    const changeTaskTitleHandler = (newTitle: string) => {
        changeTaskTitle(todoListId, taskId, newTitle)
    }
    return (
        <li className={"tasksDiv"}>
            <div className="checkBox_title">
                <input type="checkbox"
                       checked={taskStatus}
                       onChange={changeTaskStatusHandler}
                />
                <div className={taskStatus ? "doneTaskStatus" : "tasksFont"}>
                    <EditableSpan oldTitle={title}
                                  callBack={changeTaskTitleHandler}
                    /></div>
            </div>
            <IconButton aria-label="delete"
                        size="small"
                        onClick={removeTaskHandler}
            >
                <DeleteIcon fontSize="small"/>
            </IconButton>
        </li>
    );
};