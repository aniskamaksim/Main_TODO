import React from 'react';
import {carsTypes} from "../../App";

type ListOfCarsPropsType = {
    cars: carsTypes[]
}

export const ListOfCars = (props: ListOfCarsPropsType) => {
    const returnedMap = props.cars.map((el) => {
        return (
            <div key={el.id}>
                <button>x</button>
                <input type={'checkbox'} defaultChecked={el.isTrue}/>
                    <span>{el.brand}: </span>
                    <span>{el.model}</span>
            </div>
        )
    })
    return (
        <div>
            {returnedMap}
            <button>All</button>
            <button>True cars</button>
            <button>Not true</button>
        </div>
    )
}