import {combineReducers, legacy_createStore as createStore} from "redux";
import {TodoListReducers} from "./todoList-reducers";
import {TasksReducers} from "./tasks-reducers";

export type rootReducerType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    todolists: TodoListReducers,
    tasks: TasksReducers
})

export const store = createStore(rootReducer);