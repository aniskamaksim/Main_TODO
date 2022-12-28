import React, {useState} from 'react';
import './App.css';
import {Buttons} from "./Components/Buttons";
import {Screen} from "./Components/Screen";

function App() {
    const [counter, setCounter] = useState(0)
    const increaseCounter = () => {
        setCounter(counter + 1)
    }
    const resetCounter = () => {
        setCounter(0)
    }

    return (
        <div className={'wrapper'}>
            <div className={'main-wrapper'}>
            <Screen
                counter={counter}
            />
            <div className={'button_div'}>
                <Buttons
                    callBack={increaseCounter}
                    name={'+1'}
                />
                <Buttons
                    callBack={resetCounter}
                    name={'reset'}
                    counter={counter}
                />
            </div>
        </div>
        </div>
    );
}

export default App;
