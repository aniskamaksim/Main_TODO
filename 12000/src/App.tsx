import React, {useEffect, useReducer, useState} from 'react';
import './App.css';
import {v1} from "uuid";
import {TodoListComponent} from "./Components/TodoList";
import {UniversalInput} from "./Components/UniversalInput";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import {
    AddTodoListAC,
    ChangeTodoListFilterAC,
    ChangeTodoListTitleAC,
    RemoveTodoListAC,
    TodoListReducers
} from "./state/todoList-reducers";
import {AddTaskAC, ChangeTaskStatusAC, ChangeTaskTitleAC, RemoveTaskAC, TasksReducers} from "./state/tasks-reducers";

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
//     const [todoLists, todoListsDispatch] = useReducer(TodoListReducers, []);
//     const [tasks, tasksDispatch] = useReducer(TasksReducers, {});
//
//     // useEffect(()=>{
//     //     const todoListValue = localStorage.getItem('todoLists')
//     //     const tasksValue = localStorage.getItem('tasks')
//     // },[])
//     // const setLocaleStorage = () => {
//     //     localStorage.setItem('todoLists', JSON.stringify(todoLists))
//     //     localStorage.setItem('tasks', JSON.stringify(tasks))
//     // }
//
// // ~~~~~~~~~~~~~~~~~~~~ TASKS:
//     const removeTask = (todoListId: string, taskId: string) => {
//         tasksDispatch(RemoveTaskAC(todoListId, taskId));
//     }
//     const changeTaskStatus = (todoListId: string, taskId: string) => {
//         tasksDispatch(ChangeTaskStatusAC(todoListId, taskId));
//     }
//     const addTask = (todoListId: string, newTaskTitle: string) => {
//         tasksDispatch(AddTaskAC(todoListId, newTaskTitle))
//     }
//     const changeTaskTitle = (todoListId: string, taskId: string, newTaskTitle: string) => {
//         tasksDispatch(ChangeTaskTitleAC(todoListId, taskId, newTaskTitle));
//     }
//
// // ~~~~~~~~~~~~~~~~~~~~ TODOLISTS
//     const changeTodoListFilter = (todoListId: string, newFilterValue: FilterValuesType) => {
//         todoListsDispatch(ChangeTodoListFilterAC(todoListId, newFilterValue));
//     }
//     const removeTodoList = (todoListId: string) => {
//         todoListsDispatch(RemoveTodoListAC(todoListId));
//         tasksDispatch(RemoveTodoListAC(todoListId));
//     }
//     const addTodoList = (newTodoListTitle: string) => {
//         const prostheticVariable = AddTodoListAC(newTodoListTitle);
//         todoListsDispatch(prostheticVariable);
//         tasksDispatch(prostheticVariable);
//     }
//     const changeTodoListTitle = (todoListId: string, newTodoListTitle: string) => {
//         todoListsDispatch(ChangeTodoListTitleAC(todoListId, newTodoListTitle));
//     }
//
//     const getFilterValue = (todoListId: string, filter: string) => {
//         let filteredTasks = tasks[todoListId];
//         filter === "active" ?
//             filteredTasks = tasks[todoListId].filter(e => !e.isDone) :
//             filter === "completed" ?
//                 filteredTasks = tasks[todoListId].filter(e => e.isDone) :
//                 filteredTasks = tasks[todoListId];
//         return filteredTasks;
//     }
//
//     const todoListsMap = todoLists.map((e) => {
//         const filteredTasks = getFilterValue(e.todoListId, e.filter)
//         return (
//             <Paper key={e.todoListId}
//                 sx={{backgroundColor: "#f2f2f2", height: "fit-content"}}
//                 elevation={6}
//             >
//                 <TodoListComponent todoListId={e.todoListId}
//                                    title={e.title}
//                                    filter={e.filter}
//                                    tasks={filteredTasks}
//                                    removeTask={removeTask}
//                                    changeTaskStatus={changeTaskStatus}
//                                    addTask={addTask}
//                                    changeTodoListFilter={changeTodoListFilter}
//                                    removeTodoList={removeTodoList}
//                                    changeTaskTitle={changeTaskTitle}
//                                    changeTodoListTitle={changeTodoListTitle}
//                 />
//             </Paper>
//         );
//     })
//     const isTodoListsEmpty = todoLists.length === 0;
    return (<></>
//         <>
//             <Box sx={{ flexGrow: 1 }}>
//                 <AppBar position="static" sx={{bgcolor: "#9c27b0"}}>
//                     <Toolbar>
//                         <IconButton
//                             size="large"
//                             edge="start"
//                             color="inherit"
//                             aria-label="menu"
//                             sx={{ mr: 2 }}
//                         >
//                             <MenuIcon />
//                         </IconButton>
//                         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                             News
//                         </Typography>
//                         <Button color="inherit">Login</Button>
//                     </Toolbar>
//                 </AppBar>
//             </Box>
//             <div className={"appDiv"}>
//             <UniversalInput callBack={addTodoList}/>
//             {isTodoListsEmpty ? <h3 style={{color: "purple"}}>Let's create your first todolist!</h3> : ""}
//             <div className={"MainTodoDiv"}>
//                 {todoListsMap}
//             </div>
//             {!isTodoListsEmpty &&
//                 <div className={"credits"}><strong>Tip:</strong> you can edit todolist or task titles by pressing double
//                     tap / click</div>
//             }
//         </div>
// </>
    );
}
export default App;