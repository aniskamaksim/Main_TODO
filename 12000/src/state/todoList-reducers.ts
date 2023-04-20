import {v1} from "uuid";

export type FilterValuesType = "all" | "active" | "completed";
export type TodoListsType = {
    todoListId: string,
    title: string,
    filter: FilterValuesType
}
export type RemoveTodoListAT = ReturnType<typeof RemoveTodoListAC>
export type ChangeTodoListFilterAT = ReturnType<typeof ChangeTodoListFilterAC>
export type AddTodoListAT = ReturnType<typeof AddTodoListAC>
export type ChangeTodoListTitleAT = {
    type: "CHANGE-TODOLIST-TITLE",
    payload: {
        todoListId: string,
        newTodoListTitle: string
    }
}
const initialState: TodoListsType[] = []
type ActionType = RemoveTodoListAT | ChangeTodoListFilterAT | AddTodoListAT | ChangeTodoListTitleAT
export const TodoListReducers = (todoLists = initialState, action: ActionType): TodoListsType[] => {
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

export const RemoveTodoListAC = (id: string) => {
    return {
        type: "REMOVE-TODOLIST",
        payload: {
            todoListId: id
        }
    }as const
}
export const ChangeTodoListFilterAC = (id: string, filter: FilterValuesType) => {
    return {
        type: "CHANGE-TODOLIST-FILTER",
        payload: {
            todoListId: id,
            newFilterValue: filter
        }
    }as const
}
export const AddTodoListAC = (title: string) => {
    return {
        type: "ADD-TODOLIST",
        newTodo: {
            todoListId: v1(),
            title,
            filter: "all"
        }
    }as const
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
