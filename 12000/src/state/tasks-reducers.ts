import {TasksStateType} from "../App";
import {v1} from "uuid";
import {AddTodoListAT, RemoveTodoListAT} from "./todoList-reducers"

export type RemoveTaskAT = ReturnType<typeof RemoveTaskAC>
export type ChangeTaskStatusAT = ReturnType<typeof ChangeTaskStatusAC>
export type AddTaskAT = ReturnType<typeof AddTaskAC>
export type ChangeTaskTitleAT = ReturnType<typeof ChangeTaskTitleAC>

type ActionType = RemoveTaskAT | ChangeTaskStatusAT | AddTaskAT | ChangeTaskTitleAT | AddTodoListAT | RemoveTodoListAT

export const TasksReducers = (tasks: TasksStateType, action: ActionType): TasksStateType => {
    switch (action.type) {
        case "REMOVE-TASK":
            return {
                ...tasks,
                [action.payload.todoListId]: tasks[action.payload.todoListId].filter(e => e.taskId !== action.payload.taskId)
            };
        case "CHANGE-TASK-STATUS":
            return {
                ...tasks,
                [action.payload.todoListId]: tasks[action.payload.todoListId].map(e => e.taskId === action.payload.taskId ? {...e, isDone: !e.isDone} : e)
            };
        case "ADD-TASK":
            const newTask = {taskId: v1(), title: action.payload.newTaskTitle, isDone: false};
            return {...tasks, [action.payload.todoListId]: [newTask, ...tasks[action.payload.todoListId]]}
        case "CHANGE-TASK-TITLE":
            return {
                ...tasks,
                [action.payload.todoListId]: tasks[action.payload.todoListId].map(e => e.taskId === action.payload.taskId ? {...e, title: action.payload.newTaskTitle} : e)
            }
        case "ADD-TODOLIST":
            return {
                ...tasks, [action.newTodo.todoListId]: []
            }
        case "REMOVE-TODOLIST":
            const copyTasks = {...tasks}
            delete copyTasks[action.payload.todoListId]
            return {...copyTasks}
        default:
            return tasks;
    }
}

export const RemoveTaskAC = (todoId: string, tskId: string) =>{
    return {
        type: "REMOVE-TASK",
        payload: {
            todoListId: todoId,
            taskId: tskId
        }
    }as const
}
export const ChangeTaskStatusAC = (todoId: string, tskId: string) => {
    return {
        type: "CHANGE-TASK-STATUS",
        payload: {
            todoListId: todoId,
            taskId: tskId
        }
    }as const
}
export const AddTaskAC = (todoId: string, tskId: string) => {
    return {
        type: "ADD-TASK",
        payload: {
            todoListId: todoId,
            newTaskTitle: tskId
        }
    }as const
}
export const ChangeTaskTitleAC = (todoId: string, tskId: string, title: string) =>{
    return {
        type: "CHANGE-TASK-TITLE",
        payload: {
            todoListId: todoId,
            taskId: tskId,
            newTaskTitle: title
        }
    }as const
}