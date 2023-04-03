import {v1} from "uuid";
import {AddTaskAC, ChangeTaskStatusAC, ChangeTaskTitleAC, RemoveTaskAC, TasksReducers} from "./tasks-reducers";
import {TasksStateType} from "../App";

test("correct task should be removed", ()=>{
    const todolistId_1 = v1();
    const todolistId_2 = v1();
    const startState: TasksStateType = {
        [todolistId_1]: [
            {taskId: v1(), title: "1111", isDone: false},
            {taskId: v1(), title: "2222", isDone: true},
            {taskId: v1(), title: "3333", isDone: false}
        ],
        [todolistId_2]: [
            {taskId: v1(), title: "4444", isDone: true},
            {taskId: v1(), title: "5555", isDone: false},
            {taskId: v1(), title: "6666", isDone: true}
        ]
    };
    const taskId = startState[todolistId_1][2].taskId;
    const endState: TasksStateType = TasksReducers(startState, RemoveTaskAC(todolistId_1, taskId));


    expect(endState[todolistId_1].length).toBe(2);
    expect(endState[todolistId_1][2]).toBe(undefined);
});
test("correct task status should be changed", ()=>{
    const todolistId_1 = v1();
    const todolistId_2 = v1();
    const startState: TasksStateType = {
        [todolistId_1]: [
            {taskId: v1(), title: "1111", isDone: false},
            {taskId: v1(), title: "2222", isDone: true},
            {taskId: v1(), title: "3333", isDone: false}
        ],
        [todolistId_2]: [
            {taskId: v1(), title: "4444", isDone: true},
            {taskId: v1(), title: "5555", isDone: false},
            {taskId: v1(), title: "6666", isDone: true}
        ]
    };
    const taskId = startState[todolistId_1][2].taskId;
    const endState: TasksStateType = TasksReducers(startState, ChangeTaskStatusAC(todolistId_1, taskId));


    expect(endState[todolistId_1].length).toBe(3);
    expect(endState[todolistId_1][2].isDone).toBe(true);
});
test("new task should be added", ()=>{
    const todolistId_1 = v1();
    const todolistId_2 = v1();
    const startState: TasksStateType = {
        [todolistId_1]: [
            {taskId: v1(), title: "1111", isDone: false},
            {taskId: v1(), title: "2222", isDone: true},
            {taskId: v1(), title: "3333", isDone: false}
        ],
        [todolistId_2]: [
            {taskId: v1(), title: "4444", isDone: true},
            {taskId: v1(), title: "5555", isDone: false},
            {taskId: v1(), title: "6666", isDone: true}
        ]
    };
    // const taskId = startState[todolistId_1][2].taskId;
    const newTitle = "LOOOOL"
    const endState: TasksStateType = TasksReducers(startState, AddTaskAC(todolistId_1, newTitle));


    expect(endState[todolistId_1].length).toBe(4);
    expect(endState[todolistId_1][0].title).toBe(newTitle);
    expect(endState[todolistId_1][0].title).toBe("LOOOOL");
    expect(endState[todolistId_1][3].title).toBe("3333");
});
test("correct task title should be changed", ()=>{
    const todolistId_1 = v1();
    const todolistId_2 = v1();
    const startState: TasksStateType = {
        [todolistId_1]: [
            {taskId: v1(), title: "1111", isDone: false},
            {taskId: v1(), title: "2222", isDone: true},
            {taskId: v1(), title: "3333", isDone: false}
        ],
        [todolistId_2]: [
            {taskId: v1(), title: "4444", isDone: true},
            {taskId: v1(), title: "5555", isDone: false},
            {taskId: v1(), title: "6666", isDone: true}
        ]
    };
    const taskId = startState[todolistId_1][2].taskId;
    const newTitle = "LOOOOL"
    const endState: TasksStateType = TasksReducers(startState, ChangeTaskTitleAC(todolistId_1, taskId, newTitle));


    expect(endState[todolistId_1].length).toBe(3);
    expect(endState[todolistId_1][2].title).toBe(newTitle);
    expect(endState[todolistId_1][2].title).toBe("LOOOOL");
    expect(endState[todolistId_1][1].title).toBe("2222");
});
