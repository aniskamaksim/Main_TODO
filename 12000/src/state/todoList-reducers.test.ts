import {TodoListsType} from "../App";
import {v1} from "uuid";
import {
    AddTodoListAC,
    ChangeTodoListFilterAC, ChangeTodoListTitleAC,
    ChangeTodoListTitleAT,
    RemoveTodoListAC,
    TodoListReducers
} from "./todoList-reducers";

test("correct todolist should be removed", ()=>{
    let todoListId_1 = v1();
    let todoListId_2 = v1();
    const startState: TodoListsType[] = [
        {todoListId: todoListId_1, title: "What of the what", filter: "all"},
        {todoListId: todoListId_2, title: "What of the who", filter: "all"}
    ]

    const endState = TodoListReducers(startState, RemoveTodoListAC(todoListId_1))

    expect(endState.length).toBe(1)
    expect(endState[0].todoListId).toBe(todoListId_2)
});
test("correct todolist should change filter value", ()=> {
    let todoListId_1 = v1();
    let todoListId_2 = v1();
    const startState: TodoListsType[] = [
        {todoListId: todoListId_1, title: "What of the what", filter: "all"},
        {todoListId: todoListId_2, title: "What of the who", filter: "all"}
    ]
    const newFilter = "active";
    const endState = TodoListReducers(startState, ChangeTodoListFilterAC(todoListId_1, newFilter))

    expect(endState.length).toBe(2)
    expect(endState[0].filter).toBe(newFilter)
});
test("new todolist should be added", ()=> {
    let todoListId_1 = v1();
    let todoListId_2 = v1();
    const startState: TodoListsType[] = [
        {todoListId: todoListId_1, title: "What of the what", filter: "all"},
        {todoListId: todoListId_2, title: "What of the who", filter: "all"}
    ]
    const newTodoListTitle = "LOOOOOL";
    const endState = TodoListReducers(startState, AddTodoListAC(newTodoListTitle))

    expect(endState.length).toBe(3)
    expect(endState[2].title).toBe(newTodoListTitle)
});
test("correct todolist's title should be changed", ()=> {
    let todoListId_1 = v1();
    let todoListId_2 = v1();
    const startState: TodoListsType[] = [
        {todoListId: todoListId_1, title: "What of the what", filter: "all"},
        {todoListId: todoListId_2, title: "What of the who", filter: "all"}
    ]
    const newTodoListTitle = "LOOOOOL";
    const endState = TodoListReducers(startState, ChangeTodoListTitleAC(todoListId_1, newTodoListTitle))

    expect(endState.length).toBe(2)
    expect(endState[0].title).toBe(newTodoListTitle)
});



