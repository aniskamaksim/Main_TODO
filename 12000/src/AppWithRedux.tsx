import './App.css';
import {TodoListComponent} from "./Components/TodoList";
import {UniversalInput} from "./Components/UniversalInput";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import {AddTodoListAC, TodoListsType} from "./state/todoList-reducers";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "./state/store";
import {useCallback} from "react";

function App () {
    const todoLists = useSelector<rootReducerType, TodoListsType[]>((state)=>state.todolists)
    const dispatch = useDispatch();
    const addTodoList = useCallback((newTodoListTitle: string) => {
        dispatch(AddTodoListAC(newTodoListTitle));
    }, [dispatch])
    const todoListsMap = todoLists.map((e) => {
        return (
            <Paper key={e.todoListId}
                sx={{backgroundColor: "#f2f2f2", height: "fit-content"}}
                elevation={6}
            >
                <TodoListComponent todolist={e} />
            </Paper>
        );
    })
    const isTodoListsEmpty = todoLists.length === 0;
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{bgcolor: "#9c27b0"}}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            News
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <div className={"appDiv"}>
            <UniversalInput callBack={addTodoList}/>
            {isTodoListsEmpty ? <h3 style={{color: "purple"}}>Let's create your first todolist!</h3> : ""}
            <div className={"MainTodoDiv"}>
                {todoListsMap}
            </div>
            {!isTodoListsEmpty &&
                <div className={"credits"}><strong>Tip:</strong> you can edit todolist or task titles by pressing double
                    tap / click</div>
            }
        </div>
</>
    );
}
export default App;