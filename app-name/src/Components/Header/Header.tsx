import React from 'react';

type HeaderPropsType = {
    title: string
}

export const Header = (props: HeaderPropsType) => {
    return (
        <div>
            <div>{props.title}</div>
            <div>
                <input/>
                <button>+</button>
            </div>
        </div>
    );
};
