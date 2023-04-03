import {FilterValuesType, TodoListsType} from "../App";
import {v1} from "uuid";

export type RemoveTodoListAT = {
    type: "REMOVE-TODOLIST",
    payload: {
        todoListId: string
    }
}
export type ChangeTodoListFilterAT = {
    type: "CHANGE-TODOLIST-FILTER",
    payload: {
        todoListId: string,
        newFilterValue: FilterValuesType
    }
}
export type AddTodoListAT = {
    type: "ADD-TODOLIST",
    newTodo: {
        todoListId: string,
        title: string,
        filter: FilterValuesType
    }
}
export type ChangeTodoListTitleAT = {
    type: "CHANGE-TODOLIST-TITLE",
    payload: {
        todoListId: string,
        newTodoListTitle: string
    }
}

type ActionType = RemoveTodoListAT | ChangeTodoListFilterAT | AddTodoListAT | ChangeTodoListTitleAT
export const TodoListReducers = (todoLists: TodoListsType[], action: ActionType): TodoListsType[] => {
    switch (action.type) {
        case "REMOVE-TODOLIST":
            return todoLists.filter(e => e.todoListId !== action.payload.todoListId);
        case "CHANGE-TODOLIST-FILTER":
            return todoLists.map(e => e.todoListId === action.payload.todoListId ? {...e, filter: action.payload.newFilterValue} : e);
        case "ADD-TODOLIST":
            return [action.newTodo, ...todoLists];
        case "CHANGE-TODOLIST-TITLE":
            return todoLists.map(e => e.todoListId === action.payload.todoListId ? {...e, title: action.payload.newTodoListTitle} : e)
        default:
            return todoLists
    }
}

export const RemoveTodoListAC = (id: string): RemoveTodoListAT => {
    return {
        type: "REMOVE-TODOLIST",
        payload: {
            todoListId: id
        }
    }
}
export const ChangeTodoListFilterAC = (id: string, filter: FilterValuesType): ChangeTodoListFilterAT => {
    return {
        type: "CHANGE-TODOLIST-FILTER",
        payload: {
            todoListId: id,
            newFilterValue: filter
        }
    }
}
export const AddTodoListAC = (title: string): AddTodoListAT => {
    return {
        type: "ADD-TODOLIST",
        newTodo: {
            todoListId: v1(),
            title,
            filter: "all"
        }
    }
}
export const ChangeTodoListTitleAC = (id: string, title: string): ChangeTodoListTitleAT => {
    return {
        type: "CHANGE-TODOLIST-TITLE",
        payload: {
            todoListId: id,
            newTodoListTitle: title
        }
    }
}
