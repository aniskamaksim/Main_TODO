import React, {useState} from 'react';
import './App.css';
import {v1} from "uuid";
import {TodoListComponent} from "./Components/TodoList";
import {UniversalInput} from "./Components/UniversalInput";
import Paper from "@mui/material/Paper";

export type FilterValuesType = "all" | "active" | "completed";
export type TodoListsType = {
    todoListId: string,
    title: string,
    filter: FilterValuesType
}
export type TasksType = {
    taskId: string,
    title: string,
    isDone: boolean
}
export type TasksStateType = {
    [todoListId: string]: TasksType[]
}

function App() {
    const [todoLists, setTodoLists] = useState<TodoListsType[]>([]);
    const [tasks, setTasks] = useState<TasksStateType>({});

    const removeTask = (todoListId: string, taskId: string) => {
        setTasks({...tasks, [todoListId]: tasks[todoListId].filter(e => e.taskId !== taskId)})
    }
    const changeTaskStatus = (todoListId: string, taskId: string) => {
        setTasks({
            ...tasks,
            [todoListId]: tasks[todoListId].map(e => e.taskId === taskId ? {...e, isDone: !e.isDone} : e)
        })
    }
    const addTask = (todoListId: string, newTaskTitle: string) => {
        const newTask = {taskId: v1(), title: newTaskTitle, isDone: false};
        // const selectedTodoList = tasks[todoListId];
        // tasks[todoListId] = [...selectedTodoList, newTask];
        // setTasks({...tasks});
        setTasks({...tasks, [todoListId]: [newTask, ...tasks[todoListId]]})
    }
    const changeTaskTitle = (todoListId: string, taskId: string, newTaskTitle: string) => {
        setTasks({
            ...tasks,
            [todoListId]: tasks[todoListId].map(e => e.taskId === taskId ? {...e, title: newTaskTitle} : e)
        })
        // const todoListsTasks = tasks[todoListId];
        // const task = todoListsTasks.find(e=>e.taskId === taskId)
        // if(task) {
        //     task.title = newTaskTitle
        //     setTasks({...tasks})
        // }
    }

    const changeTodoListFilter = (todoListId: string, newFilterValue: FilterValuesType) => {
        setTodoLists(todoLists.map(e => e.todoListId === todoListId ? {...e, filter: newFilterValue} : e))
    }
    const removeTodoList = (todoListId: string) => {
        setTodoLists(todoLists.filter(e => e.todoListId !== todoListId));
        let copyTasks = {...tasks};
        delete copyTasks[todoListId];
        setTasks(copyTasks);
    }
    const addTodoList = (newTodoListTitle: string) => {
        const newTodoList: TodoListsType = {todoListId: v1(), title: newTodoListTitle, filter: "all"};
        setTodoLists([...todoLists, newTodoList])
        setTasks({...tasks, [newTodoList.todoListId]: []})
    }
    const changeTodoListTitle = (todoListId: string, newTodoListTitle: string) => {
        setTodoLists(todoLists.map(e => e.todoListId === todoListId ? {...e, title: newTodoListTitle} : e))
        // const todoList = todoLists.find(e=>e.todoListId === todoListId)
        //     if(todoList) {
        //         todoList.title = newTodoListTitle
        //         setTodoLists([...todoLists])
        //     }
    }
    const getFilterValue = (todoListId: string, filter: string) => {
        let filteredTasks = tasks[todoListId];
        filter === "active" ?
            filteredTasks = tasks[todoListId].filter(e => !e.isDone) :
            filter === "completed" ?
                filteredTasks = tasks[todoListId].filter(e => e.isDone) :
                filteredTasks = tasks[todoListId];
        return filteredTasks;
    }

    const todoListsMap = todoLists.map((e) => {
        const filteredTasks = getFilterValue(e.todoListId, e.filter)
        return (
            <Paper key={e.todoListId}
                   sx={{backgroundColor: "#f2f2f2", height: "fit-content"}}
                   elevation={6}

            >
                <TodoListComponent key={e.todoListId}
                    todoListId={e.todoListId}
                    title={e.title}
                    filter={e.filter}
                    tasks={filteredTasks}
                    removeTask={removeTask}
                    changeTaskStatus={changeTaskStatus}
                    addTask={addTask}
                    changeTodoListFilter={changeTodoListFilter}
                    removeTodoList={removeTodoList}
                    changeTaskTitle={changeTaskTitle}
                    changeTodoListTitle={changeTodoListTitle}
                />
            </Paper>
        );
    })
    return (
        <div className={"appDiv"}>
            <h3>Let's create your first todolist!</h3>
            <UniversalInput callBack={addTodoList}
            />
            <div className={"MainTodoDiv"}>
                {todoListsMap}
            </div>
        </div>
    );
}
export default App;
