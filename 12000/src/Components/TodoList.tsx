import React, {FC, memo, useCallback} from 'react';
import {TasksComponent} from "./Tasks";
import {UniversalInput} from "./UniversalInput";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import {EditableSpan} from "./EditableSpan";
import Paper from "@mui/material/Paper";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../state/store";
import {
    ChangeTodoListFilterAC,
    ChangeTodoListTitleAC, FilterValuesType,
    RemoveTodoListAC,
    TodoListsType
} from "../state/todoList-reducers";
import {AddTaskAC, TasksType} from "../state/tasks-reducers";
import {Buttons} from "./Buttons";

type TodoListComponentType = {
    todolist: TodoListsType
}
export const TodoListComponent: FC<TodoListComponentType> = memo((
    {todolist}
) => {
    const dispatch = useDispatch();
    const {todoListId, title, filter} = todolist
    const tasks = useSelector<rootReducerType, TasksType[]>((state) => state.tasks[todoListId])

    let filteredTasks = tasks;
    const getFilterValue = useCallback(() => {
        return (
            filter === "active" ?
                filteredTasks = tasks.filter(e => !e.isDone) :
                filter === "completed" ?
                    filteredTasks = tasks.filter(e => e.isDone) :
                    filteredTasks
        )
    }, [tasks, filter])
    filteredTasks = getFilterValue();

    const addTask = useCallback((newTaskTitle: string) => {
        dispatch(AddTaskAC(todoListId, newTaskTitle))
    }, [dispatch, todoListId])

    const changeTodoListFilterHandler = useCallback((newFilter: FilterValuesType) => {
        dispatch(ChangeTodoListFilterAC(todoListId, newFilter));
    }, [todoListId, dispatch])
    const changeTodoListTitleHandler = useCallback((newTitle: string) => {
        dispatch(ChangeTodoListTitleAC(todoListId, newTitle));
    }, [dispatch, todoListId])
    const removeTodoListHandler = useCallback(() => {
        dispatch(RemoveTodoListAC(todoListId));
    }, [dispatch, todoListId]);

    const tasksMap = filteredTasks.map((e) => {
        return (
            <Paper key={e.taskId}
                   sx={{backgroundColor: "#f2f2f2", height: "fit-content"}}
                   elevation={0}
            >
                <TasksComponent todoListId={todoListId}
                                taskId={e.taskId}
                                title={e.title}
                                taskStatus={e.isDone}
                />
            </Paper>
        )
    });
    const isTasksArrayEmpty = tasks.length === 0;
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
                                    onClick={removeTodoListHandler}
                                    color={"secondary"}
                        >
                            <DeleteIcon fontSize="inherit"/>
                        </IconButton>
                    </div>
                </div>
                <div>
                    <UniversalInput key={todolist.todoListId}
                                    callBack={addTask}
                    />
                </div>
                <div key={todolist.todoListId}>
                    {isTasksArrayEmpty ?
                        <div className={"tasksDisclaimer"}><h3>No tasks here yet.</h3></div> :
                        <div>{tasksMap}</div>}
                </div>
            </div>
            <div className={"buttons"}>
                <Buttons variant={"contained"}
                         size={"small"}
                         color={"secondary"}
                         onClick={() => changeTodoListFilterHandler("all")}
                         disabled={filter === "all"}
                         title={"All"}/>
                <Buttons variant={"contained"}
                         size={"small"}
                         color={"secondary"}
                         onClick={() => changeTodoListFilterHandler("active")}
                         disabled={filter === "active"}
                         title={"Active"}/>
                <Buttons variant={"contained"}
                         size={"small"}
                         color={"secondary"}
                         onClick={() => changeTodoListFilterHandler("completed")}
                         disabled={filter === "completed"}
                         title={"Completed"}/>

            </div>
        </>
    );
});