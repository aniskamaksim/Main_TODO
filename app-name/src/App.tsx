import React, {useState} from 'react';
import './App.css';
import {v1} from 'uuid';
import {Header} from "./Components/Header/Header";
import {ListOfCars} from "./Components/TodoList/ListOfCars";

export type carsTypes = {
    id: string
    brand: string
    model: string
    isTrue: boolean
}

function App() {
    const [cars, setCars] = useState ([
        {id: v1(), brand: 'Mercedes', model: 'ML', isTrue: true},
        {id: v1(), brand: 'Mercedes', model: 'SL-55', isTrue: false},
        {id: v1(), brand: 'BMW', model: 'e-35', isTrue: false},
        {id: v1(), brand: 'BMW', model: 'X5', isTrue: false},
        {id: v1(), brand: 'Opel', model: 'Vectra', isTrue: false},
        {id: v1(), brand: 'Opel', model: 'Calibra', isTrue: true},
        {id: v1(), brand: 'VolksWagen', model: 'Polo', isTrue: true},
        {id: v1(), brand: 'VolksWagen', model: 'newBeetle', isTrue: true},
        {id: v1(), brand: 'Geely', model: 'Emgrand X7', isTrue: true}

    ])

    return (
    <div>
        <Header title={'List of cars'} />
        <ListOfCars cars={cars}/>
    </div>
  );
}

export default App;
