import React, {useState} from 'react';
import './App.css';
import {Buttons} from "./Components/Buttons";
import {Screen} from "./Components/Screen";

function App() {
    let [counter, setCounter] = useState<number>(0)
    let minValue = 0;
    let maxValue = 5;

    const increaseCounter = () => {
        counter < maxValue ? setCounter(counter + 1) : counter = maxValue;
    }

    const resetCounter = () => {
        setCounter(0)
    }

    return (
        <div className={'wrapper'}>
            <div className={'main-wrapper'}>
                <h1>I know your number</h1>
                <Screen
                    counter={counter}
                    maxValue={maxValue}
                />
                <div className={'button_div'}>
                    <Buttons
                        increaseCounter={increaseCounter}
                        resetCounter={resetCounter}
                        counter={counter}
                        minValue={minValue}
                        maxValue={maxValue}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
