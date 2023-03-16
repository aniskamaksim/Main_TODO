import React, {FC} from 'react';
import {FilterValuesType, TasksType} from "../App"
import {TasksComponent} from "./Tasks";
import {UniversalInput} from "./UniversalInput";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import {EditableSpan} from "./EditableSpan";

type TodoListComponentType = {
    todoListId: string,
    title: string,
    filter: FilterValuesType,
    tasks: TasksType[],
    removeTask: (todoListId: string, taskId: string) => void,
    changeTaskStatus: (todoListId: string, taskId: string) => void,
    addTask: (todoListId: string, newTaskTitle: string) => void,
    changeTodoListFilter: (todoListId: string, newFilterValue: FilterValuesType) => void,
    removeTodoList: (todoListId: string) => void,
    changeTaskTitle: (todoListId: string, taskId: string, newTaskTitle: string) => void,
    changeTodoListTitle: (todoListId: string, newTodoListTitle: string) => void
}
export const TodoListComponent: FC<TodoListComponentType> = (
    {
        todoListId,
        title,
        tasks,
        removeTask,
        changeTaskStatus,
        addTask,
        changeTodoListFilter,
        removeTodoList,
        changeTaskTitle,
        changeTodoListTitle,
    }
) => {
    const isTasksArrayEmpty = tasks.length === 0;
    const changeTodoListFilterHandler = (newFilter: FilterValuesType) => {
        return () => changeTodoListFilter(todoListId, newFilter);
    }
    const changeTodoListTitleHandler = (newTitle: string) => {
        changeTodoListTitle(todoListId, newTitle);
    }
    const addTaskHandler = (title: string) => {
        addTask(todoListId, title)
    }

    const tasksMap = tasks.map((e) => {
        return (
            <>
                <TasksComponent key={e.taskId}
                                todoListId={todoListId}
                                tasks={tasks}
                                taskId={e.taskId}
                                title={e.title}
                                taskStatus={e.isDone}
                                removeTask={removeTask}
                                changeTaskStatus={changeTaskStatus}
                                changeTaskTitle={changeTaskTitle}

                />
            </>
        )
    })
    return (
        <>
            <div className={"todoListDiv"}>
                <div>
                    <div className={"todoListTitleDiv"}>
                        <h3><EditableSpan oldTitle={title}
                                          callBack={changeTodoListTitleHandler}
                        /></h3>
                        <IconButton aria-label="delete"
                                    size="medium"
                                    onClick={() => removeTodoList(todoListId)}
                                    color={"secondary"}
                        >
                            <DeleteIcon fontSize="inherit"/>
                        </IconButton>
                    </div>
                </div>
                <div>
                    <UniversalInput key={todoListId}
                                    callBack={addTaskHandler}
                    />
                </div>
                <div>
                    {isTasksArrayEmpty ? <div>No tasks here</div> : <div>{tasksMap}</div>
                    }
                </div>
            </div>
            <div className={"buttons"}>
                <Button variant={"contained"}
                        size={"small"}
                        color={"secondary"}
                        onClick={changeTodoListFilterHandler("all")}>All</Button>
                <Button variant={"contained"}
                        size={"small"}
                        color={"secondary"}
                        onClick={changeTodoListFilterHandler("active")}>Active</Button>
                <Button variant={"contained"}
                        size={"small"}
                        color={"secondary"}
                        onClick={changeTodoListFilterHandler("completed")}>Completed</Button>

            </div>
        </>
    );
};